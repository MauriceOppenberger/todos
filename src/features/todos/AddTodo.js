import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./todosSlice";

const mapDispatchToProps = { addTodo };
const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) {
      return;
    }
    addTodo(todoText);
    setTodoText("");
  };
  const handleInput = (e) => {
    setTodoText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todoText} onChange={handleInput} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(AddTodo);
