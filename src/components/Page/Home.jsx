import React, { useState } from 'react'
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
    
   }
  }
  return (
    <div className='flex justify-center gap-7'>
      <Task/>
      {/* <AddTaskList/> */}
    </div>
  )
}

export default Home
