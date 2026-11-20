function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>Assignee: {task.assignee}</p>

      <p>Priority: {task.priority}</p>

      <p>Status: {task.status}</p>

      <p>Due Date: {task.dueDate}</p>
    </div>
  );
}

export default TaskCard;
