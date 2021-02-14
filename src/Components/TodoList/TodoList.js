import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./TodoList.css";

export default function TodoList({ handleFormChange }) {
  const todos = useSelector((state) => state.todos);
  const darkMode = useSelector((state) => state.darkMode);

  // useEffect(() => {

  // },[darkMode])

  return (
    <div className={darkMode ? "todoList color__invert" : "todoList"}>
      {todos && todos.length ? (
        <>
          {todos.map((todo) => {
            return (
              <div className="todoList__single">
                <p>{todo.title}</p>
                <p>{todo.desc}</p>
                <p>{todo.dueDate}</p>
                <p>{todo.status}</p>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <p
            className={
              darkMode
                ? "todoList__emptyMsg color__invert"
                : "todoList__emptyMsg"
            }
          >
            No todos yet!
          </p>
        </>
      )}
      <p className="todoList__addMore" onClick={handleFormChange}>
        Add Todo
      </p>
    </div>
  );
}
