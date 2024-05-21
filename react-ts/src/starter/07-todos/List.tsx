import { Task } from "./types";

type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
};

export default function List({ tasks, toggleTask }: ListProps) {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
            onClick={() => toggleTask({ id: task.id })}
            key={task.id}
          >
            {task.text}
          </li>
        );
      })}
    </ul>
  );
}
