import { useState } from "react";

import { Task } from "./types";

type FormProps = {
  addTask: (task: Task) => void;
};

export default function Form({ addTask }: FormProps) {
  const [todoText, setTodoText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoText || todoText.trim() === "") {
      alert("Please enter a todo");
      return;
    }
    addTask({ id: crypto.randomUUID(), text: todoText, completed: false });
    setTodoText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button type="submit">Add todo</button>
    </form>
  );
}
