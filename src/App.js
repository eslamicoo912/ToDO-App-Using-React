import React, { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskCard from "./components/TaskCard";
import "./App.css";
import { v4 as uuid } from "uuid";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [display, setDisplay] = useState(true);
  const LOCAL_TASKS = "tasks";
  const LOCAL_COMPLETED = "completed";

  function handleSubmit(text) {
    setTasks([{ id: uuid(), text }, ...tasks]);
  }

  function handleClick(task) {
    setCompleted([task, ...completed]);
    setTasks(
      tasks.filter((item) => {
        return item.id !== task.id;
      })
    );
  }

  function handleClear() {
    if (display) setTasks([]);
    else setCompleted([]);
  }

  useEffect(() => {
    const returnTasks = JSON.parse(localStorage.getItem(LOCAL_TASKS));
    if (returnTasks) {
      setTasks(returnTasks);
    }

    const returnCompleted = JSON.parse(localStorage.getItem(LOCAL_COMPLETED));
    if (returnCompleted) {
      setCompleted(returnCompleted);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_TASKS, JSON.stringify(tasks));
    localStorage.setItem(LOCAL_COMPLETED, JSON.stringify(completed));
  }, [tasks, completed]);

  return (
    <div className="app container">
      <AddTask handleSubmit={handleSubmit} />
      <div className="display-field w-50 m-auto my-5">
        <div className="display-tasks " onClick={() => setDisplay(true)}>
          Not Completed
        </div>
        <div className="display-completed" onClick={() => setDisplay(false)}>
          Completed
        </div>
      </div>

      {display
        ? tasks.map((task, index) => {
            return (
              <TaskCard
                title={task.text}
                key={index}
                handleClick={() => handleClick(task)}
                displayCompleted={display}
              />
            );
          })
        : completed.map((item, index) => {
            return <TaskCard title={item.text} key={index} />;
          })}
      <div
        className={
          tasks.length > 0 || completed.length > 0 ? "clear-btn" : "hidden"
        }
        onClick={handleClear}
      >
        Clear All
      </div>
    </div>
  );
};

export default App;
