import { Trash2 } from "lucide-react";
import { Button } from "../Button";
import ClipboardLogo from "../../assets/Clipboard.png";
import { Task } from "../../App";
import "./index.css";

interface TaskBoardProps {
  tasks: Task[];
  onCheckCompleted: (checked: boolean, id: number) => void;
  onRemoveItem: (id: number) => void;
}

export function TasksBoard({
  tasks,
  onCheckCompleted,
  onRemoveItem,
}: TaskBoardProps) {
  return (
    <>
      {!tasks.length ? (
        <div className="without-task-board">
          <img src={ClipboardLogo} alt="clipboard" />
          <p style={{ fontWeight: "bold" }}>
            Você ainda não tem tarefas cadastradas
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <div className="tasks-board">
          <ul>
            {tasks.map((item) => (
              <li key={item.id} className="task-item">
                <div className="task-detail">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={(event) =>
                      onCheckCompleted(event.target.checked, item.id)
                    }
                  />
                  <span
                    className={
                      item.completed ? "task-completed" : "task-description"
                    }
                  >
                    <p>{item.description}</p>
                  </span>
                </div>
                <Button
                  className="trash-button"
                  onClick={() => onRemoveItem(item.id)}
                >
                  <Trash2 size={18} />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
