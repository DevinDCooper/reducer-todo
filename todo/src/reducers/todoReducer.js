export const initialTodoState = {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      
}

export const todoReducer =(state, action) => {
switch (action.type) {
    case "TOGGLE_COMPLETED":
        return {
            ...state,
            completed: !state.completed,
            
        };
        case "UPDATE_TODO":
        return {
            ...state,
            item: action.payload,
            completed: false,
            id: Date.now()

        };

        default:
        return state;
}

}