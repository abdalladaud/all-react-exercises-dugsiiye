const initialState = [];

function contactReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone,
          favorite: false,
        },
      ];

    case "edit":
      return state.map((contact) =>
        contact.id === action.payload.id
          ? {
              ...contact,
              name: action.payload.name,
              email: action.payload.email,
              phone: action.payload.phone,
            }
          : contact
      );

    case "delete":
      return state.filter(
        (contact) => contact.id !== action.payload
      );

    case "toggleFavorite":
      return state.map((contact) =>
        contact.id === action.payload
          ? {
              ...contact,
              favorite: !contact.favorite,
            }
          : contact
      );

    default:
      return state;
  }
}

export { initialState, contactReducer };