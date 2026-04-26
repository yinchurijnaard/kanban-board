import { useState } from "react";

const TaskItem = ({
  task,
  moveTask,
  updateTask,
  deleteTask,
  prevStatus,
  nextStatus,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  return (
    <div className="flex flex-row gap-2 p-2 border-b">
      {/* Conditionally rendering the task or the edit input field */}
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="input w-full"
          />
          <button
            onClick={() => {
              updateTask(task.id, editText);
              setIsEditing(false);
            }}
          >
            <span class="material-symbols-outlined">save</span>
          </button>
        </>
      ) : (
        <>
          <p className="w-full">{task.text}</p>
          <button onClick={() => setIsEditing(true)}>
            <span class="material-symbols-outlined">edit</span>
          </button>
        </>
      )}

      {/* Conditionally rendering the forward and backward buttons */}
      {prevStatus && (
        <button onClick={() => moveTask(task.id, prevStatus)}>
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
      )}

      {nextStatus && (
        <button onClick={() => moveTask(task.id, nextStatus)}>
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      )}

      {/* Delete button */}
      <button onClick={() => deleteTask(task.id)}>
        <span class="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
};

export default TaskItem;
