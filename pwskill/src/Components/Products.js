import React from "react";

function Product() {
    return(
        <>
           <h1 className="text-6xl font-bold text-center">Our Products</h1>

           <div className="flex justify-center mt-20 mb-20 sm:flex flex-col">

                 <div className="flex flex-col gap-y-8 items-center">
                     <img src="neurolab-icon.svg" alt="neurolab-icon"></img>
                     <h1 className="proudctHeading text-2xl font-bold">PW Skills Lab</h1>
                     <p class="proudctParagraph text-xl text-zinc-500 w-[20rem] text-center">Supercharge your project development with our robust lab.</p>
                 </div>

                 <div className="flex flex-col gap-y-8 items-center -mt-8">
                     <img src="jobPortal-icon.svg" alt="jobPortal-icon"></img>
                     <h1 className="proudctHeading text-2xl font-bold">Job Portal</h1>
                     <p class="proudctParagraph text-xl text-zinc-500 w-[19rem] text-center">Use exceptional templates for a stand-out resume minus the sign up process.</p>
                 </div>

                 <div className="flex flex-col gap-y-8 items-center -mt-8">
                     <img src="internship-icon.svg" alt="neurolab-icon"></img>
                     <h1 className="proudctHeading text-2xl font-bold">Experience portal</h1>
                     <p class="proudctParagraph text-xl text-zinc-500 w-[20rem] text-center">PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects.</p>
                 </div>


                
           </div>

           
           <div className="flex justify-center gap-x-20 mb-10 sm:flex flex-col">
                   <div className="flex flex-col gap-y-8 items-center">
                      <img src="affilitatePortal-icon.svg" alt="neurolab-icon" className="h-44"></img>
                       <h1 className="proudctHeading text-2xl font-bold">Become an affiliate</h1>
                       <p class="proudctParagraph text-xl text-zinc-500 w-72 text-center">Explore affiliate marketing opportunities with PW Skills and attain financial freedom.</p>
                    </div>

                    <div className="flex flex-col gap-y-8 items-center mt-2">
                        <img src="halloffame-icon.svg" alt="neurolab-icon"></img>
                        <h1 className="proudctHeading text-2xl font-bold">Hall of fame</h1>
                        <p class="proudctParagraph text-xl text-zinc-500 w-80 text-center">Our student placements and 100K+ career transitions speak volumes about our courses.</p>
                    </div>

                    
             </div>
        </>
    )
}

export default Product;