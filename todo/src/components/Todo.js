import React, { useState, useReducer } from "react";
import { todoReducer, initialTodoState } from "../reducers/todoReducer"


const Todo = () => {
    const [{ todos }, dispatch] = useReducer(todoReducer, { todos: []})
    const [text, setText] = useState();
   

 return(
<div>
<form
onSubmit={e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: text})
    setText("");
}}
>
<input value={text} onChange={e => setText(e.target.value)} />
<button>Add</button>

   </form>

 {todos.map((t,index) => 
 <div 
  key={t.item} 
 onClick={() => dispatch({type: "TOOGLE_TODO", index})}
 
 > {t.text}
    <button onClick={e =>{
    dispatch({ type: "TOGGLE_DONE", index})
}}>clear</button>
 </div>)}
 {initialTodoState.item}


   </div>
 )
 }
export default Todo;
