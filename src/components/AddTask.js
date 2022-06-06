import React, { useEffect, useState } from "react";
import { BiTask } from "react-icons/bi";

const AddTask = (props) => {
  const [text, setText] = useState({});

  useEffect(() => {
    setText("");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(text);
    if (text === "") alert("please enter title");
    setText("");
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="w-50 m-auto add-task ">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control w-75 p-2"
          placeholder="Type the title here"
          onChange={handleChange}
          name="text"
          value={text}
        />
        <BiTask className="add-icon" onClick={handleSubmit}></BiTask>
      </form>
    </div>
  );
};

export default AddTask;
