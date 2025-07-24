import React from "react";
import { useState } from "react";
import "../to-do-list/HomeToDoList.css";
import bgVideo from "./media/bg_video.mp4";
import addSound from "./media/submit.mp3";
import deleteSound from "./media/deleteSound.mp3";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function HomeToDoList() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const playAddSound = () => new Audio(addSound).play();
  const playDeleteSound = () => new Audio(deleteSound).play();

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTaskList([task, ...taskList]);
    setTask("");
    playAddSound();
  };

  const handleDelete = (indexToDelete) => {
    const updatedList = taskList.filter((_, i) => i !== indexToDelete);
    setTaskList(updatedList);
    playDeleteSound();
  };

  return (
    <div>
      <div className="toDoList">
        {/* ----- background video playing ----- */}
        <div className="bgVideo">
          <video autoPlay muted loop playsInline id="bgVideo">
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>
        {/* ----- to do list design ----- */}
        <div className="listDesign">
          <div className="title">
            <h3>To Do List</h3>
          </div>
          {/* ----- input box ----- */}
          <div className="inputBox">
            <form onSubmit={handleSubmit}>
                <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter Your Task...!"
            />
            <button type="submit">Submit</button>
            </form>
          </div>
          {/* ----- task list showing ----- */}
          <div className="listShow">
            {taskList.map((item, index) => (
              <div key={index} className="taskItem">
                <h4>{item}</h4>
                <button onClick={() => handleDelete(index)} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                  {hoveredIndex === index ? <DeleteForeverIcon /> : <DeleteIcon />}
                </button>
              </div>
            ))}

            {/* <div className="taskItem">
              <h4>
                my name is harpal singh, i am video editor and web devloper, i
                am good in video editing and developement
              </h4>
              <button>🗑️</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeToDoList;
