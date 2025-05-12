import TodoItem from './TodoItem';
import styles from './TodoList.module.scss';
function TodoList(props) {
  const { todos, removeTodo, togglerItem } = props;

  return (
    <div className={styles.todoBody}>
      <div className={styles.todoList}>
        {todos.length ? (
          todos.map((todo, index) => (
            <TodoItem
              className={styles.todoList__item}
              key={todo.id}
              index={index}
              todo={todo}
              removeTodo={removeTodo}
              togglerItem={togglerItem}
            />
          ))
        ) : (
          <p className={styles.todoList__item}>
            No tasks yet. Start adding todos
          </p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
