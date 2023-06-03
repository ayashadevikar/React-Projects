import React from "react";

function Courses({courseDetails}){
    return(
        <>
           <div className="flex flex-col gap-y-4 text-center mt-10">
               <h1 className="text-5xl font-bold">Popular Programs</h1>
               <span className="2xl">Most in demand and watched by people.</span> 
                 {courseDetails}
           </div>
           
           
               
        </>
    )
}

export default Courses;