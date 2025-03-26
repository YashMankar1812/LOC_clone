import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Journey = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="p-6 md:p-8 bg-gray-100">
      {/* Section Title */}
      <div data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-red-800">
          OUR CAFÉ’S - Browse our Flavourful Journey.
        </h2>
        <p className="text-sm md:text-base text-center px-4 md:px-8 text-black">
          "At LOC, our guiding principle is to craft inventive teas, nurture enduring relationships, and deliver exceptional experiences that leave a lasting impression..."
        </p>
      </div>

      {/* First Section - LOC QSR Model */}
      <div className="mt-8 flex flex-col md:flex-row items-center md:items-start" data-aos="fade-right">
        <div className="flex-1 mb-6 md:mb-0 md:mr-6">
          <h3 className="text-4xl md:text-6xl font-bold text-red-800 mb-4 text-center md:text-left">
            LOC QSR Model
          </h3>
          <p className="text-sm md:text-base text-black mb-5 text-center md:text-left px-4 md:px-0">
            LOC QSR Cafe buzzes with energy and diversity, serving amazing tea and delicious, affordable bites...
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-red-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://lifeofchai.in/Images/QSR%20Cafe/1_1%20-%20Photo1-min.webp"
              alt="QSR Cafe"
              className="w-full rounded-md object-cover"
            />
            <img
              src="https://lifeofchai.in/Images/QSR%20Cafe/2_12%20-%20Photo-min.webp"
              alt="QSR Cafe"
              className="w-full rounded-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Horizontal black line */}
      <div className="h-[1px] bg-black my-8"></div>

      {/* Second Section - LOC Premium Cafe */}
      <div className="mt-8 flex flex-col-reverse md:flex-row items-center md:items-start" data-aos="fade-left">
        {/* Image Section */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://lifeofchai.in/Images/Premium%20Cafe/1_14%20-%20Photo-min.webp"
              alt="Premium Lounge"
              className="w-full rounded-md object-cover"
            />
            <img
              src="https://lifeofchai.in/Images/Premium%20Cafe/1_15%20-%20Photo-min.webp"
              alt="Premium Lounge"
              className="w-full rounded-md object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 mb-6 md:mb-0 md:ml-6">
          <h3 className="text-4xl md:text-6xl font-bold text-red-800 mb-4 text-center md:text-left">
            LOC Premium Cafe
          </h3>
          <p className="text-sm md:text-base text-black mb-5 text-center md:text-left px-4 md:px-0">
            Step into our premium café, where elegance meets comfort in a chic setting...
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-red-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal black line */}
      <div className="h-[1px] bg-black my-8"></div>
    </div>
  );
};

export default Journey;
