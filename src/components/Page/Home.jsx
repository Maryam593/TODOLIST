import React from 'react'
import Task from '../Tasks/Task.jsx'
//import AddTaskList from '../AddTasks/AddTaskList.jsx'



const Home = () => {
  return (
    <div className='flex justify-center gap-7'>
      <Task/>
      {/* <AddTaskList/> */}
    </div>
  )
}

export default Home
