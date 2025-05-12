import { RiCheckFill, RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import styles from './TodoList.module.scss';
function TodoItem(props) {
  const {
    todo: { id, text, isCompleted },
    removeTodo,
    index,
    togglerItem,
  } = props;

  return (
    <div
      className={`${styles.todoList__item} ${
        isCompleted ? styles.completed : ''
      }`}
    >
      <RiTodoFill />

      <p className={styles.todoList__text}> {`${index + 1}. ${text}`}</p>

      <div className={styles.todoList__button}>
        <RiDeleteBin2Line
          onClick={() => {
            removeTodo(id);
          }}
          className={styles.delete}
        />
        <RiCheckFill
          className={`${styles.check}`}
          onClick={() => {
            togglerItem(id);
          }}
        />
      </div>
    </div>
  );
}

export default TodoItem;
