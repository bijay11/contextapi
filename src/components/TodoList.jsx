import React, { Component } from "react";
class TodoList extends Component {
  state = {};
  render() {
    return (
      <div className="ui list">
        <p className="item">Plan the family trip</p>
        <p className="item">Go shopping </p>
        <p className="item">Go for a walk</p>
      </div>
    );
  }
}

export default TodoList;
