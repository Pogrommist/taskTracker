import React, { Component } from 'react';
import './index.css';

export class TaskEntity extends Component {
  render() {
    const { taskName, taskDescription } = this.props
    return (
      <div className="taskEntity">
        <p>Имя: {taskName}</p>
        <p>Описание: {taskDescription}</p>
      </div>
    );
  }
}
