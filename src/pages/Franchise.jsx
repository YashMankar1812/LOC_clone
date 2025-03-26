import React, { useEffect } from "react";
import AOS from "aos";
import FloatingButtons from "../components/FloatingButtons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoNavigate } from "react-icons/io5";
import { FaShop } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaQuoteLeft , FaQuoteRight } from "react-icons/fa6";
import { GiChefToque } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { GiNuclearWaste } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import { PiHandshakeFill } from "react-icons/pi";
import { CiForkAndKnife } from "react-icons/ci";
import { GrStatusGood } from "react-icons/gr";
import "aos/dist/aos.css";

const Franchise = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const handleFormSubmit = (e) => {
        e.preventDefault();
        toast.success(" Franchise Request Done!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      };

  

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
        src="/src/assets/Group 659-min _3_.png"
        alt="Right Image"
        data-aos="fade-left"
        className="object-cover w-full h-full"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center  items-left text-center text-white p-6">
        <h2 className="text-7xl text-center font-bold mb-4">BECOME A FRANCHISE</h2>

        <FaQuoteLeft className="inline text-4xl text-white " /> 
        <p className="inline text-lg text-white text-center font-medium">Brew Success with Life of Chai!.
           <FaQuoteRight className="inline text-4xl text-white  " />  
           </p>
      </div>
    </div>   
    </div>
  

    <section className="bg-gray-200 min-h-screen p-10">
      {/* Header Section */}
      <div className="text-center mb-12 " data-aos="fade-down">
        <h1 className="text-5xl font-bold text-yellow-800 ">
          Partner with Life of Chai
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Join us in spreading the love of chai, one sip at a time.
        </p>
      </div>

      {/* Franchise Benefits */}
      <div className="flex flex-wrap justify-center gap-10 mb-16">
        <div
          className="w-full md:w-1/3 bg-white shadow-red-500/50  shadow-lg rounded-lg  p-6 text-center"
          data-aos="fade-up"
        >
          <img
            src="data:image/png;base64,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"
            alt="Full Support"
            className="w-20 mx-auto mb-4"
          />
          <h4 className="text-2xl font-bold text-yellow-800">Full Support</h4>
          <p className="text-gray-600 mt-2">
            Get complete guidance and support to run your franchise seamlessly.
          </p>
        </div>
        <div
          className="w-full md:w-1/3 bg-white shadow-red-500/50  shadow-lg rounded-lg text-center p-6"
          data-aos="fade-up"
        >
          <img
            src="data:image/jpeg;base64,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  "
            alt="Established Brand"
            className="w-20 mx-auto mb-4"
          />
          <h4 className="text-2xl font-bold text-yellow-800">
            Established Brand
          </h4>
          <p className="text-gray-600 mt-2">
            Leverage the power of an already established and beloved chai brand.
          </p>
        </div>
        <div
          className="w-full md:w-1/3 bg-white shadow-red-500/50  shadow-lg rounded-lg text-center p-6 "
          data-aos="fade-up"
        >
          <img
            src="data:image/jpeg;base64,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"
            alt="High ROI"
            className="w-20 mx-auto mb-4"
          />
          <h4 className="text-2xl font-bold text-yellow-800">High ROI</h4>
          <p className="text-gray-600 mt-2">
            Enjoy high returns on investment with minimal operational hassles.
          </p>
        </div>
      </div>

      {/* Franchise Process */}
      <div>
        <h2
          className="text-3xl font-bold text-yellow-800 text-center mb-8"
          data-aos="fade-up"
        >
          How to Get Started
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div
            className="w-full md:w-1/4 bg-white shadow-red-500/50  shadow-lg rounded-lg  p-6 text-center"
            data-aos="flip-left"
          >
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">Step 1</h3>
            <p className="text-gray-600">
              Submit your application through our website or contact form.
            </p>
          </div>
          <div
            className="w-full md:w-1/4 bg-white shadow-red-500/50  shadow-lg rounded-lg  p-6 text-center"
            data-aos="flip-left"
          >
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">Step 2</h3>
            <p className="text-gray-600">
              Attend an introductory session to learn about our franchise model.
            </p>
          </div>
          <div
            className="w-full md:w-1/4 bg-white shadow-red-500/50  shadow-lg rounded-lg text-center p-6 "
            data-aos="flip-left"
          >
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">Step 3</h3>
            <p className="text-gray-600">
              Finalize the agreement and choose your location.
            </p>
          </div>
          <div
            className="w-full md:w-1/4 bg-white shadow-red-500/50  shadow-lg rounded-lg text-center p-6 "
            data-aos="flip-left"
          >
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">Step 4</h3>
            <p className="text-gray-600">
              Launch your Life of Chai franchise with our expert assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div
        className="mt-16 bg-yellow-800 text-white py-10 rounded-lg shadow-lg text-center"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold">Ready to Start Your Journey?</h3>
        <p className="mt-4 text-lg">
          Take the first step toward becoming a part of the Life of Chai family!
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-yellow-900 font-semibold rounded-lg shadow hover:bg-yellow-400 transition duration-300">
          Apply Now
        </button>
      </div>
    </section>
        
    {/* <!-- Section: We Looking for Partners in Your City --> */}
<section className="bg-gray-50 py-16 px-8 " data-aos="fade-up">
    <h2 className="text-3xl font-bold text-center text-red-800 mb-12">We Looking for Partners in Your City</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 shadow-red-500/50  shadow-lg rounded-lg text-center " data-aos="fade-right" data-aos-delay="100">
            <div className="text-4xl text-blue-500 mb-4  "><FaShop/></div>
            <h3 className="text-xl font-semibold text-gray-700">Area Required</h3>
            <p className="text-gray-600">250 to 350 Sq Ft</p>
        </div>
        <div className="bg-white p-6  shadow-red-500/50 shadow-lg rounded-lg text-center" data-aos="fade-right" >
            <div className="text-4xl text-green-500 mb-4"><IoNavigate/></div>
            <h3 className="text-xl font-semibold text-gray-700">Investment</h3>
            <p className="text-gray-600">8 Lakh – 12 Lakhs</p>
        </div>
        <div className="bg-white p-6 shadow-red-500/50 shadow-lg rounded-lg text-center" data-aos="fade-right" >
            <div className="text-4xl text-yellow-500 mb-4"><FaIndianRupeeSign/></div>
            <h3 className="text-xl font-semibold text-gray-700">Margins</h3>
            <p className="text-gray-600">55% Avg Gross Margins</p>
        </div>
        <div className="bg-white p-6 shadow-red-500/50 shadow-lg rounded-lg text-center" data-aos="fade-right" >
            <div className="text-4xl text-red-500 mb-4"><HiMiniArrowTrendingUp/></div>
            <h3 className="text-xl font-semibold text-gray-700">Quick ROI</h3>
            <p className="text-gray-600">12 to 18 Months</p>
        </div>
    </div>
    <div className="text-center mt-12" data-aos="fade-up">
  <FaQuoteLeft className="inline text-4xl text-red-700 mr-2" /> 
  <p className="inline text-lg text-gray-700 font-medium">
    After Thriving in Nagpur, We're Ready to Delight Your City!
  </p>
  <FaQuoteRight className="inline text-4xl text-red-700 ml-2" />
</div>
    <div className="max-w-4xl mx-auto mt-8" data-aos="fade-up" data-aos-delay="200">
        <p className="text-gray-600  p-5 text-center leading-relaxed shadow-red-500/50 shadow-lg rounded-lg">
            We’re excited to bring the Life Of Chai experience to your city! With a proven, chef-less model, a cozy café ambiance, and a pocket-friendly menu that everyone loves, we offer an incredible franchise opportunity. We believe your city deserves our authentic chai, high sales potential, and quick ROI. Join us in creating a welcoming space for all and enjoy strong profits with a trusted, growing brand. Let's brew success together!
        </p>
    </div>
</section>

{/* <!-- Section: WHY LOC : LIFE OF CHAI ? --> */}
<section className="bg-gray-200 py-16 px-10 ">
    <h2 className="text-3xl font-bold text-center text-red-800 mb-12">WHY LOC : LIFE OF CHAI ?</h2>
    <p className="text-lg text-center font-semibold text-black mb-12">Our Franchisees don't need to wait for customers to come in...!</p>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 max-w-6xl mx-auto h-screen ">
        {/* Card 1 */}
        <div className="group perspective relative " data-aos="flip-up">
            <div className="flip-card relative h-90 w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="flip-card-inner absolute inset-0 transform-style-preserve-3d">
                    {/* Front Side */}
                    <div className="flip-card-front absolute inset-0 bg-gradient-to-b from-gray-500 to-gray-900 p-10 shadow-lg rounded-lg backface-hidden flex flex-col items-center justify-center">
    <GiChefToque className="text-red-400 text-6xl mb-4" />
    <p className="text-gray-200 font-medium text-center">Chef-Less, Hassle-Free</p>
</div>


                    {/* Back Side */}
                    <div className="flip-card-back absolute inset-0 bg-gradient-to-b from-red-300 to-red-400 p-20 shadow-lg rounded-lg transform rotate-y-180 backface-hidden">
                        <p className="text-black font-small md:font-smal">Run a seamless operation without the need for a full-time chef .</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 2 */}
        <div className="group perspective relative" data-aos="flip-up">
            <div className="flip-card relative h-80 w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="flip-card-inner absolute inset-0 transform-style-preserve-3d">
                <div className="flip-card-front absolute inset-0 bg-gradient-to-b from-gray-500 to-gray-900 p-10 shadow-lg rounded-lg backface-hidden flex flex-col items-center justify-center">
    <BsGraphUpArrow className="text-red-400 text-6xl mb-6" />
    <p className="text-gray-200 font-medium text-center">Smart Investment</p>
</div>

                    <div className="flip-card-back absolute inset-0 bg-gradient-to-b from-red-300 to-red-400 p-10 shadow-lg rounded-lg transform rotate-y-180 backface-hidden">
                        <p className="text-black font-small">With an investment of just 10-12 lakhs, you're set for success.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 3 */}
        <div className="group perspective relative" data-aos="flip-up">
            <div className="flip-card relative h-80 w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="flip-card-inner absolute inset-0 transform-style-preserve-3d">
                <div className="flip-card-front absolute inset-0 bg-gradient-to-b from-gray-500 to-gray-900 p-10 shadow-lg rounded-lg backface-hidden flex flex-col items-center justify-center">
    <GiReturnArrow className="text-red-400 text-6xl mb-6" />
    <p className="text-gray-200 font-medium text-center">Quick Returns</p>
</div>

                    <div className="flip-card-back absolute inset-0 bg-gradient-to-b from-red-300 to-red-400 p-10 shadow-lg rounded-lg transform rotate-y-180 backface-hidden">
                        <p className="text-black font-small">Enjoy one of the fastest ROI periods in the industry.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 4 */}
        <div className="group perspective relative" data-aos="flip-up">
            <div className="flip-card relative h-80 w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="flip-card-inner absolute inset-0 transform-style-preserve-3d">
                <div className="flip-card-front absolute inset-0 bg-gradient-to-b from-gray-500 to-gray-900 p-10 shadow-lg rounded-lg backface-hidden flex flex-col items-center justify-center">
    <GiNuclearWaste className="text-red-400 text-8xl mb-6" />
    <p className="text-gray-200 font-medium text-center">Zero Waste, Zero Worry</p>
