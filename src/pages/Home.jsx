

import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import Offer from "../components/Offer";
import FloatingButtons from "../components/FloatingButtons";
// import ImageSlider from "./ImageSlider";


const Home = () => {
  const [leftImage, setLeftImage] = useState(
    "https://www.lifeofchai.in/blog/blog-image-min.jpg",
    "/public/assets/LOC - Chai  Garam B-min.webp"
  );
  const [leftText, setLeftText] = useState("Make freshness");
  const [rightImage, setRightImage] = useState(
    "/public/assets/Group 659-min _3_.png"
  );
  const [rightText, setRightText] = useState("Best in the Town");

  useEffect(() => {
    AOS.init();
  }, []);



  return (
    <>
      {/* <div className=""> */}
        {/* Hidden section on mobile view */}
        <section
          className="relative max-width-full h-screen bg-contain bg-center items-center justify-center hidden md:block"
          style={{ backgroundImage: `url('/public/assets/slide3-img-min.jpeg')` }}
        ></section>

{/* <ImageSlider/> */}

        <div className="flex flex-wrap w-full h-screen overflow-hidden">
          {/* Left Image */}
          <div
            className="w-full md:w-1/2 h-1/2 md:h-full"
            data-aos="fade-right" // AOS Animation
          >
            <img src={leftImage} alt="Left Image" className="object-cover w-full h-full" />
          </div>

          {/* Right Side - Image with Overlay */}
          <div
            className="relative w-full md:w-1/2 h-1/2 md:h-full"
            data-aos="fade-left" // AOS Animation
          >
            <img src={rightImage} alt="Right Image" className="object-cover w-full h-full" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-left text-center text-white p-6">
              <h2
                className="text-7xl text-center font-bold mb-4"
                data-aos="zoom-in" // AOS Animation
              >
                {rightText}
              </h2>

              <FaQuoteLeft className="inline text-4xl text-white" />
              <p
                className="inline text-lg text-white text-center font-medium"
                data-aos="fade-up" // AOS Animation
              >
                {leftText}
                <FaQuoteRight className="inline text-4xl text-white" />
              </p>
            </div>
          </div>
        </div>
      {/* </div> */}
      <Offer />
      <FloatingButtons/>
    </>
  );
};

export default Home;



// bg-[url('https://www.lifeofchai.in/Images/Featured%20Dish%20that%20people%20like/Elaichi%20Chai-min.jpg')] bg-cover bg-center