import styles from './TodoTitle.module.scss';

function TodoTitle({ title }) {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
    </div>
  );
}

export default TodoTitle;
