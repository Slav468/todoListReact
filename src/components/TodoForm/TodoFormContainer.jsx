import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from '../TodoListBody/TodoList';
import TodoForm from './TodoForm';
import styles from './TodoGeneral.module.scss';
import TodoTitle from './TodoTitle';
function TodoFormContainer() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleActiveTodoItemHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const clearTodosListHandler = () => {
    setTodos([]);
  };

  const clearCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className={styles.todo}>
      <TodoTitle title='Todo App' />
      <TodoForm
        completedTodosCount={completedTodosCount}
        todos={todos}
        setTodo={addTodoHandler}
        clearTodosList={clearTodosListHandler}
        clearCompletedTodos={clearCompletedTodosHandler}
      />
      <TodoList
        todos={todos}
        removeTodo={removeTodoHandler}
        togglerItem={toggleActiveTodoItemHandler}
      />
      {completedTodosCount > 0 && (
        <div className={styles.todo__results}>
          {`You have completed ${completedTodosCount} ${
            completedTodosCount > 1 ? 'todos' : 'todo'
          }`}
        </div>
      )}
    </div>
  );
}

export default TodoFormContainer;
