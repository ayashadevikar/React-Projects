import React from "react";

function Navbar() {
    return(
      <>
         <div class="flex justify-evenly mt-4">
            <img src="PWSkilllogo.png" class="w-[150px]" alt="pwskill logo" />
            <div class="flex items-center gap-x-4 basis-7/12 border-2 border-gray rounded-md">
                   <img src="search-icon.svg" class="h-6 ml-4" alt="search icon" />
                   <input class="w-[100%]" type="text" placeholder="What do you want to learn?"></input>
            </div>
            <button class="bg-blue text-white px-6 rounded-md">Login / Register</button>
         </div>

         <div class="mt-8">

            <ul class="flex justify-evenly">
               <li>Courses</li>
                <li>PW Skills Lab</li>
               <li>Job Portal</li>
               <li>Experience Portal</li>
               <li>Become an affiliate</li>
               <li>Hall of fame</li>
               <li>More</li>
            </ul>
         </div>

         
       
 

      </>
    )
}

export default Navbar;