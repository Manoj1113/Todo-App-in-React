import {useState} from 'react'
import "./App.css"
function App(){
  //default todos
  let [todoList,updateTodo]=useState(

    [ {id:1,task:"HTML"},
      {id:2,task:"CSS"},
      {id:3,task:"JavaScript"}
    ]

  )

  //new todos
  let [todoInput,updateInput]=useState("")
  function addNewtodo(){
    let nextId=todoList.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1;
    if(todoInput===""){
      alert("Add some input")
    }
    else{
      let newTodos=[
        ...todoList,
        {
          id:nextId++,
          task:todoInput
        }
      ]
      updateTodo(newTodos)
      updateInput("")
    }
  }

  function deleteTodo(id){
    let filteredTodos = todoList.filter(
      (todo) => {
            return todo.id !== id

      }
    )
      updateTodo(filteredTodos)
  }


  return(
    <>
      <h1 className="text-center">Todo App in React</h1>

      <div className="container mt-5 w-50">
        <div className="input-group">

          <input type="text" className="form-control" value={todoInput}
            onChange={(e)=>{
              let task=e.target.value
              updateInput(task)
            }} 
          ></input>
          <button className="btn btn-primary"  type='text' 
            onClick={()=>{addNewtodo()}}
          >Add</button>

        </div>

        <ul className="list-group mt-4">

         {
          todoList.map(
            (todo)=>{
              return(
                <li className="list-group-item">
                <p>{todo.task}</p>
                <button className="btn btn-warning"
                  onClick={()=>{deleteTodo(todo.id)}}
                >Delete ❌</button>
              </li>
              )
            }
          )
         }

          

        </ul>
      </div>
      

    </>
  )
}
export default App