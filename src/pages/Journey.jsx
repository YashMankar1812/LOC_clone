import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Journey = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="p-8 bg-gray-100 ">
      {/* Section Title */}
      <div data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-4 text-red-800">
          OUR CAFÉ’S- Browse our Flavourful Journey.
        </h2>
        <p className="text-sm text-center p-8 text-black">
          "At LOC, our guiding principle is to craft inventive teas, nurture enduring relationships, and deliver exceptional experiences that leave a lasting impression. To bring this vision to life, we offer a diverse range of spaces, from our cozy, welcoming regular cafes to our sophisticated premium lounges. Each visit promises a unique experience, tailored to delight every palate and enhance your time with us. Discover how our different outlets transform each cup of tea into a new adventure, ensuring every moment at LOC is both extraordinary and memorable."
        </p>
      </div>

      {/* First Section */}
      <div className="mt-8" data-aos="fade-right">
        <div className="flex flex-col sm:flex-row justify-between mb-8">
          <div className="flex-1 m-10">
            <h3 className="text-7xl font-bold text-red-800 mb-4">LOC QSR Model</h3>
            <p className="text-sm text-black mb-5 ">
              LOC QSR Cafe buzzes with energy and diversity, serving amazing tea and delicious, affordable bites in a lively, welcoming atmosphere. With a perfect food menu and seating for 15 to 20, it's the perfect spot to enjoy a quick snack amid a fast-moving crowd.
            </p>
            <button className="bg-black hover:ease-in-out duration-300 text-white py-2 px-4 rounded-full">Learn More</button>
          </div>

          {/* Vertical black line */}
          <div className="hidden sm:block w-[2px] bg-black mx-4"></div>

          {/* Image Section */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://lifeofchai.in/Images/QSR%20Cafe/1_1%20-%20Photo1-min.jpg" alt="QSR Cafe" className="w-80 h-[45] rounded-md" />
              <img src="https://lifeofchai.in/Images/QSR%20Cafe/2_12%20-%20Photo-min.jpg" alt="QSR Cafe" className="w-80  rounded-md" />
            </div>
          </div>
        </div>

        {/* Horizontal black line */}
        <div className="h-[1px] bg-black mb-8"></div>
      </div>

      {/* Second Section */}
      <div className="mt-8 overflow-hidden" data-aos="fade-left" data-aos-delay="200">
        <div className="flex flex-col sm:flex-row justify-between mb-8">
          {/* Vertical black line */}
          <div className="hidden sm:block w-[2px] bg-black mx-4"></div>

          {/* Image Section */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://lifeofchai.in/Images/Premium%20Cafe/1_14%20-%20Photo-min.jpg" alt="Premium Lounge" className="w-full h-75 rounded-md" />
              <img src="https://lifeofchai.in/Images/Premium%20Cafe/1_15%20-%20Photo-min.jpg" alt="Premium Lounge" className="w-full h-75 rounded-md" />
            </div>
          </div>
          
          <div className="flex-1 mr-4">
            <h3 className="text-6xl font-bold text-red-800 mb-4 ml-6">LOC Premium Cafe</h3>
            <p className="text-sm text-black mb-4 p-8">
            Step into our premium café, where elegance meets comfort in a chic setting. Enjoy luxurious seating and refined décor while savouring exceptional teas. With a fine dining AC ambiance and a diverse multicuisine menu, it’s the perfect heaven for a rich crowd and a workaholic space, blending productivity with indulgence!
            </p>
            <button className="bg-black text-white py-2 px-4 rounded-full">Learn More</button>
          </div>
        </div>

        {/* Horizontal black line */}
        <div className="h-[1px] bg-black mb-8"></div>
      </div>
    </div>
  );
};

export default Journey;
