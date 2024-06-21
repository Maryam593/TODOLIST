
import React, { useState, useEffect } from "react";

let getLocalList =() => {
  let list = localStorage.getItem('lists');
  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
    return [];
  }
}
const Task = () => {
  // const [list, setList] = useState([]);
  const [list,setList] = useState(getLocalList());
   const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  //**************** Search -> Filter ..............
    // //for searching 
    const [search, setSearch] = useState("");
    const handleSearch = () => {
      const filteredList = list.filter((item) =>
        item.text.toLowerCase().includes(search.toLowerCase())
      );
      setList(filteredList);
    };
  useEffect(() => {
    console.log(list); // Log the updated list state
    setCount(list.length); // Update the count state variable

  }, [list]); // Only log when the list state changes

  function task(e) {
    setInput(e.target.value);
  }

  function Add(e) {
    e.preventDefault();
    if (input.trim() !== "") {
      setList([...list, { text: input, completed: false }]);
      setInput("");
    }
  }

  function handleDelete(index) {
     {
      const confirm = window.confirm("Are you sure you want to delete this item");
      if (confirm) {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
      }
    };
  }

  const handleComplete = (index) => {
    const newList = list.map((item, idx) => {
      if (idx === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setList(newList);
  };

  //local storage

  useEffect(() => {
  
    localStorage.setItem('lists', JSON.stringify(list));
  
   
  }, [list])
  
  return (
    <>
    

      <div className="AddTasks flex mt-10 overflow-auto m-4 w-[400px]">
    
        <div>
        
          <form action="">
            {/* Search bar */}
          
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your task Here!"
              value={input}
              className="mt-11 border-b-2 p-2 m-6"
              onChange={task}
            />
            <button
              type="submit"
              className="bg-sky-950 text-white p-2 rounded-3xl w-16 font-bold"
              onClick={Add}
            >
              Add
            </button>

            {/* search Button */}
            <input
              type="text"
              name=""
              id=""
              placeholder="Search your task Here!"
              
              className=" border-b-2 p-2 m-6"
              value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="bg-sky-950 text-white p-2 rounded-3xl w-16 font-bold"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
          <ul>
            {/* list => list key [0] = "Hi" */}
            {list.map((todo, index) => {
              return (
                <li
                  key={index}
                  className="bg-sky-300 rounded-3xl space-x-4 p-2 m-4"
                >
                  <div className="flex space-x-4 justify-between p-1 mx-2">
                    <div className={`flex-grow ${todo.completed ? 'line-through' : ''}`}>
                      {todo.text}
                    </div>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleComplete(index)}
                    />
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
{/* 
        <div className="search mt-[1000px]"> 
            <input type="text" name="" id="" placeholder="find your item" className="p-2 border-b-2 text-center" />
           <button className="bg-sky-950 text-white p-2 rounded-3xl w-20 font-bold">Search</button>
           </div> */}
    </>
  );
};

export default Task;
