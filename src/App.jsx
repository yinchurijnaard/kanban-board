import { useState, useEffect } from "react";
import "material-symbols";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";

// To Do / Check
// - Create a light/dark switcher (top-right in the Header component)

const initialTasks = [
  {
    id: 1,
    text: "Build Kanban Project",
    status: "todo",
  },
];

function App() {
  // useState
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("myTasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return initialTasks;
    }
  });
  const [inputValue, setInputValue] = useState("");

  // useEffect
  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);

  // addTask()
  const addTask = (text) => {
    const newTask = { id: Date.now(), text, status: "todo" };
    setTasks([...tasks, newTask]);
  };

  // handleAdd()
  const handleAdd = () => {
    if (!inputValue) return;
    addTask(inputValue);
    setInputValue("");
  };

  // moveTask()
  const moveTask = (id, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };
  // moveTask()

  // updateTask()
  const updateTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: updatedTask } : task,
      ),
    );
  };

  // deleteTask()
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <main className="flex flex-col gap-8">
      <Header />

      {/* DIV 1 */}
      {/* INPUT FIELD DIV */}
      <div className="sm:w-1/2 sm:self-center flex flex-col gap-4 p-4 rounded">
        <p className="text-2xl sm:text-4xl text-center font-black tracking-tighter bg-linear-to-r from-rose-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
          What do you need to get done?
        </p>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            placeholder="e.g.: Work on GitHub Issue"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input w-full text-base"
          />
          <button onClick={handleAdd} className="btn btn-soft">
            Add
          </button>
        </div>
      </div>

      {/* DIV 2 */}
      {/* TASK CARDS*/}
      <div className="flex flex-col gap-8 sm:flex-row mx-4 sm:mx-24">
        <TaskCard
          title={"To Do"}
          className={`text-xl font-bold text-blue-500`}
          tasks={tasks.filter((t) => t.status === "todo")}
          moveTask={moveTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
          nextStatus="doing"
        />
        <TaskCard
          title={"In Progress"}
          className={`text-xl font-bold text-yellow-500`}
          tasks={tasks.filter((t) => t.status === "doing")}
          moveTask={moveTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
          prevStatus="todo"
          nextStatus="done"
        />
        <TaskCard
          title={"Done"}
          className={`text-xl font-bold text-green-500`}
          tasks={tasks.filter((t) => t.status === "done")}
          moveTask={moveTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
          prevStatus="doing"
        />
      </div>
    </main>
  );
}

export default App;
