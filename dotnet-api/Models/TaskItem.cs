namespace DotnetApi.Models;

public class TaskItem
{
  public int Id { get; set; }
  public string Name { get; set; } = string.Empty;
  public bool Completed { get; set; }
}