import TODOListLogo from "./assets/Logo.png";

import "./App.css";
import "./global.css";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./components/Button";
import { TasksBoard } from "./components/TasksBoard";
import { TasksCounterHeader } from "./components/TasksCounterHeader";

export interface Task {
  id: string;
  description: string;
  completed: boolean;
}

export function App() {
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<number>(0);

  function handleAddTask() {
    if (taskDescription) {
      setTasks([
        {
          id: crypto.randomUUID(),
          description: taskDescription,
          completed: false,
        },
        ...tasks,
      ]);
    }
    setTaskDescription("");
  }

  const handleCheckCheckbox = (checked: boolean, id: string) => {
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

  const handleRemoveItem = (id: string) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <header className="header">
        <img src={TODOListLogo} alt="Logotipo TODO" />
      </header>
      <div className="input-container">
        <input
          placeholder="Adicione uma nova tarefa"
          name="taskDescription"
          value={taskDescription}
          onChange={(event) => setTaskDescription(event.target.value)}
        />
        <Button onClick={handleAddTask} disabled={!taskDescription}>
          Criar <CirclePlus size={16} style={{ marginLeft: "0.5rem" }} />
        </Button>
      </div>

      <div className="tasks-container">
        <TasksCounterHeader
          createdTasks={tasks.length}
          tasksCompleted={tasksCompleted}
        />

        <TasksBoard
          tasks={tasks}
          onCheckCompleted={handleCheckCheckbox}
          onRemoveItem={handleRemoveItem}
        />
      </div>
    </div>
  );
}
