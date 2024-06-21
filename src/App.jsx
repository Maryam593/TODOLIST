
import './App.css'
import Home from './components/Page/Home'
import axios from 'axios'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div className="call bg-transparent">
    <h1 className='text-center font-bold text-sky-950 text-3xl flex justify-center'>TODO LIST
      <span className='hover:animate-'>🕥</span>
    </h1>
    </div>
      <div>
         <div className="main bg-white rounded-2xl w-[700px] flex justify-center h-600 m-auto mt-11" >
         
          <Home/>
         </div>
       </div>
    </>
  )
}

export default App
