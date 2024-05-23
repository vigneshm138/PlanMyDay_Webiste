import React, { useState } from "react";
import "./Dask.css";

const Dask = () => {
  const [singleTask, setsingleTask] = useState();
  const [pri, setpri] = useState("low");
  const [task, setTask] = useState([{ task: singleTask, pri: pri }]);
  const [enable,setenable]=useState(true)

  const handleTask = () => {
    setTask([...task, { task: singleTask, pri: pri }]);
    setsingleTask(" ");
  };
  return (
    <div className="task">
      <div className="task-box">
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
      </div>

      <div className="task-ul">
        <ol>
          {task.map((item) => (
            <li>
             
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
              <input value={item.task} disabled={true}/>
              <button onClick={()=>setenable(false)}>{enable?"save":"edit"}</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Dask;