</div>

                    <div className="flip-card-back absolute inset-0 bg-gradient-to-b from-red-300 to-red-400 p-20 shadow-lg rounded-lg transform rotate-y-180 backface-hidden">
                        <p className="text-black font-small">Our efficient model ensures almost 0% food wastage .</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 5 */}
        <div className="group perspective relative" data-aos="flip-up">
            <div className="flip-card relative h-80 w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="flip-card-inner absolute inset-0 transform-style-preserve-3d">
                <div className="flip-card-front absolute inset-0 bg-gradient-to-b from-gray-500 to-gray-900 p-10 shadow-lg rounded-lg backface-hidden flex flex-col items-center justify-center">
    <GiKnifeFork className="text-red-400 text-6xl mb-6" />
    <p className="text-gray-200 font-medium text-center">Affordable Variety</p>
</div>

                    <div className="flip-card-back absolute inset-0 bg-gradient-to-b from-red-300 to-red-400 p-10 shadow-lg rounded-lg transform rotate-y-180 backface-hidden">
                        <p className="text-black font-small ">We’re committed to quality franchises, exclusive,network.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 6 */}
        <div className="group perspective relative" data-aos="flip-up">
            <div className="flip-card relative h-80 w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="flip-card-inner absolute inset-0 transform-style-preserve-3d">
                <div className="flip-card-front absolute inset-0 bg-gradient-to-b from-gray-500 to-gray-900 p-10 shadow-lg rounded-lg backface-hidden flex flex-col items-center justify-center">
    <GrStatusGood className="text-red-400 text-6xl mb-6" />
    <p className="text-gray-200 font-medium text-center">Quality Over Quantity</p>
