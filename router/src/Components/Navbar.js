import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () =>{
        return (
  <div className='bg-gray-500 py-[8px]'>
    
        <ul className="flex justify-between mx-10 my-6 text-white ">
            <Link to="/Home">
                <li className='hover:text-blue-700'>Home</li>
            </Link>

            <Link to="/About">
              <li className='hover:text-blue-700'>About</li>
            </Link>

           <Link to="/Contact">
             <li className='hover:text-blue-700'>Contact</li>
          </Link>
       </ul>
   
   </div>
)
}
export default Navbar ;