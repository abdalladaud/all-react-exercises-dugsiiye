import { useContext } from "react";
import TodoContext from "../TodoContext";

import styles from "../TodoItem.module.css";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li
      className={`${styles.item} ${
        todo.completed ? styles.completed : ""
      }`}
    >
      <div className={styles.left}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            dispatch({
              type: "toggle",
              payload: todo.id,
            })
          }
        />

        <span>{todo.text}</span>
      </div>

      {todo.completed && (
        <button
          className={styles.delete}
          onClick={() =>
            dispatch({
              type: "delete",
              payload: todo.id,
            })
          }
        >
          Delete
        </button>
      )}
    </li>
  );
};

export default TodoItem;