</div>

                    <div className="flip-card-back absolute inset-0 bg-gradient-to-b from-red-300 to-red-400 p-10 shadow-lg rounded-lg transform rotate-y-180 backface-hidden">
                        <p className="text-black font-small">We’re committed to quality franchises, network.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 7 */}
        <div className="group perspective relative" data-aos="flip-up">
            <div className="flip-card relative h-80 w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="flip-card-inner absolute inset-0 transform-style-preserve-3d">
                <div className="flip-card-front absolute inset-0 bg-gradient-to-b from-gray-500 to-gray-900 p-10 shadow-lg rounded-lg backface-hidden flex flex-col items-center justify-center">
    <PiHandshakeFill className="text-red-400 text-6xl mb-6" />
    <p className="text-gray-200 font-medium text-center">Trusted for 5 years</p>
</div>

                    <div className="flip-card-back absolute inset-0 bg-gradient-to-b from-red-300 to-red-400 p-10 shadow-lg rounded-lg transform rotate-y-180 backface-hidden">
                        <p className="text-black font-small">Join a brand that’s been a customer favourite for five solid years</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Card 8 */}
        <div className="group perspective relative" data-aos="flip-up">
            <div className="flip-card relative h-80 w-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                <div className="flip-card-inner absolute inset-0 transform-style-preserve-3d">
                <div className="flip-card-front absolute inset-0 bg-gradient-to-b from-gray-500 to-gray-900 p-10 shadow-lg rounded-lg backface-hidden flex flex-col items-center justify-center">
    <CiForkAndKnife className="text-red-400 text-6xl mb-6" />
    <p className="text-gray-200 font-medium text-center ">Prime location only</p>
