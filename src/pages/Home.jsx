// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Offer from "../components/Offer";

// const Home = () => {
//   const [bgImage, setBgImage] = useState("url('/src/assets/LOC - Chai  Garam B-min.webp')");
//   const [layout, setLayout] = useState('full-image'); // This will control layout changes
//   const [textContent, setTextContent] = useState('Welcome to Life of Chai');

//   useEffect(() => {
//     // Initialize AOS
//     AOS.init();

//     // Array of background images
//     const bgImages = [
//         "url('/src/assets/LOC - Chai  Garam B-min.webp')",
//         "url('/src/assets/Group 659-min _3_.png')",
//       "url('/src/assets/boy-drinking-chai-min.jpg')",
//     ];

//     // Array of text variations
//     const texts = [
//       "Welcome to Life of Chai", 
//       "Enjoy the Best Chai in Town", 
//       "Freshly Brewed Just for You"
//     ];

//     // Array of layouts: 'full-image', 'left-text', 'right-text'
//     const layouts = ['full-image', 'left-text', 'right-text'];

//     let index = 0;
//     let textIndex = 0;
//     let layoutIndex = 0;

//     const changeContent = () => {
//       index = (index + 1) % bgImages.length;
//       textIndex = (textIndex + 1) % texts.length;
//       layoutIndex = (layoutIndex + 1) % layouts.length;

//       setBgImage(bgImages[index]);
//       setTextContent(texts[textIndex]);
//       setLayout(layouts[layoutIndex]);
//     };

//     const intervalId = setInterval(changeContent, 5000); // Change every 5 seconds
    
//     return () => clearInterval(intervalId); // Clean up on component unmount
//   }, []);

//   return (
//     <>
//       <section
//         className="min-h-screen w-full flex items-center justify-center "
//         style={{
//           backgroundImage: bgImage,
//           transition: "background-image 1s ease-in-out", // Smooth transition
//         }}
//         data-aos="fade-up" // AOS animation
//       >
//         <div className={`flex ${layout === 'full-image' ? 'justify-center' : layout === 'left-text' ? 'flex-row-reverse' : ''} w-full`}>
//           {layout !== 'full-image' && (
//             <div className="w-full sm:w-1/2 p-8 text-center">
//               <h1 className="text-4xl font-bold text-gray-100">{textContent}</h1>
//             </div>
//           )}
//           {layout !== 'left-text' && (
//             <div className="w-full sm:w-1/2 p-8">
//               <img src="/src/assets/Group 659-min _3_.png" alt="Chai" className="w-full h-auto object-cover" />
//             </div>
//           )}
//         </div>
//       </section>
//       <Offer />
//     </>
//   );
// };

// export default Home;


// import React, { useState, useEffect } from "react";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Offer from "../components/Offer";

// const Home = () => {
  // const [bgImage, setBgImage] = useState("url('/src/assets/LOC - Chai  Garam B-min.webp')");
  // const [textContent, setTextContent] = useState("Welcome to Life of Chai");

  // useEffect(() => {
  //   // Initialize AOS
  //   AOS.init();

  //   // Arrays of background images and text content
  //   const bgImages = [
  //     "url('/src/assets/LOC - Chai  Garam B-min.webp')",
  //     "url('/src/assets/slide3-img-min.jpeg')",
  //     "url('/src/assets/Group 659-min _3_.png')",
  //     "url('/src/assets/boy-drinking-chai-min.jpg')",
  //   ];

  //   const texts = [
  //     "Welcome to Life of Chai",
  //     "Enjoy the Best Chai in Town",
  //     "Freshly Brewed Just for You",
  //     "A Perfect Blend Every Time",
  //   ];

  //   let index = 0;

  //   // Function to change the background and text
  //   const changeContent = () => {
  //     index = (index + 1) % bgImages.length; // Cycle through images and texts
  //     setBgImage(bgImages[index]);
  //     setTextContent(texts[index]);
  //   };

  //   const intervalId = setInterval(changeContent, 5000); // Change every 5 seconds

  //   return () => clearInterval(intervalId); // Clean up interval on unmount
  // }, []);

//   return (
//     <>
//      <div className="flex flex-wrap w-full h-screen overflow-hidden">
//       {/* Left Image */}
//       <div
//         className="w-full md:w-1/2 h-1/2 md:h-full"
//         data-aos="fade-right" // AOS Animation
//       >
//         <img
//           src="https://www.lifeofchai.in/blog/blog-image-min.jpg"
//           alt="Left Image"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* Right Side - Image with Overlay */}
//       <div
//         className="relative w-full md:w-1/2 h-1/2 md:h-full"
//         data-aos="fade-left" // AOS Animation
//       >
//         <img
//           src="/src/assets/Group 659-min _3_.png"
//           alt="Right Image"
//           className="object-cover w-full h-full"
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-left text-center text-white p-6">
//           <h2
//             className="text-7xl text-center font-bold mb-4"
//             data-aos="zoom-in" // AOS Animation
//           >
//             BLOG
//           </h2>

//           <FaQuoteLeft className="inline text-4xl text-white" />
//           <p
//             className="inline text-lg text-white text-center font-medium"
//             data-aos="fade-up" // AOS Animation
//           >
//             Discover Our Story: Where Passion Meets Perfection!
//             <FaQuoteRight className="inline text-4xl text-white" />
//           </p>
//         </div>
//       </div>
//     </div>
//       <Offer />
//     </>
//   );
// };

// export default Home;


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
    "/src/assets/LOC - Chai  Garam B-min.webp"
  );
  const [leftText, setLeftText] = useState("Make freshness");
  const [rightImage, setRightImage] = useState(
    "/src/assets/Group 659-min _3_.png"
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
          style={{ backgroundImage: `url('/src/assets/slide3-img-min.jpeg')` }}
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