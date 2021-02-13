import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./TodoList.css";

export default function TodoList({ handleFormChange }) {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todoList">
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
          <p className="todoList__emptyMsg">No todos yet!</p>
        </>
      )}
      <p className="todoList__addMore" onClick={handleFormChange}>
        Add Todo
      </p>
    </div>
  );
}
