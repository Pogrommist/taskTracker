import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './index.css';

export class TaskEntity extends Component {

  render() {
    const { taskName, taskDescription, taskId, onDeleteTask } = this.props
    return (
      <tr>
        <td>{taskName}</td>
        <td>{taskDescription}</td>
        <td>
          <Button color='danger' className='Buton-delete' onClick={onDeleteTask} value={taskId}>x</Button>
        </td>
      </tr>
    );
  }
}
