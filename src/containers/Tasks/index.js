import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { TaskEntity } from '../../components/TaskEntity';
import { getTracks } from '../../redux/selectors/tasks';
import { deleteTask } from '../../redux/actions/tasks';

class Tasks extends Component {
  handleDeleteTask = id => {
    this.props.onDeleteTask(id);
  };

  render () {
    const { tasks, onDeleteTask } = this.props;
    return (
      <div className='Tasks'>
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>Название Таска</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <TaskEntity
                key={task.id}
                taskName={task.taskName}
                taskDescription={task.taskDescription}
                taskId={task.id}
                onDelete={onDeleteTask}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: getTracks(state)
});
const mapDispatchToProps = dispatch => ({
  onDeleteTask (id) {
    return dispatch(deleteTask(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
