import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import FloatingButtons from "../components/FloatingButtons";

const Locators = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const locations = [
    {
        "name": "LOC Manewada",
        "address": "Gahukar Complex, Plot no. 09, opposite to Arena Gym, Manewada Square, Ambika Nagar, Ayodhya Nagar, Nagpur, Maharashtra 440024",
        "phone": "074981 76954"
      },
      {
        "name": "LOC Congress Nagar",
        "address": "LOC LIFE OF CHAI, Shyam Palace, METRO STATION, near AJNI, opp. Shivaji Science College, Congress Nagar, Dhantoli, Nagpur, Maharashtra 440012",
        "phone": "91+ 78787878787"
      },
      {
        "name": "LOC Ram Nagar",
        "address": "A52, NEAR AKSHATAM ETHNICS, HILL ROAD, GOKULPETH, Ram Nagar, Nagpur, Maharashtra 440010",
        "phone": "080802 47041"
      },
      {
        "name": "LOC Nandanvan",
        "address": "Nandanvan Road, Opposite to Shikshak Sahakari Bank, beside Gananayak Sabhagruha, Nandanvan Chowk, Nagpur, Maharashtra 440009",
        "phone": "092847 77527"
      },
      {
        "name": "LOC Sadar",
        "address": "Sadar Bazar, Near Sitabuldi Fort, Nagpur, Maharashtra 440001",
        "phone": "9822000001" 
      },
      {
        "name": "LOC Dhantoli",
        "address": "Dhantoli Square, Near Gandhi Bagh, Nagpur, Maharashtra 440012",
        "phone": "9822000002" 
      },
      {
        "name": "LOC Mahal",
        "address": "Mahal, Near Central Avenue, Nagpur, Maharashtra 440001",
        "phone": "9822000003" 
      },
      {
        "name": "LOC Kamptee",
        "address": "Kamptee Road, Near Railway Station, Kamptee, Nagpur, Maharashtra 441002",
        "phone": "9822000004" 
      },
      {
        "name": "LOC Hingna",
        "address": "Hingna Road, Near MIDC, Nagpur, Maharashtra 441101",
        "phone": "9822000005" 
      },
      {
        "name": "LOC Yashodhara Nagar",
        "address": "Yashodhara Nagar, Near Shankar Nagar, Nagpur, Maharashtra 440022",
        "phone": "9822000006" 
      },
      {
        "name": "LOC Shankar Nagar",
        "address": "Shankar Nagar, Near LIC Office, Nagpur, Maharashtra 440010",
        "phone": "9822000007" 
      },
      {
        "name": "LOC Ajni",
        "address": "Ajni Square, Near Railway Station, Nagpur, Maharashtra 440001",
        "phone": "9822000008" 
      },
      {
        "name": "LOC Sitabuldi",
        "address": "Sitabuldi, Near Gandhi Statue, Nagpur, Maharashtra 440012",
        "phone": "9822000009" 
      },
      {
        "name": "LOC Jaripatka",
        "address": "Jaripatka, Near MIDC, Nagpur, Maharashtra 440014",
        "phone": "9822000010" 
      },
      {
        "name": "LOC Wadi",
        "address": "Wadi, Near Railway Station, Nagpur, Maharashtra 440014",
        "phone": "9822000011" 
      },
      {
        "name": "LOC Khamla",
        "address": "Khamla, Near Police Station, Nagpur, Maharashtra 440025",
        "phone": "9822000012" 
      },
      {
        "name": "LOC Lakadganj",
        "address": "Lakadganj, Near Itwari, Nagpur, Maharashtra 440002",
        "phone": "9822000013" 
      },
      {
        "name": "LOC Ganeshpeth",
        "address": "Ganeshpeth, Near Sitabuldi Fort, Nagpur, Maharashtra 440001",
        "phone": "9822000014" 
      },
      {
        "name": "LOC Pratap Nagar",
        "address": "Pratap Nagar, Near Civil Lines, Nagpur, Maharashtra 440001",
        "phone": "9822000015" 
      },
      {
        "name": "LOC Yashodhara Nagar",
        "address": "Yashodhara Nagar, Near Shankar Nagar, Nagpur, Maharashtra 440022",
        "phone": "9822000016" 
      },
      {
        "name": "LOC Ravi Nagar",
        "address": "Ravi Nagar, Near Dharampeth, Nagpur, Maharashtra 440010",
        "phone": "9822000017" 
      },
      {
        "name": "LOC Mahal",
        "address": "Mahal, Near Central Avenue, Nagpur, Maharashtra 440001",
        "phone": "9822000018" 
      },
      {
        "name": "LOC Civil Lines",
        "address": "Civil Lines, Near Kingsway, Nagpur, Maharashtra 440001",
        "phone": "9822000019" 
      },
      {
        "name": "LOC Dharampeth",
        "address": "Dharampeth, Near Sitabuldi Fort, Nagpur, Maharashtra 440010",
        "phone": "9822000020" 
      }

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
          src="/src/assets/Group 659-min _3_.png"
          alt="Locator Illustration"
          data-aos="fade-right"
          className="object-cover w-full h-full"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
          <h2 className="text-7xl text-center font-bold mb-4">STORE LOCATOR</h2>
          <FaQuoteLeft className="inline text-4xl text-white" />
          <p className="inline text-lg text-white text-center font-medium">
            Happiness is a cup of chai!
            <FaQuoteRight className="inline text-4xl text-white" />
          </p>
        </div>
      </div>

      {/* Locations Section */}
      <div className="bg-gray-100 p-10 w-full">
        <h2
          className="text-3xl font-bold text-center text-red-800 mb-8"
          data-aos="fade-up"
        >
          FIND OUR CAFE LOCATION
        </h2>
        <div className="text-center mb-12" data-aos="fade-up">
          <FaQuoteLeft className="inline text-4xl text-red-700 mr-2" />
          <p className="inline text-lg text-gray-700 font-medium">
            Looking for a place to have the best quality chai and traditional
            Indian snacks? Just specify the state and city names, and you’ll get
            all the information about all the Tea Posts in that region – right
            here, right now!
          </p>
          <FaQuoteRight className="inline text-4xl text-red-700 ml-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg border-4 border-red-200 border-y-red-800"
              data-aos="fade-up"
              data-aos-delay={`${100 * index}`}
            >
              <h2 className="text-xl font-semibold text-red-900 text-center mb-2">
                {location.name} <MdLocationPin className="inline" />
              </h2>
              <p className="text-gray-600 mb-4">{location.address}</p>
              <p className="text-gray-700 font-medium">📞 {location.phone}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
    <FloatingButtons/>
    </>
  );
};

export default Locators;
