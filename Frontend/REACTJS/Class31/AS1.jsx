Todo.jsx:
import React, { useState } from "react";
import List from "./List";
import InputBox from "./InputBox";

function Todo() {
  const [tasksArr, setTasks] = useState([]);
  const addTask = (inputValue) => {
    const newTask = inputValue;
    // we will never mutate  a state variable on our own
    let newTaskArr = [...tasksArr, newTask];
    setTasks(newTaskArr);
  };

  const handleDelete = (idx) => {
    const updatedTasksArr = tasksArr.filter((_, index) => index !== idx);
    setTasks(updatedTasksArr);
  };

  return (
    // react Fragments
    <>
      <InputBox addTask={addTask} />
      <List tasksArr={tasksArr} handleDelete={handleDelete}></List>
    </>
  );
}

export default Todo;

List.jsx:
import React from "react";

export default function List(props) {
  const { tasksArr, handleDelete } = props;
  return (
    <div className="list">
      {/* list */}
      <ul>
        {tasksArr.map((task, idx) => {
          return (
            <li
              onClick={() => {
                handleDelete(idx);
              }}
              key={idx}>
              {" "}
              {task}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

InputBox.jsx:
import React, { useState } from "react";

function InputBox(props) {
  const [inputValue, setValue] = useState("");
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const addTaskChild = () => {
    props.addTask(inputValue);
    setValue("");
  };
  // we have provide acces to taskArr -> task ARR
  return (
    <div className="inputbox">
      <input type="text" value={inputValue} onChange={handleInput} />

      <button onClick={addTaskChild}>Add Task</button>
    </div>
  );
}

export default InputBox;