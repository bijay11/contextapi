import React, { useState, useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
import { TodoListContext } from "./../contexts/TodoListContext";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const { todos, addTodo, removeTodo } = useContext(TodoListContext);
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    removeTodo(id);
  };
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        textAlign: "center",
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p
              key={todo.id}
              id={todo.id}
              onClick={handleRemoveTodo}
              className="item"
            >
              {todo.text}
            </p>
          );
        })
      ) : (
        <div>You have no todos.</div>
      )}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">Add Todo: </label>
        <input type="text" id="todo" value={todo} onChange={handleChange} />
        <input
          type="submit"
          value="Add New Todo"
          className="ui button primary"
        />
      </form>

      <button className="ui button primary" onClick={changeTheme}>
        Change the Theme
      </button>
    </div>
  );
};

export default TodoList;
