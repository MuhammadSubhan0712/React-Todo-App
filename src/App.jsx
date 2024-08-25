import { useState , useRef } from 'react'
import './App.css'


// Create Component
function App() {
  const [todo, setTodo] = useState([]);
  const todoVal = useRef();

  // To add  todo 
  const addTodo = (event) =>{
    event.preventDefault();
    todo.push(todoVal.current.value);
    setTodo([...todo])
    console.log(todo);
    todoVal.current.value = "";
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
    <div className='d-flex flex-column justify-content-center place-items-center'>
      <div className='mt-3 align-center'>
    <h1 className='bg-dark text-white'>Todo</h1>
    </div>

    {/* Todo Form */}
    <form onSubmit={addTodo}>
  <div className="mb-3">
    <label className="form-label">Enter Todo</label>
    <input type="text" className="form-control width-25px" placeholder='Todo' ref={todoVal}/>

    <button type="submit" className="btn btn-primary">Add todo</button>
 
  </div>
  </form>

  <ul>
   { todo.map((item , index) =>{
      return <div key={index}>
      <li>
        {item}
      </li>
  
  <button onClick={()=> EditTodo(index)} type="submit" className="btn btn-success">Edit</button>
  <button onClick={() => DeletTodo(index)} type="submit" className="btn btn-danger">Delete</button>
  </div>
})}
  </ul>

</div>
    </>
)
}


export default App
