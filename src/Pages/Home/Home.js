import React from "react";
import "./Home.css";
import TodoInput from "../../Components/TodoInput/TodoInput";
import TodoList from "../../Components/TodoList/TodoList";
import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const handleFormChange = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="home">
      <header className="home__header">
        <p className="home__header__title">
          My <strong>To-Do</strong> List
        </p>
        <div className="home__body">
          {showForm ? (
            <TodoInput handleFormChange={handleFormChange} />
          ) : (
            <TodoList handleFormChange={handleFormChange} />
          )}
        </div>
      </header>
    </div>
  );
}
