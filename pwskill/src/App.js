
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Card1 from './Components/Card1';
import Courses from './Components/Courses';
import Product from './Components/Products';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      
      <Navbar />
      <Carousel />
      <Card1 />
       <Courses />
       <div className='courses flex justify-evenly mt-20 pb-10'>

   
           <div className="courseDetails">
                <img src="course1.jpeg" alt="course1" className="img1 h-[10rem]"></img>
                <h1>Full Stack Web Development 2.0</h1>
                <div className='coursePrice flex flex-col gap-y-4 mt-8'>
                  
                   <h2>Hitesh Choudhary</h2>
                   <span className='price text-xl font-bold'>Rs.3500.00</span>
                </div>
                
            </div>   

            <div className="courseDetails">
                <img src="course2.jpeg" alt="course2" className="h-[10rem]"></img>
                <h1>Full Stack Web Development 2.0</h1>

                <div className='coursePrice flex flex-col gap-y-4 mt-8'>
                     <h2>Hitesh Choudhary</h2>
                     <span className='price text-xl font-bold'>Rs.3500.00</span>
                </div>
               
            </div>   

            <div className="courseDetails">
                <img src="course3.jpeg" alt="course3" className="h-[10rem]"></img>
                <h1>Full Stack Web Development 2.0</h1>
                <div className='coursePrice flex flex-col gap-y-4 mt-8'>
                     <h2>Hitesh Choudhary</h2>
                     <span className='price text-xl font-bold'>Rs.3500.00</span>
                </div>
               
            </div> 

       </div>  
      <Product />
      <Footer />
    </>
  );
}

export default App;
