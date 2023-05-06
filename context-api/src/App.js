import React, { useState, createContext } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

export const mycontext = createContext();

function App(){

    const [name, setName] = useState("");
    const [color, setColor] = useState("");

    const myname = (e) => {
        setName(e.target.value);
    }

    const mycolor = (e) => {
        setColor(e.target.value);
    }

    return(
        
        <mycontext.Provider value={{ name, color }}>

         <Navbar />
       
           <form>
               <input 
                type={"text"}
                placeholder="Enter User Name"
                value={name}
                onChange={myname}
             />
             <input 
                type={"text"}
                placeholder="Enter A Color"
                value={color}
                onChange={mycolor}
             />
          </form>

        <HeroSection />
        </mycontext.Provider>
    )
}

export default App;