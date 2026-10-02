import { useContext } from "react";
import TodoContext from "../TodoContext";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li
      className={`
        flex
        min-h-16
        items-center
        justify-between
        rounded-xl
        bg-gray-50
        px-5
        transition
        hover:bg-gray-100
        ${todo.completed ? "bg-gray-100" : ""}
      `}
    >
      <div className="flex min-w-0 items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            dispatch({
              type: "toggle",
              payload: todo.id,
            })
          }
          className="
            h-6
            w-6
            cursor-pointer
            accent-blue-600
          "
        />

        <span
          className={`
            wrap-break-words
            text-\[17px\]
            ${
              todo.completed
                ? "text-gray-400 line-through"
                : "text-gray-700"
            }
          `}
        >
          {todo.text}
        </span>
      </div>

      {todo.completed && (
        <button
          onClick={() =>
            dispatch({
              type: "delete",
              payload: todo.id,
            })
          }
          className="
            ml-4
            shrink-0
            bg-transparent
            text-[15px]
            font-semibold
            text-red-600
            transition
            hover:text-red-800
          "
        >
          Delete
        </button>
      )}
    </li>
  );
};

export default TodoItem;