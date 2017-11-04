import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import TaskInput from '../../components/TaskInput/TaskInput';
import Tasks from '../Tasks';
import { addTask } from '../../redux/actions/tasks';

class App extends Component {
  handleSubmit = values => {
    this.props.addTask(values);
  };

  render () {
    return (
      <div className='App'>
        <h1>Task Manager</h1>
        <div className='task-inputs'>
          <TaskInput onSubmit={this.handleSubmit} />
        </div>
        <Tasks />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTask (values) {
    dispatch(addTask(values));
  }
});

export default connect(null, mapDispatchToProps)(App);
