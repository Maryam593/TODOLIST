import React, { useEffect, useState } from 'react'
import Task from '../Tasks/Task.jsx'
import axios from 'axios';
//import AddTaskList from '../AddTasks/AddTaskList.jsx'



const Home = () => {
  const [todoList , setTodoList] = useState([]);

  async function getTodos ()  {
   try {
    const response = await axios.get("http://localhost:3000/AllTodos");
    setTodoList(response.data.data);
    todoList.map((todo)=> console.log(todo.task))
    // console.log(response);
   } catch (error) {
    console.log(error)
   }
  }

//calling Todos from API
 useEffect(() => {
   
  getTodos()
   
 }, [])
 
  return (
    <>
   
    <div className="cardDisplay  bg-sky-950 text-white font-bold flex w-[200px] h-[200px] justify-center items-center mt-44 rounded-[50%] shadow-2xl ">
      {/* animate-beatShake  */}
    {
        todoList.map((post)=> {
            const {id,task,body} = post;
          return <div className='card' key={id}>
            
            <h2>{task}</h2>
            <p>{body}</p> </div>

        })
      }
    </div>
    <div className='flex justify-center gap-7'>
      <Task/>
      {/* <AddTaskList/> */}
      
     </div>
    </>
  )
}

export default Home
