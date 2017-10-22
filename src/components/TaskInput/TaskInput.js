import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './index.css'

const TaskInput = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taskName">Имя</label>
        <Field
          name="taskName"
          component="input"
          type="text"
          placeholder="Имя таска" />
      </div>
      <div>
        <label htmlFor="taskDescription">Описание</label>
        <Field
          name="taskDescription"
          component="input"
          type="text"
          placeholder="Описание таска" />
      </div>
      <button type="submit">Добавить Таск</button>
    </form>
  )
}

export default reduxForm({ form: 'TaskInput' })(TaskInput)
