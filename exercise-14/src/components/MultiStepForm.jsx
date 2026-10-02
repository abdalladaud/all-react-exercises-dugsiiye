import { useReducer } from "react";
import { initialState, formReducer } from "./FormReducer";

function MultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleNext = () => {
    if (state.step === 1) {
      if (!state.firstName || !state.lastName) {
        alert("Please enter your first name and last name");
        return;
      }
    }

    if (state.step === 2) {
      if (!state.email) {
        alert("Please enter your email");
        return;
      }

      if (!state.email.includes("@")) {
        alert("Please enter a valid email");
        return;
      }
    }

    dispatch({ type: "NEXT_STEP" });
  };

  return (
    <div>
      <h1>Multi-Step Registration Form</h1>

      <p>Step {state.step} of 3</p>

      {/* STEP 1 */}
      {state.step === 1 && (
        <div>
          <h2>Profile</h2>

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={state.firstName}
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={state.lastName}
            onChange={handleChange}
          />

          <br />
          <br />

          <button onClick={handleNext}>
            Next
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {state.step === 2 && (
        <div>
          <h2>Contact</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />

          <br />
          <br />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={state.phone}
            onChange={handleChange}
          />

          <br />
          <br />

          <button onClick={() => dispatch({ type: "PREV_STEP" })}>
            Back
          </button>

          {" "}

          <button onClick={handleNext}>
            Next
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {state.step === 3 && (
        <div>
          <h2>Review</h2>

          <p>
            <strong>First Name:</strong> {state.firstName}
          </p>

          <p>
            <strong>Last Name:</strong> {state.lastName}
          </p>

          <p>
            <strong>Email:</strong> {state.email}
          </p>

          <p>
            <strong>Phone:</strong> {state.phone}
          </p>

          <br />

          <button onClick={() => dispatch({ type: "PREV_STEP" })}>
            Edit
          </button>

          {" "}

          <button
            onClick={() => {
              alert("Registration Successful!");
              dispatch({ type: "RESET_FORM" });
            }}
          >
            Confirm
          </button>
        </div>
      )}

      <br />

      <button onClick={() => dispatch({ type: "RESET_FORM" })}>
        Cancel
      </button>
    </div>
  );
}

export default MultiStepForm;