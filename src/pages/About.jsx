import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft ,FaQuoteRight } from "react-icons/fa6";
import FloatingButtons from "../components/FloatingButtons";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    
   <>
   
    <div className="flex flex-wrap w-full h-screen overflow-hidden">
    {/* Left Image */}
    <div className="w-full md:w-1/2 h-1/2 md:h-full">
      <img
        src="https://www.lifeofchai.in/blog/blog-image-min.jpg"
        alt="Left Image"
        data-aos="fade-right"
        className="object-cover w-full h-full"
      />
    </div>

    {/* Right Side - Image with Overlay */}
    <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
      <img
        src="/public/assets/Group 659-min _3_.png"
        
        alt="Right Image"
        data-aos="fade-left"
        className="object-cover w-full h-full"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center  items-left text-center text-white p-6">
        <h2 className="text-7xl text-center font-bold mb-4">ABOUT US</h2>
        <FaQuoteLeft className="inline text-4xl text-white mr-2" /> 
        <p className="inline text-lg text-white font-medium">
           Discover Our Story: Where Passion Meets Perfection! .
           <FaQuoteRight className="inline text-4xl text-white mr-2" /> 
        </p>
      </div>
    </div>
    </div>
<section className="bg-gray-200 min-h-screen p-10">

{/* Main Content */}
<div className="flex flex-wrap justify-center items-center">
  {/* Left Side */}
  <div
    className="w-full md:w-1/2 p-6"
    data-aos="fade-right"
  >
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Zsq-2M7KvP_Cowdv-yfqHy6bD-GHG1KcbQ&s"
      alt="Life of Chai"
      className="rounded-xl shadow-lg w-full object-cover"
    />
  </div>

  {/* Right Side */}
  <div
    className="w-full md:w-1/2 p-6"
    data-aos="fade-left"
  >
    <h2 className="text-4xl font-bold text-yellow-800">
      A Sip of Tradition, A Dash of Innovation
    </h2>
    <p className="mt-4 text-gray-700 text-lg leading-relaxed">
      Welcome to <strong>Life of Chai</strong>, a place where chai is more than just a beverage—it's a way of life. 
      We bring together the rich traditions of chai-making with modern, innovative flavors to create an experience
      that warms your soul and delights your senses.
    </p>
    <p className="mt-4 text-gray-700 text-lg leading-relaxed">
      From the bustling streets of India to the cozy corners of your home, our mission is to celebrate the timeless
      charm of chai. Whether you prefer the classic masala chai, a refreshing green tea, or our signature fusion blends,
      we’ve got something for every chai lover.
    </p>
  </div>
</div>

{/* Values Section */}
<div className="mt-16">
  <h3 className="text-3xl font-semibold text-yellow-800 text-center mb-8" data-aos="fade-up">
    Our Core Values
  </h3>
  <div className="flex flex-wrap justify-center gap-10">
    {[
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpN0cmmKRlxd7sbnDIHEXx75o2h-qNispAg&s",
        title: "Quality",
        text: "Only the finest ingredients make it to your cup, ensuring unmatched taste and satisfaction.",
      },
      {
        img: "https://www.lifeofchai.in/frenchise-new-send-page/Images/intro01-franchise.jpeg",
        title: "Community",
        text: "We aim to bring people together, one cup of chai at a time.",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIEh6nJw1uS-VgDtDE6dbaJ2aGaVJfWUHSQ&s",
        title: "Innovation",
        text: "Blending tradition with creativity to craft unique flavors and experiences.",
      },
    ].map((value, index) => (
      <div
        key={index}
        className="w-full md:w-1/4 max-w-sm bg-gradient-to-b from-red-500 to-white shadow-lg rounded-lg p-6 text-center"
        data-aos="zoom-in"
      >
        <img src={value.img} alt={value.title} className="w-40 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-yellow-800">{value.title}</h4>
        <p className="text-gray-600 mt-2">{value.text}</p>
      </div>
    ))}
  </div>
</div>


{/* Call to Action */}
<div
  className="mt-16 text-center bg-yellow-800 text-white py-8 rounded-xl shadow-lg"
  data-aos="fade-up"
>
  <h3 className="text-3xl font-bold">Join the Chai Revolution!</h3>
  <p className="mt-4 text-lg">
    Whether you're a chai enthusiast or just starting your journey, Life of Chai is here to welcome you
    to the world of flavors, stories, and connections.
  </p>
  <button className="mt-6 px-6 py-3 bg-yellow-500 text-yellow-900 font-semibold rounded-lg shadow hover:bg-yellow-400 transition duration-300">
    Learn More
  </button>
</div>
</section>
<FloatingButtons/>
   </>




  );
};

export default AboutUs;
