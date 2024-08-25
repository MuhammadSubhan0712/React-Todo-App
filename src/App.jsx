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

  // To Delete Todo
  const DeletTodo = (index) =>{
      todo.splice(index , 1);
      setTodo([...todo])
  }
  
  // To Edit Todo
  const EditTodo = (index) =>{
    const editVal = prompt("Enter Updated Value");
    todo.splice(index , 1 ,editVal)
    setTodo([...todo])
  }


  return (
    <>
    <div className='d-flex flex-column justify-content-center items-center'>
      <div className='mt-3 align-center'>
    <h1 className=''>Todo</h1>
    </div>
    <form onSubmit={addTodo}>
  <div class="mb-3">
    <label class="form-label">Enter Todo</label>
    <input type="text" class="form-control width-25px" placeholder='Todo' ref={todoVal}/>

    <button type="submit" class="btn btn-primary">Add todo</button>
 
  </div>
  </form>

  <ul>
   { todo.map((item , index) =>{
      return <div key={index}>
      <li>
        {item}
      </li>
  
  <button onClick={()=> EditTodo} type="submit" class="btn btn-success">Edit</button>
  <button onClick={() => DeletTodo} type="submit" class="btn btn-danger">Delete</button>
  </div>
})}
  </ul>

</div>
    </>
)
}


export default App