</div>

                    <div className="flip-card-back absolute inset-0 bg-gradient-to-b from-red-300 to-red-400 p-10 shadow-lg rounded-lg transform rotate-y-180 backface-hidden">
                        <p className="text-black font-small p-10">We ensuring maximum visibility and footfall catering to a vibrant crowd.</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
</section>


{/* Get Franchise  */}
<section className="bg-gray-200 min-h-screen p-5 flex flex-col md:flex-row items-center md:items-center justify-center">
      <ToastContainer />
     <div className="bg-white  rounded-lg">
         {/* Container */}
         <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 gap-6">
                    {/* left Side */}
            <div
            className="md:w-1/2 bg-red-300 p-6 rounded-md"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-2xl text-red-800 font-bold text-center mb-3 ">Get Franchise</h2>
            <p className="text-small -5 ">Fill in the following information and let our team guide you through the journey of becoming a café owner.</p>
            <form
              className="p-4 max-w-md mx-auto  rounded-md"
              onSubmit={handleFormSubmit}
            >
              {/* Name Field */}
              <div className="relative mb-6">
                <input
                  type="text"
                  id="name"
                  className="peer w-full p-3 bg-red-400 text-white border rounded-md focus:ring-2 focus:ring-white focus:outline-none placeholder-transparent"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 top-3 text-sm text-white transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-white peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-black peer-focus:text-sm"
                >
                  Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative mb-6">
                <input
                  type="email"
                  id="email"
                  className="peer w-full p-3 bg-red-400 text-white border rounded-md focus:ring-2 focus:ring-white focus:outline-none placeholder-transparent"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 top-3 text-sm text-gray-300 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-white peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-black peer-focus:text-sm"
                >
                  Email
                </label>
              </div>

              {/* Phone Field */}
              <div className="relative mb-6">
                <input
                  type="text"
                  id="phone"
                  className="peer w-full p-3 bg-red-400 text-white border rounded-md focus:ring-2 focus:ring-white focus:outline-none placeholder-transparent"
                  placeholder="Phone"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-3 top-3 text-sm text-gray-300 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-white peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-black peer-focus:text-sm"
                >
                  Phone
                </label>
              </div>
              {/* City Field */}
