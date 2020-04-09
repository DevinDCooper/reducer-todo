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
