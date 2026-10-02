import { useState, useContext } from "react";
import TodoContext from "../TodoContext";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };

      dispatch({
        type: "add",
        payload: newTodo,
      });

      setText("");
    }
  };

  return (
    <div className="mb-6 flex gap-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="
          h-\[52px\]
          flex-1
          rounded-xl
          border-2
          border-gray-200
          px-5
          text-base
          outline-none
          transition
          focus:border-purple-600
          p-3
        "
      />

      <button
        onClick={handleAdd}
        className="
          h-\[52px\]
          rounded-xl
          bg-purple-600
          px-7
          text-base
          font-semibold
          text-white
          transition
          hover:bg-purple-700
          active:scale-95
        "
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;