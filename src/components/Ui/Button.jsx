import {
  RiArrowLeftLine,
  RiDeleteBin2Line,
  RiResetLeftFill,
} from 'react-icons/ri';
import styles from './Button.module.scss';
function TodoButton(props) {
  const {
    buttonType,
    title,
    clearTodosList,
    clearCompletedTodos,
    completedTodosCount,
  } = props;

  switch (buttonType) {
    case 'reset':
      return (
        <button
          className={`${styles.button} ${styles.reset}`}
          title={title}
          onClick={() => {
            clearTodosList();
          }}
        >
          <RiResetLeftFill />
        </button>
      );
    case 'accept':
      return (
        <button
          className={`${styles.button} ${styles.accept}`}
          title={title}
          onClick={() => {
            clearCompletedTodos();
          }}
          disabled={!completedTodosCount}
        >
          <RiDeleteBin2Line />
        </button>
      );
    case 'submit':
      return (
        <button
          className={`${styles.button} ${styles.accept}`}
          title={title}
        >
          <RiArrowLeftLine />
        </button>
      );

    default:
      break;
  }
}

export default TodoButton;
