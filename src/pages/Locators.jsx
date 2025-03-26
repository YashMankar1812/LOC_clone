import React, { useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import FloatingButtons from "../components/FloatingButtons";

const Locators = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const locations = [
    {
      name: "LOC Manewada",
      address:
        "Gahukar Complex, Plot no. 09, opposite to Arena Gym, Manewada Square, Ambika Nagar, Ayodhya Nagar, Nagpur, Maharashtra 440024",
      phone: "074981 76954",
    },
    {
      name: "LOC Congress Nagar",
      address:
        "LOC LIFE OF CHAI, Shyam Palace, METRO STATION, near AJNI, opp. Shivaji Science College, Congress Nagar, Dhantoli, Nagpur, Maharashtra 440012",
      phone: "91+ 78787878787",
    },
    {
      name: "LOC Ram Nagar",
      address:
        "A52, NEAR AKSHATAM ETHNICS, HILL ROAD, GOKULPETH, Ram Nagar, Nagpur, Maharashtra 440010",
      phone: "080802 47041",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap w-full h-screen">
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src="https://www.lifeofchai.in/blog/blog-image-min.jpg"
            alt="Chai Store"
            data-aos="fade-left"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Image with Overlay */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src="/public/assets/Group 659-min _3_.png"
            alt="Locator Illustration"
            data-aos="fade-right"
            className="object-cover w-full h-full"
          />
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-20 text-white p-6">
            <h2 className="text-6xl font-bold mb-4 text-center">STORE LOCATOR</h2>
            <div className="text-lg text-center font-medium flex items-center gap-2">
              <FaQuoteLeft className="text-3xl" />
              <p>Happiness is a cup of chai!</p>
              <FaQuoteRight className="text-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-8" data-aos="fade-up">
          FIND OUR CAFE LOCATION
        </h2>
        <div className="text-center mb-12" data-aos="fade-up">
          <FaQuoteLeft className="text-4xl text-red-700 mr-2" />
          <p className="inline text-lg text-gray-700 font-medium">
            Looking for a place to have the best quality chai and traditional
            Indian snacks? Find all our Tea Posts here!
          </p>
          <FaQuoteRight className="text-4xl text-red-700 ml-2" />
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={location.name + index}
              className="bg-white p-6 shadow-lg rounded-lg border-4 border-red-200 border-y-red-800 transition transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={`${100 * index}`}
            >
              <h2 className="text-xl font-semibold text-red-900 text-center mb-2 flex items-center justify-center gap-2">
                <MdLocationPin />
                {location.name}
              </h2>
              <p className="text-gray-600 text-center mb-2">{location.address}</p>
              <p className="text-gray-700 font-medium text-center">📞 {location.phone}</p>
            </div>
          ))}
        </div>
      </div>

      <FloatingButtons />
    </>
  );
};

export default Locators;
