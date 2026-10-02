import { useReducer } from "react";
import TodoContext from "../TodoContext";
import { reducer, initialState } from "../reducer";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="min-h-screen bg-purple-100 px-5 py-16">
        <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-10 shadow-lg">
          
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
            My Todo List
          </h1>

          <TodoForm />

          <TodoList />

        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;