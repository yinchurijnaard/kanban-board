import { useState, useEffect } from "react";

import Header from "./components/Header";
import DoneCard from "./components/DoneCard";
import DoingCard from "./components/DoingCard";
import ToDoCard from "./components/ToDoCard";

// To Do / Check
// - User needs to be able to change the task text
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
  // useState

  // useEffect
  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);
  // useEffect

  // addTask()
  const addTask = (text) => {
    const newTask = { id: Date.now(), text, status: "todo" };
    setTasks([...tasks, newTask]);
  };
  // addTask()

  // handleAdd()
  const handleAdd = () => {
    if (!inputValue) return;
    addTask(inputValue);
    console.log("Tasks are:", tasks, "Input value was", inputValue);
    setInputValue("");
  };
  // handleAdd()

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
  // updateTask()

  // deleteTask()
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));

    console.log("Test");
  };
  // deleteTask()

  return (
    <main className="h-screen w-screen flex flex-col gap-8 bg-neutral-200">
      <Header />

      {/* DIV 1 */}
      {/* INPUT FIELD DIV */}
      <div className="flex flex-col gap-2 p-2 mx-2 border rounded">
        <p className="text-xl">What do you need to get done?</p>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            placeholder="For example: work on GitHub Issue"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border rounded p-2 w-full"
          />
          <button
            onClick={handleAdd}
            className="bg-neutral-500 text-white w-fit py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </div>
      {/* INPUT FIELD DIV */}

      {/* DIV 2 */}
      {/* CARD IN COLUMNS FROM SM: */}
      <div className="flex flex-col gap-8 sm:flex-row mx-2">
        <ToDoCard
          tasks={tasks.filter((t) => t.status === "todo")}
          moveTask={moveTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        <DoingCard
          tasks={tasks.filter((t) => t.status === "doing")}
          moveTask={moveTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        <DoneCard
          tasks={tasks.filter((t) => t.status === "done")}
          moveTask={moveTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </div>
      {/* CARD IN COLUMNS FROM SM: */}
    </main>
  );
}

export default App;
