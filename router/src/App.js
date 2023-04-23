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
           
              <div>
                
                   <img src="./images/nature1.jpg" alt="nature"></img>
                   <img src="./images/nature1.jpg" alt="nature"></img>
                   <img src="./images/nature1.jpg" alt="nature"></img>

                </div>     
             
       <Footer />
     </>
  );
}

export default App;
