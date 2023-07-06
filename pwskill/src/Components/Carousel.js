import React from "react";
// import { useEffect, useState } from 'react';

function Carousel(){

        // useEffect(() => {
        //   showSlides();
        // }, []);
      
        // let slideIndex = 0;
        // function showSlides() {
        //   const slides = document.getElementsByClassName("slides")[0].children;
        //   for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = "none";
        //   }
        //   slideIndex++;
        //   if (slideIndex > slides.length) {
        //     slideIndex = 1;
        //   }
        //   slides[slideIndex - 1].style.display = "block";
        //   setTimeout(showSlides, 2000); // Change slide every 2 seconds
        // }


        // function changeSlide(n) {
        //     slideIndex += n;
        //     showSlides();
        //   }
     
    return(
        <>

        <div class="carousel">

        <div className="slides">

       
          <div id="item1" className="mt-8"> 
               <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d428076281d608f5290/web.jpg" alt="img1"></img>
          </div>

          <div className="">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="img2"></img>
          </div>


          <div className="hidden duration-700 ease-in-out">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d078076282a178f528c/web.jpg" alt="img3"></img>
          </div>

          <div className="hidden duration-700 ease-in-out">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d18807628ba7c8f528e/web.jpg" alt="img4"></img>
          </div>

    
          </div>  
    </div>
            <div className="flex gap-x-2 justify-center relative -mt-6">
              <div className="dot h-2 w-2 rounded-full bg-gray hover:bg-white"></div>
              <div className="dot h-2 w-2 rounded-full bg-gray hover:bg-white"></div>
              <div className="dot h-2 w-2 rounded-full bg-gray hover:bg-white"></div>
              <div className="dot h-2 w-2 rounded-full bg-gray hover:bg-white"></div>
              </div>
   
    
        </>
    )
}

export default Carousel;
