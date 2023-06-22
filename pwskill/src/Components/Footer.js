import React from "react";

function Footer() {
    return(
        <>
            <div className="footer-section flex justify-around text-white bg-slate-800 p-14">
                   <div className="footer flex flex-col gap-y-8 text-left">
                        <img src="PWSkills-white.png" className="h-16 w-30" alt="pwlogo"></img>
                        <p className="email flex items-center gap-x-6"><i class="fa-solid fa-envelope"></i>
                           Email us: support@pwskills.com
                        </p>

                        <p className="contact-number flex items-center gap-x-6">
                        <i class="fa-solid fa-phone-flip"></i>
                            
                            Call us: +91 7666122288
                            
                        </p>

                        <div className="social-icons flex gap-x-4 ">
                        
                           <i class="fa-brands fa-facebook-f hover:text-orange-400"></i>
                           <i class="fa-brands fa-instagram hover:text-orange-400"></i>
                           <i class="fa-brands fa-telegram hover:text-orange-400"></i>
                           <i class="fa-brands fa-youtube hover:text-orange-400"></i>
                           <i class="fa-brands fa-twitter hover:text-orange-400"></i>
                           <i class="fa-brands fa-linkedin hover:text-orange-400"></i>
                           <i class="fa-brands fa-discord hover:text-orange-400"></i>
                        
                        </div>

                        <div className="isologo">
                            <img src="iso-9001-2015.svg" className="h-32" alt="iso logo"></img>
                            <span className="iso-text ml-4">ISO 9001</span>
                        </div>
                   </div>

                   <div className="pwskill flex flex-col gap-y-8">
                       
                            <h1 className="text-3xl">PW Skills</h1>
                     
                        
                       
                        <div className="flex gap-x-20">
                            <ul className="lists flex flex-col gap-y-4">
                                 <li>About us</li>
                                 <li>FAQs</li>
                                 <li>Privacy policy</li>
                            </ul>

                            <ul className="lists flex flex-col gap-y-4">
                                 <li>Contact us</li>
                                 <li>Job assistance</li>
                                 <li>Terms and conditions</li>
                            </ul>
                        </div>
                        
                   </div>

                   <div className="product-footer">
                       <h1 className="text-3xl">Products</h1>
                       <ul className="product-lists flex flex-col gap-y-4 mt-8">
                           <li>PW Skills Lab</li>
                           <li>Job Portal</li>
                           <li>Experience Portal</li>
                           <li>Becaome an affiliate</li>
                           <li>Hall of fame</li>
                       </ul>
                   </div>
            </div>
        </>
    )
}

export default Footer;