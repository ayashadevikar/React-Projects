import { useState, createContext } from 'react'
import Navbar from "./Components/Navbar";

import './App.css'
import HeroSection from './Components/HeroSection';

export const myContext = createContext();

function App() {
 
    const [name, setName] = useState("")
    const [color, setColor] = useState("")

    const myname = (event) => {
      setName(event.target.value);
    }

    const mycolor = (event) => {
      setColor(event.target.value);
    }

  return (
   
       <myContext.Provider value={{name, color}}>
          <Navbar />
          <form>
             <input type={"text"} value={name} placeholder='Enter User name' onChange={myname}/>
             <input type={"text"} value={color} placeholder='Enter A color name' onChange={mycolor} />
          </form>
          <HeroSection />
       </myContext.Provider>
  )
}

export default App
