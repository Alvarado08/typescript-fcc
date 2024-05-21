import { useState, useEffect } from "react";
import { taskList } from "./todos";
import Form from "./Form";
import List from "./List";
import { Task } from "./types";

export default function Todos() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  function loadTasks(): Task[] {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : taskList;
  }
  function updateStorage(): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  useEffect(() => {
    updateStorage();
  }, [tasks]);

  return (
    <section>
      <h1>Tasks</h1>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </section>
  );
}
