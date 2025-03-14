import TODOListLogo from "./assets/Logo.png";

import "./App.css";
import "./global.css";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./components/Button";
import { TasksBoard } from "./components/TasksBoard";
import { TasksCounterHeader } from "./components/TasksCounterHeader";

export interface Task {
  id: number;
  description: string;
  completed: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<number>(0);

  function handleAddTask() {
    setTasks([...tasks, { id: 1, description: "Teste", completed: false }]);
  }

  const handleCheckCheckbox = (checked: boolean, id: number) => {
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

  const handleRemoveItem = (id: number) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <header className="header">
        <img src={TODOListLogo} alt="Logotipo TODO" />
      </header>
      <div className="input-container">
        <input placeholder="Adicione uma nova tarefa" />
        <Button onClick={handleAddTask}>
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
