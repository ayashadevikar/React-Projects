import React from "react";

function Product() {
    return(
        <>
           <h1 className="text-center">Our Products</h1>
           <div className="grid grid-cols-3 justify-items-center mt-8 mb-20">
                 <div className="flex flex-col items-center">
                     <img src="neurolab-icon.svg" alt="neurolab-icon"></img>
                     <span>PW Skills Lab</span>
                     <p class="w-60 text-center">Supercharge your project development with our robust lab.</p>
                 </div>

                 <div className="flex flex-col items-center">
                     <img src="jobPortal-icon.svg" alt="jobPortal-icon"></img>
                     <span>Job Portal</span>
                     <p class="w-64 text-center">Use exceptional templates for a stand-out resume minus the sign up process.</p>
                 </div>

                 <div className="flex flex-col items-center">
                     <img src="internship-icon.svg" alt="neurolab-icon"></img>
                     <span>Job Portal</span>
                     <p class="w-64 text-center">PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects.</p>
                 </div>


                 <div className="flex flex-col items-center">
                 <img src="affilitatePortal-icon.svg" alt="neurolab-icon"></img>
                     <span>Job Portal</span>
                    <p class="w-60 text-center">Explore affiliate marketing opportunities with PW Skills and attain financial freedom.</p>
                 </div>

                 <div className="flex flex-col items-center">
                 <img src="halloffame-icon.svg" alt="neurolab-icon"></img>
                     <span>Job Portal</span>
                    <p class="w-64 text-center">Our student placements and 100K+ career transitions speak volumes about our courses.</p>
                 </div>
           </div>
        </>
    )
}

export default Product;