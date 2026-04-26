import TaskItem from "./TaskItem";

const TaskCard = ({
  title,
  className,
  tasks,
  moveTask,
  updateTask,
  deleteTask,
  prevStatus,
  nextStatus,
}) => {
  return (
    <div className="w-full flex flex-col">
      <div className="p-2">
        <p className={className}>{title}</p>
        <div className="divider"></div>
      </div>

      <div className="flex flex-col gap-4 bg-third-text">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            moveTask={moveTask}
            updateTask={updateTask}
            deleteTask={deleteTask}
            prevStatus={prevStatus}
            nextStatus={nextStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
