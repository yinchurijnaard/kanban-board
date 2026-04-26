import { useState } from "react";

const ToDoCard = ({ tasks, moveTask, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2 p-2 border rounded">
      <p className="text-xl">To Do:</p>

      {tasks.map((task) => (
        <ul key={task.id} className="flex flex-row gap-2">
          <li className="w-full bg-neutral-100 p-2 rounded">{task.text}</li>
          <button
            onClick={() => moveTask(task.id, "doing")}
            className="bg-neutral-500 text-white w-fit py-2 px-4 rounded"
          >
            &gt;
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-neutral-500 text-white w-fit py-2 px-4 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-neutral-500 text-white w-fit py-2 px-4 rounded"
          >
            Delete
          </button>
        </ul>
      ))}
    </div>
  );
};

export default ToDoCard;
