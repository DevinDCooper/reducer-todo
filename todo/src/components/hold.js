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






import React, { useState, useReducer } from "react";
import { todoReducer, initialTodoState } from "../reducers/todoReducer"


const Todo = () => {
    const [todoState, dispatch] = useReducer(todoReducer, initialTodoState)
    const [newTodoItem, setNewTodoItem] = useState("");
    const [todos, setTodos] = useState([])
   
    

 
const handleNewTodos = e =>{
    e.preventDefault()
    if (newTodoItem === "") return
    // setTodos(dispatch({ type: "UPDATE_TODO" }))
    setTodos([...todos,{id: Date.now, item: newTodoItem, completed: false}])
    console.log(newTodoItem)

}

    const handleChanges =  e => {
        e.preventDefault()
        setNewTodoItem(e.target.value);
    };

    const removeTodo= (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

 return(

     <form onSubmit={handleNewTodos}>
     <input
     type="text"
     name="item"
     value={newTodoItem}
     onChange={handleChanges}
     />
     <button>Add</button>
     <br></br>
    <ul>
        {todos.map((todo) => 
            <li key={todo.id}>
            {todo.item}
            <button onClick={()=> removeTodo(todo.id)}>
                Clear
            </button>
            </li>)}
    </ul>
   {todoState.item}

   </form>
 )
 }
export default Todo;
