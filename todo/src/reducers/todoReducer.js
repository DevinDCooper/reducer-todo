export const initialTodoState = {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      
}

export const todoReducer =(state, action) => {
switch (action.type) {
    case "ADD_TODO":
        return {
            todos: [...state.todos, {text: action.payload, completed: false }]
        };
        case "TOGGLE_TODO":
                return {
                    todos: state.todos.map((t, index) =>  index === action.index ? {...t, completed: !t.completed } : t
                    )
                };
                case "TOGGLE_DONE":
                        return {
                            todos: state.todos.filter((t) =>  t.completed !== t.completed  )
                        };
        


        default:
        return state;
}

}