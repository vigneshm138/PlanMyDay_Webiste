import React, { useState } from "react";
import "./Dask.css";

const Dask = () => {
  const [singleTask, setsingleTask] = useState();
  const [pri, setpri] = useState("low");
  const [task, setTask] = useState([{ task: singleTask, pri: pri }]);

  const handleTask = () => {
    setTask([...task, { task: singleTask, pri: pri }]);
    setsingleTask(" ");
  };
  return (
    <div className="task">
      <input
        placeholder="add tasks"
        value={singleTask}
        onChange={(e) => setsingleTask(e.target.value)}
      />
      <select value={pri} onChange={(e) => setpri(e.target.value)}>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>

      <button onClick={handleTask}>add task</button>

      <div>
        <ul>
          {task.map((item) => (
            <li>
              {item.task}
              <span
                style={
                  item.pri === "low"
                    ? { backgroundColor: "greenyellow" }
                    : item.pri === "medium"
                    ? { backgroundColor: "yellow" }
                    : { backgroundColor: "red" }
                }
              >
                {item.pri}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dask;
