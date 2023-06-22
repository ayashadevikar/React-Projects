import React from "react";

function Carousel(){
    return(
        <>
          <div className="mt-8"> 
               <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d428076281d608f5290/web.jpg" alt="img1" ></img>
          </div>

          <div className="hidden duration-700 ease-in-out">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="LMS" ></img>
          </div>


          <div className="hidden duration-700 ease-in-out">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d078076282a178f528c/web.jpg" alt="lab"></img>
          </div>

          <div className="hidden duration-700 ease-in-out">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d18807628ba7c8f528e/web.jpg" alt="exp"></img>
          </div>

    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>

    </div>
          
        </>
    )
}

export default Carousel;
