import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import { Outlet } from "react-router-dom";
import './App.css';
import './index.css';


function App() {
  return (
    <>
       <Navbar />
       <Outlet />
       <Cards />
           
       <card className="flex justify-center gap-10  mt-10">
                
                <img className="h-60 w-56" src="./images/nature1.jpg" alt="nature"></img>
                <img className="h-60 w-56" src="./images/nature2.jpg" alt="nature"></img>
                <img  className="h-60 w-56" src="./images/nature3.jpg" alt="nature"></img>

             </card>     
       <Footer />
     </>
  );
}

export default App;
