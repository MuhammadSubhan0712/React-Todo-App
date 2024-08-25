import { useState , useRef } from 'react'
import './App.css'


// Create Component
function App() {
  const [todo, setTodo] = useState([]);
  const todoVal = useRef();

  // To add  todo 
  const addTodo = (event) =>{
    if (todo !==  " ") {
      event.preventDefault();
      todo.push(todoVal.current.value);
      setTodo([...todo])
      console.log(todo);
      todoVal.current.value = "";
    }

    else{
      alert("Please Enter todo");
    }
  }

  // To Edit Todo
  const EditTodo = (index) =>{
    const editVal = prompt("Enter Updated Value");
    todo.splice(index , 1 ,editVal)
    setTodo([...todo])
  }

  // To Delete Todo
  const DeletTodo = (index) =>{
      todo.splice(index , 1);
      setTodo([...todo])
  }
  

  return (
    <>
    <div className='container'>
    <h2>Todo</h2>

    {/* Todo form  */}
    <form className='styled-form' onSubmit={addTodo}>
  <div className="form-group">

    <label className="form-label">Enter Todo</label>
    <input type="text" className="form-control width-25px" placeholder='Todo' ref={todoVal}/>

    </div>

    <button type='submit'> Add Todo </button>

  </form>

    {/* Todo List  */}

  <ul className='styled-list'>
   { todo.map((item , index) =>{
      return <div key={index}>
      <li>
        {item}
      </li>
  <button onClick={()=> EditTodo(index)} type="submit" className="btn-success">Edit</button>
  <button onClick={() => DeletTodo(index)} type="submit" className="btn-danger">Delete</button>
  </div>
})}
  </ul>

</div>
    </>
)
}


export default App
