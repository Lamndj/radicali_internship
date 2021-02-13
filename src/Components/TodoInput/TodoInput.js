import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { PrimaryButton } from "office-ui-fabric-react";
import "./TodoInput.css";
import { useHistory } from "react-router-dom";

export default function TodoInput({ handleFormChange }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("");
  const [fieldError, setfieldError] = useState(false);
  const hHistory = useHistory();

  const saveToDo = () => {
    if (title !== "" && desc !== "") {
      setfieldError(false);
      let myToDo = {
        title,
        desc,
        dueDate,
        status,
        id: Math.ceil(Math.random() * 100),
      };

      dispatch({
        type: "CONFIRM_TODO",
        payload: myToDo,
      });

      hHistory.push(`/confirm`);
    } else {
      setfieldError(true);
    }
  };

  const options = [
    {
      key: "todo",
      text: "ToDo",
    },
    { key: "ongoing", text: "Ongoing" },
    { key: "stalled", text: "Stalled" },
    { key: "done", text: "Done" },
  ];

  return (
    <div className="todoInput">
      <TextField
        label="Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Description"
        required
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <TextField
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <Dropdown
        placeholder="Select an option"
        label="Status"
        options={options}
        value={status}
        onChange={(e, item) => setStatus(item.key)}
      />
      {fieldError && (
        <p className="todoInput__error">Title and Description are mandatory!</p>
      )}
      <PrimaryButton
        text="Save"
        onClick={saveToDo}
        className="todoInput__btn color__inverted"
      />
    </div>
  );
}
