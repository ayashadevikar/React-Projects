
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
     
         <div className="flex flex-col gap-y-4 text-center mt-10 ">
                 <h1 className="text-5xl font-bold text-6xl font-bold text-center text-blue">Popular Programs</h1>
                  <span className="text-2xl text-gray">Most in demand and watched by people.</span> 
            </div>
                

<div className='courseDetails courses flex justify-evenly mt-20 pb-10 '>
      <Courses
        imgSrc="course1.jpeg"
        altText="course1"
        courseTitle="Full Stack Web Development 2.0"
        instructor="Hitesh Choudhary"
        price="Rs.3500.00"
      />
      <Courses
        imgSrc="course2.jpeg"
        altText="course2"
        courseTitle="Full Stack Web Development 2.0"
        instructor="Hitesh Choudhary"
        price="Rs.3500.00"
      />
      <Courses
        imgSrc="course3.jpeg"
        altText="course3"
        courseTitle="Full Stack Web Development 2.0"
        instructor="Hitesh Choudhary"
        price="Rs.3500.00"
      />
</div>
      <Product />
      <Footer />
    </>
  );
}

export default App;
