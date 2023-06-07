import React from "react";

function Card1(){
    return(
        <>
          <div className="flex flex-col gap-y-4 mt-14">
               <h1 className="text-center">“Pure Hardwork, No Shortcuts!”</h1>

             <div className="icons flex justify-evenly sm:flex flex-col">
                
                  <div className="flex flex-col justify-center items-center gap-y-4">
                        <img src="books-icon.svg" className="icons-img h-40" alt="books-icon"></img>
                         <span className="text-black font-bold text-4xl">600+</span>
                         <h2 className="text-gray-500 text-2xl font-bold">Different Courses</h2>
                   </div>

                   <div className="flex flex-col justify-center items-center gap-y-4">
                        <img src="student-icon.svg" className="icons-img h-40" alt="student-icon"></img>
                         <span className="text-black font-bold text-4xl">7,00,000+</span>
                         <h2 className="text-gray-500 text-2xl font-bold">Students Enrolled</h2>
                    </div>

                   <div className="flex flex-col justify-center items-center gap-y-4">
                        <img src="credit-card-icon.svg" className="icons-img h-40" alt="credit-card-icon"></img>
                         <span className="text-black font-bold text-4xl">10,000+</span>
                        <h2 className="text-gray-500 text-2xl font-bold">Successful Transition</h2>
                    </div>
                     
             </div>
           </div>
        </>
    )
}

export default Card1;