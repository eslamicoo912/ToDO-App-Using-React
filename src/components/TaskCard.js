import React from "react";
import { GoDiffAdded } from "react-icons/go";
import { MdOutlineDone } from "react-icons/md";

const TaskCard = ({ title, handleClick, displayCompleted }) => {
  return (
    <div className="task-card w-50 m-auto my-2">
      <p className="task-title">{title}</p>
      {!displayCompleted ? (
        <MdOutlineDone className="completed-icon"></MdOutlineDone>
      ) : (
        <GoDiffAdded
          className="task-icon"
          onClick={(task) => handleClick(task)}
        ></GoDiffAdded>
      )}
    </div>
  );
};

export default TaskCard;
