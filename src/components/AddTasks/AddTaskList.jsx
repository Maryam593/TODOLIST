import React, { useState } from 'react'

const AddTaskList = () => {
    //for entering data
    const [input,setInput] = useState('')
    //for list 
    const [list, setList] = useState([]);

//     
  return (
    <div>
      <ul> 
        {
            // input.map((currentTask, index) => 

            //     <li key={index} className="flex items-center"> </li>
            // )
            list.map((currentTask,index) =>  (
                <li key={index} className="flex items-center"> </li>
            
            )) }
              
      </ul>
    </div>
  )
}

export default AddTaskList
