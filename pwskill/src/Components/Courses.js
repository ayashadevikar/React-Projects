import React from "react";

function Courses({ imgSrc, altText, courseTitle, instructor, price }){
    return(
        <>
           
            
          
                 <div className="courseDetails">
                      <img src={imgSrc} alt={altText} className="h-[10rem]" />
                      <h1>{courseTitle}</h1>
                      <div className='coursePrice flex flex-col gap-y-4 mt-8'>
                         <h2>{instructor}</h2>
                         <span className='price text-xl font-bold'>{price}</span>
                      </div>
                </div>
         
           
           
               
        </>
    )
}

export default Courses;


