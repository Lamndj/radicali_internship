import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PrimaryButton } from "office-ui-fabric-react";
import { useHistory } from "react-router-dom";
import "./Confirmation.css";

export default function Confirmation() {
  const confirmTodo = useSelector((state) => state.confirmTodo);
  const dispatch = useDispatch();
  const hHistory = useHistory();
  const darkMode = useSelector((state) => state.darkMode);

  useEffect(() => {
    // if (!confirmTodo || !confirmTodo.id) {
    //   window.location.href = "/";
    // }
    console.log(confirmTodo);
  }, [confirmTodo]);

  const saveToDo = () => {
    dispatch({
      type: "ADD_TODO",
      payload: confirmTodo,
    });
    hHistory.push(`/`);
  };

  return (
    <div className="confirmation">
      <div
        className={
          darkMode ? "confirmation__body color__invert" : "confirmation__body"
        }
      >
        <div
          className={
            darkMode ? "confirmation__card color__invert" : "confirmation__card"
          }
        >
          <div className="confirmation__field">
            <label>Title</label>
            <p>{confirmTodo.title}</p>
          </div>
          <div className="confirmation__field">
            <label>Description</label>
            <p>{confirmTodo.desc}</p>
          </div>
          <div className="confirmation__field">
            <label>Due Date</label>
            <p>{confirmTodo.dueDate}</p>
          </div>
          <div className="confirmation__field">
            <label>Status</label>
            <p>{confirmTodo.status}</p>
          </div>
        </div>
        <PrimaryButton
          text="Confirm"
          onClick={saveToDo}
          className="confirmation__btn"
        />
      </div>
    </div>
  );
}
