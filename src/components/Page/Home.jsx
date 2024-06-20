import React, { useEffect, useState } from 'react'
import Task from '../Tasks/Task.jsx'
import axios from 'axios';
//import AddTaskList from '../AddTasks/AddTaskList.jsx'



const Home = () => {
  const [todoList , setTodoList] = useState([]);

  async function getTodos ()  {
   try {
    const response = await axios.get("http://localhost:3000/AllTodos");
    console.log(response);
   } catch (error) {
    console.log(error)
   }
  }

//calling Todos from API
 useEffect(() => {
   
  getTodos()
   
 }, [])
 
  return (
    <div className='flex justify-center gap-7'>
      <Task/>
      {/* <AddTaskList/> */}
    </div>
  )
}

export default Home
