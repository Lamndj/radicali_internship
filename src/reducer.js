const initialState = {
  todos: [],
  confirmTodo: {},
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
    default: {
      return state;
    }
  }
};

export default reducer;
