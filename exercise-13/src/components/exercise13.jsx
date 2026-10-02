import { useReducer } from "react";

const initialState = {
  counterA: 0,
  counterB: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_A":
      return {
        ...state,
        counterA: state.counterA + 1,
      };

    case "DECREMENT_A":
      return {
        ...state,
        counterA: state.counterA - 1,
      };

    case "INCREMENT_B":
      return {
        ...state,
        counterB: state.counterB + 1,
      };

    case "DECREMENT_B":
      return {
        ...state,
        counterB: state.counterB - 1,
      };

    case "RESET_ALL":
      return {
        counterA: 0,
        counterB: 0,
      };

    default:
      return state;
  }
}

function DoubleCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Double Counter</h1>

      {/* Counter A */}
      <section>
        <h2>Counter A: {state.counterA}</h2>

        <button onClick={() => dispatch({ type: "INCREMENT_A" })}>
          Increment A
        </button>

        <button onClick={() => dispatch({ type: "DECREMENT_A" })}>
          Decrement A
        </button>
      </section>

      <hr />

      {/* Counter B */}
      <section>
        <h2>Counter B: {state.counterB}</h2>

        <button onClick={() => dispatch({ type: "INCREMENT_B" })}>
          Increment B
        </button>

        <button onClick={() => dispatch({ type: "DECREMENT_B" })}>
          Decrement B
        </button>
      </section>

      <hr />

      {/* Reset */}
      <button onClick={() => dispatch({ type: "RESET_ALL" })}>
        Reset Both
      </button>
    </div>
  );
}

export default DoubleCounter;