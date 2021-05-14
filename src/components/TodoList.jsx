import React, { Component } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
class TodoList extends Component {
  static contextType = ThemeContext;
  state = {};
  render() {
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
      <div
        style={{
          background: theme.background,
          color: theme.text,
          height: "140px",
          textAlign: "center",
        }}
      >
        <p className="item">Plan the family trip</p>
        <p className="item">Go shopping </p>
        <p className="item">Go for a walk</p>
        <button className="ui button primary" onClick={changeTheme}>
          Change the Theme
        </button>
      </div>
    );
  }
}

export default TodoList;
