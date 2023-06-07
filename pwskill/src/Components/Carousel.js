import React from "react";

function Carousel(){
    return(
        <>

        <div class="carousel" data-carousel="slide">

        
          <div id="item1" className="mt-8 data-carousel-item"> 
               <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d428076281d608f5290/web.jpg" alt="img1" class="block "></img>
          </div>

          <div className="hidden duration-700 ease-in-out">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="LMS"  class="block "></img>
          </div>


          <div className="hidden duration-700 ease-in-out">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d078076282a178f528c/web.jpg" alt="lab"  class="block translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></img>
          </div>

          <div className="hidden duration-700 ease-in-out">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d18807628ba7c8f528e/web.jpg" alt="exp"  class="block "></img>
          </div>
    </div>
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>

    </div>
    <div className="flex justify-center w-full relative bottom-8 gap-2">
          <a href="#item1" className="btn btn-xs bg-white text-black hover:text-white border-none rounded-full">1</a> 
          <a href="#item2" className="btn btn-xs bg-white text-black hover:text-white border-none rounded-full">2</a> 
          <a href="#item3" className="btn btn-xs bg-white text-black hover:text-white border-none rounded-full">3</a> 
          <a href="#item4" className="btn btn-xs bg-white text-black hover:text-white border-none rounded-full">4</a>
          <a href="#item5" className="btn btn-xs bg-white text-black hover:text-white border-none rounded-full">5</a>
        </div>
        </>
    )
}

export default Carousel;
