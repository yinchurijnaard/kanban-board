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
            aria-label="save edited task name"
          >
            <span class="material-symbols-outlined">save</span>
          </button>
        </>
      ) : (
        <>
          <p className="w-full">{task.text}</p>
          <button
            onClick={() => setIsEditing(true)}
            aria-label="edit task name"
          >
            <span class="material-symbols-outlined">edit</span>
          </button>
        </>
      )}

      {/* Conditionally rendering the forward and backward buttons */}
      {prevStatus && (
        <button
          onClick={() => moveTask(task.id, prevStatus)}
          aria-label="move task backwards one column"
        >
          <span class="material-symbols-outlined">arrow_back</span>
        </button>
      )}

      {nextStatus && (
        <button
          onClick={() => moveTask(task.id, nextStatus)}
          aria-label="move task forward one column"
        >
          <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      )}

      {/* Delete button */}
      <button onClick={() => deleteTask(task.id)} aria-label="delete task">
        <span class="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
};

export default TaskItem;
