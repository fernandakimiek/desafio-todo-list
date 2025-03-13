import TODOListLogo from "./assets/Logo.png";
import ClipboardLogo from "./assets/Clipboard.png";

import "./App.css";
import "./global.css";
import { CirclePlus, Trash2 } from "lucide-react";
import { useState } from "react";

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<number>(0);

  function handleAddTask() {
    setTasks([...tasks, { id: 1, description: "Teste", completed: false }]);
  }

  const toggleCheckbox = (checked: boolean, id: number) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    if (checked) {
      setTasksCompleted((task) => task + 1);
    } else {
      setTasksCompleted((task) => task - 1);
    }
  };

  const removeItem = (id: number) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <header className="header">
        <img src={TODOListLogo} alt="Logotipo TODO" />
      </header>
      <div className="input-container">
        <input placeholder="Adicione uma nova tarefa" />
        <button onClick={handleAddTask}>
          Criar <CirclePlus size={16} style={{ marginLeft: "0.5rem" }} />
        </button>
      </div>

      <div className="tasks-container">
        <div className="counter-box">
          <div className="tasks-created-counter">
            Tarefas criadas <span className="counter">{tasks.length}</span>
          </div>
          <div className="tasks-completed-counter">
            Concluídas
            <span className="counter">
              {tasks.length > 0
                ? `${tasksCompleted} de ${tasks.length}`
                : tasksCompleted}
            </span>
          </div>
        </div>

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
                        toggleCheckbox(event.target.checked, item.id)
                      }
                    />
                    <span
                      className={
                        item.completed ? "line-through text-gray-500" : ""
                      }
                    >
                      <p>{item.description}</p>
                    </span>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="trash-button"
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
