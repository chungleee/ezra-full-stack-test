using Microsoft.EntityFrameworkCore;
using DotnetApi.Models;

namespace DotnetApi.Data;

public class AppDbContext : DbContext
{
  public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
  public DbSet<TaskItem> Tasks { get; set; }
}