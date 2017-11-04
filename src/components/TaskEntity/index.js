import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './index.css';

export class TaskEntity extends Component {
  handleDeleteTask = () => {
    const { taskId, onDelete } = this.props;
    onDelete(taskId);
  };

  render () {
    const { taskName, taskDescription, taskId } = this.props;
    return (
      <tr>
        <td>{taskName}</td>
        <td>{taskDescription}</td>
        <td>
          <Button
            color='danger'
            className='Buton-delete'
            onClick={this.handleDeleteTask}
            value={taskId}
          >
            x
          </Button>
        </td>
      </tr>
    );
  }
}
