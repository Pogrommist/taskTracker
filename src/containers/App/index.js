import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux'
import TaskInput from '../../components/TaskInput/TaskInput'
import Tasks from '../Tasks'
import { addTask } from '../../redux/actions/tasks'

class App extends Component {
  handleSubmit = (values) => {
    console.log(values)
    addTask(values)
  }

  render() {
    return (
      <div className="App">
        Task Manager
        <div className="task-inputs">
          <TaskInput onSubmit={this.handleSubmit} />
        </div>
        <Tasks />
      </div>
    );
  }
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({
  addTask: addTask()
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