<div className="relative mb-6">
  <input
    type="text"
    id="city"
    className="peer w-full p-3 bg-red-400 text-white border rounded-md focus:ring-2 focus:ring-white focus:outline-none placeholder-transparent"
    placeholder="City"
  />
  <label
    htmlFor="city"
    className="absolute left-3 top-3 text-sm text-gray-300 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-white peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-black peer-focus:text-sm"
  >
    City
  </label>
</div>
  

{/* Budget Field */}
<div className="relative mb-6">
  <select 
    id="budget" 
    className="peer w-full p-3 bg-red-400 text-white border rounded-md focus:ring-2 focus:ring-white focus:outline-none placeholder-transparent"
  >
    <option value="">Select Budget</option>
    <option value="10-Lakh -13 Lakhs">10-Lakh -13 Lakhs</option>
    <option value="13-Lakh -16 Lakhs">10-Lakh -13 Lakhs</option>
    <option value="16-Lakh - Above">16-Lakh - Above</option>
  </select>
</div>

{/* ShopType Field */}
<div className="relative mb-6">
  <select 
    id="shopType" 
    className="peer w-full p-3 bg-red-400 text-white border rounded-md focus:ring-2 focus:ring-white focus:outline-none placeholder-transparent"
  >
    <option value="">Select Shop Type</option>
    <option value="restaurant">Restaurant</option>
    <option value="retail">Retail</option>
    <option value="service">Service</option>
    {/* Add more options as needed */}
  </select>
</div>

              {/* Message Field */}
              <div className="relative mb-6">
                <textarea
                  id="message"
                  className="peer w-full p-3 bg-red-400 text-white border rounded-md focus:ring-2 focus:ring-white focus:outline-none placeholder-transparent"
                  placeholder="Message"
                  rows="3"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 top-3 text-sm text-gray-300 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-white peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-black peer-focus:text-sm"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-red-800 text-white py-3 px-6 rounded-md font-semibold text-lg transition-all hover:bg-red-400 hover:text-red-600"
              >
                Submit
              </button>
            </form>
          </div>
          {/* Right Side */}
          <div
  className="md:w-1/2 p-2 "
  data-aos="fade-right"
  data-aos-duration="1000"
>
  <img src="src/assets/loc logo-white.png" alt="" className="h-20 text-center justify-center" />
  <span>BECOME A
  FRANCHISE</span>
  <p className="text-lg mb-6">
    We love reaching out to more and more of our customers, and you can be a part of this wonderful experience.
  </p>
  <img src="https://lifeofchai.in/Images/cartoon/side-img-franchise-removebg-preview.png" alt="" />
</div>

        </div>
      </div>
</section>
<FloatingButtons/>

</>


  );
};

export default Franchise;














// import React, { useEffect } from "react";
// import {
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
// } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS
//   }, []);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     toast.success("Message sent successfully!", {
//       position: "top-center",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light"
//     });
//   };

