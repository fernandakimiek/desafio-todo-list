import "./index.css";

interface TasksCounterHeaderProps {
  createdTasks: number;
  tasksCompleted: number;
}

export function TasksCounterHeader({
  createdTasks,
  tasksCompleted,
}: TasksCounterHeaderProps) {
  return (
    <div className="counter-box">
      <div className="tasks-created-counter">
        Tarefas criadas <span className="counter">{createdTasks}</span>
      </div>
      <div className="tasks-completed-counter">
        Concluídas
        <span className="counter">
          {createdTasks > 0
            ? `${tasksCompleted} de ${createdTasks}`
            : tasksCompleted}
        </span>
      </div>
    </div>
  );
}
