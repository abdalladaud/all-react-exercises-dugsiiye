import { useContext } from "react";
import TodoContext from "../TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <ul className="m-0 flex list-none flex-col gap-3 p-0">
      {state.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;