//   return (
//     <section className="bg-gray-300 min-h-screen p-5 flex flex-col md:flex-row items-center md:items-center justify-center">
//       <ToastContainer />
//       <div className="bg-white m-20 rounded-lg">
//         {/* Container */}
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8  gap-6">
//           {/* Left Side */}
//           <div
//             className="md:w-1/2 p-2"
//             data-aos="fade-right"
//             data-aos-duration="1000"
//           >
//             <h2 className="text-2xl font-semibold mb-4 text-red-800">
//               Let's Get in Touch
//             </h2>
//             <p className="text-lg mb-6">
//               We’d love to hear from you! Share your thoughts, feedback, or tea
//               stories with us.
//             </p>
//             <div className="flex items-center mb-4">
//               <FaMapMarkerAlt className="text-red-700 text-2xl mr-3" />
//               <p>Nagpur, Maharashtra</p>
//             </div>
//             <div className="flex items-center mb-4">
//               <FaEnvelope className="text-red-700 text-2xl mr-3" />
//               <p>infolifeofchai@gmail.com</p>
//             </div>
//             <div className="flex items-center mb-4">
//               <FaPhone className="text-red-700 text-2xl mr-3" />
//               <p>9752860225</p>
//             </div>
//             <p className="text-lg font-semibold mt-4">Connect with us:</p>
//             <div className="flex space-x-4 mt-2">
//               <a href="#" className="text-red-700 hover:text-blue-600 text-2xl">
//                 <FaFacebook />
//               </a>
//               <a href="#" className="text-red-700 hover:text-blue-400 text-2xl">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="text-red-700 hover:text-pink-600 text-2xl">
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div
//             className="md:w-1/2 bg-red-400 p-6 rounded-md"
//             data-aos="fade-left"
//             data-aos-duration="1000"
//           >
//             <h2 className="text-2xl text-white font-bold ">Contact us</h2>
//             <form
//               className="p-4 max-w-md mx-auto bg-red-400 rounded-md"
//               onSubmit={handleFormSubmit}
//             >
//               {/* Name Field */}
//               <div className="relative mb-6">
//                 <input
//                   type="text"
//                   id="name"
//                   className="peer w-full p-3 bg-red-400 text-white border rounded-md focus:ring-2 focus:ring-white focus:outline-none placeholder-transparent"
//                   placeholder="Name"
//                 />
//                 <label
//                   htmlFor="name"
//                   className="absolute left-3 top-3 text-sm text-white transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-white peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-black peer-focus:text-sm"
//                 >
//                   Name
//                 </label>
//               </div>

//               {/* Email Field */}
//               <div className="relative mb-6">
//                 <input
//                   type="email"
//                   id="email"
//                   className="peer w-full p-3 bg-red-400 text-white border rounded-md focus:ring-2 focus:ring-white focus:outline-none placeholder-transparent"
//                   placeholder="Email"
//                 />
//                 <label
//                   htmlFor="email"
//                   className="absolute left-3 top-3 text-sm text-gray-300 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-white peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-black peer-focus:text-sm"
//                 >
//                   Email
//                 </label>
//               </div>

//               {/* Phone Field */}
//               <div className="relative mb-6">
//                 <input
//                   type="text"
//                   id="phone"
//                   className="peer w-full p-3 bg-red-400 text-white border rounded-md focus:ring-2 focus:ring-white focus:outline-none placeholder-transparent"
//                   placeholder="Phone"
//                 />
//                 <label
//                   htmlFor="phone"
//                   className="absolute left-3 top-3 text-sm text-gray-300 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-white peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-black peer-focus:text-sm"
//                 >
//                   Phone
//                 </label>
//               </div>

//               {/* Message Field */}
//               <div className="relative mb-6">
//                 <textarea
//                   id="message"
//                   className="peer w-full p-3 bg-red-400 text-white border rounded-md focus:ring-2 focus:ring-white focus:outline-none placeholder-transparent"
//                   placeholder="Message"
//                   rows="3"
//                 ></textarea>
//                 <label
//                   htmlFor="message"
//                   className="absolute left-3 top-3 text-sm text-gray-300 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-white peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-black peer-focus:text-sm"
//                 >
//                   Message
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-white text-red-800 py-3 px-6 rounded-md font-semibold text-lg transition-all hover:bg-gray-200"
//               >
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;