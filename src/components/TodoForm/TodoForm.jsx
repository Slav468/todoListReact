import { useState } from 'react';
import TodoButton from '../Ui/Button';
import styles from './TodoForm.module.scss';

function TodoForm(props) {
  const [value, setValue] = useState('');
  const {
    todos,
    setTodo,
    clearTodosList,
    clearCompletedTodos,
    completedTodosCount,
  } = props;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    setTodo(value);
    setValue('');
  };

  const onChangeValueHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.form__container}>
      <form
        onSubmit={onSubmitHandler}
        className={styles.form}
      >
        <input
          type='text'
          name='task'
          className={styles.form__input}
          placeholder='Enter new todo'
          value={value}
          onChange={onChangeValueHandler}
        />

        <TodoButton
          buttonType='submit'
          type='submit'
          className={styles.form__button}
        />
      </form>
      {!!todos.length && (
        <div className={styles.form__buttons}>
          <TodoButton
            buttonType='reset'
            title='Reset Todos'
            clearTodosList={clearTodosList}
          />
          <TodoButton
            buttonType='accept'
            title='Clear completed Todos'
            clearCompletedTodos={clearCompletedTodos}
            completedTodosCount={completedTodosCount}
          />
        </div>
      )}
    </div>
  );
}

export default TodoForm;
