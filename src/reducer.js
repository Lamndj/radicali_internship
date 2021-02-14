const initialState = {
  todos: [],
  confirmTodo: {},
  darkMode: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case "DELETE_TODO": {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case "CONFIRM_TODO": {
      return {
        ...state,
        confirmTodo: action.payload,
      };
    }
    case "DARK_MODE": {
      return {
        ...state,
        darkMode: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
