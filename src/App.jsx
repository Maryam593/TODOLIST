
import './App.css'
import Home from './components/Page/Home'
import axios from 'axios'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <div className="main bg-white rounded-md w-96 flex justify-center h-600 m-auto mt-11" >
          <Home/>
         </div>
       </div>
    </>
  )
}

export default App
