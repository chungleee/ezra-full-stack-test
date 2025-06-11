namespace DotnetApi.Models;

public class TaskItem
{
  public int Id { get; set; }
  public string? Name { get; set; }
  public bool Completed { get; set; } = false;
}