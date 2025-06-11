using Microsoft.EntityFrameworkCore;
using DotnetApi.Data;
using DotnetApi.Models;
using DotnetApi.DTO;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>((options) =>
{
    options.UseSqlite("Data Source=dev.db");
});

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapGet("/api/tasks/", async (AppDbContext db) =>
{
    return await db.Tasks.ToListAsync();
});

app.MapPost("/api/tasks/", async (CreateTaskItemDTO task, AppDbContext db) =>
{
    var newTask = new TaskItem
    {
        Name = task.Name
    };

    db.Tasks.Add(newTask);
    await db.SaveChangesAsync();

    return Results.Json(new
    {
        type = "success",
        data = newTask
    });
});

app.MapPatch("/api/tasks/{id}", async (int id, AppDbContext db) =>
{
    var foundTask = await db.Tasks.FindAsync(id);
    if (foundTask is null)
    {
        return Results.NotFound(new { type = "error", message = "Task not found" });
    }

    foundTask.Completed = !foundTask.Completed;
    await db.SaveChangesAsync();
    return Results.Ok(new { type = "success", data = foundTask });
});

app.MapDelete("/api/tasks/{id}", async (int id, AppDbContext db) =>
{
    var deleteTask = await db.Tasks.FindAsync(id);
    if (deleteTask is null)
    {
        return Results.NotFound(new { type = "error", message = "Task not found" });
    }

    db.Tasks.Remove(deleteTask);
    await db.SaveChangesAsync();
    return Results.Ok(new { type = "success", data = deleteTask });
});

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
}

app.Run();
