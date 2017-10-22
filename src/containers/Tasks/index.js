import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux'
import { TaskEntity } from '../../components/TaskEntity'
import { getTracks } from '../../redux/selectors/tasks'

class Tasks extends Component {
  render() {
    const { tasks } = this.props
    return (
      <div className="Tasks">
        {
          tasks.map(task =>
            <TaskEntity
              key={task.id}
              taskName={task.taskName}
              taskDescription={task.taskDescription}
            />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: getTracks(state)
})

export default connect(mapStateToProps, null)(Tasks)
