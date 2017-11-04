import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'reactstrap';
import './index.css';

const TaskInput = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name='id'
        component='input'
        type='text'
        hidden
        value={this.createId}
      />
      <div>
        <label htmlFor='taskName'>Имя</label>
        <Field
          name='taskName'
          id='taskName'
          component='input'
          type='text'
          placeholder='Имя таска'
        />
      </div>
      <div>
        <label htmlFor='taskDescription'>Описание</label>
        <Field
          name='taskDescription'
          id='taskDescription'
          component='input'
          type='text'
          placeholder='Описание таска'
        />
      </div>

      <Button color='success' type='submit'>
        Добавить Таск
      </Button>
    </form>
  );
};

export default reduxForm({ form: 'TaskInput' })(TaskInput);
