import React, { useState, useReducer } from "react";
import { todoReducer, initialTodoState } from "../reducers/todoReducer"




const TodoForm = () => {
const [todoState, dispatch] = useReducer(todoReducer, initialTodoState)
const [newTodoItem, setNewTodoItem] = useState("");

const handleChanges =  e => {
    setNewTodoItem(e.target.value);
};



return (
    <div>
      {!todoState.completed ? (
        <h1>
          {todoState.item}{" "}
          <i
            onClick={() => dispatch({ type: "TOGGLE_COMPLETED" })}
            className="far fa-edit"
          />
        </h1>
      ) : (
        <div>
          <input
            className="todo-input"
            type="text"
            name="newTodoText"
            value={newTodoItem}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "UPDATE_TODO", payload: newTodoItem });
            }}
          >
            Update title
          </button>
          <button
            onClick={() => {
              dispatch({ type: "TOGGLE_COMPLETED" });
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoForm;