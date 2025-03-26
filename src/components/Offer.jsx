import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { FaCoffee, FaCookieBite, FaBirthdayCake, FaPercent, FaClock } from "react-icons/fa"; // Importing icons
import MenuSwiperPage from "../pages/MenuSwiperPage";
import SignatureDishes from "../pages/SignatureDishes";
import Customer from "../pages/Customer";
import Journey from "../pages/Journey";
import Contact from "../pages/Contact";

const offers = [
  {
    id: 1,
    title: "Buy 1 Get 1 Free",
    description:
      "Enjoy your favorite chai with a friend. Buy one chai and get one absolutely free!",
    icon: <FaCoffee className="text-black text-4xl mx-auto" />, // Smaller Icon
  },
  {
    id: 2,
    title: "Flat 20% Off",
    description:
      "Get a 20% discount on our exclusive chai combos. Hurry, limited time only!",
    icon: <FaPercent className="text-black text-4xl mx-auto" />, // Smaller Icon
  },
  {
    id: 3,
    title: "Chai Lover's Deal",
    description:
      "Special deal for chai lovers! Get a free cookie with every large chai.",
    icon: <FaCookieBite className="text-black text-4xl mx-auto" />, // Smaller Icon
  },
  {
    id: 4,
    title: "Happy Hours Offer",
    description:
      "Get chai at just ₹50 during our happy hours from 4 PM to 6 PM daily. Don't miss out!",
    icon: <FaClock className="text-black text-4xl mx-auto" />, // Smaller Icon
  },
  {
    id: 5,
    title: "Free Chai on Your Birthday",
    description:
      "Celebrate your special day with a free chai from us. Just show your ID to avail the offer!",
    icon: <FaBirthdayCake className="text-black text-4xl mx-auto" />, // Smaller Icon
  },
];

const OfferPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bg-gray-50 min-h-screen py-10">
        {/* Header Section */}
        <header className="text-center mb-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-red-800 uppercase mb-4">
            What We Offer
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Indulge in our exclusive offers crafted just for chai lovers. Don't
            miss out!
          </p>
        </header>

        {/* Offer Section */}
        <div className="container mx-auto px-4 hover:">
          <div className="flex flex-wrap justify-center gap-4">
            {offers.map((offer, index) => (
              <div
                key={offer.id}
                className="w-full sm:w-1/2 lg:w-1/4 bg-gradient-to-b from-white to-gray-300 shadow-lg rounded-lg p-6 text-center"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div>{offer.icon}</div>
                <h2 className="text-xl md:text-2xl font-bold text-red-800 mt-4">
                  {offer.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Aside Section */}
        <aside className="bg-gray-200 mt-16 py-8 text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-red-700">
            Exclusive Deals Just for You!
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-4">
            Don't miss out on these limited-time offers. Visit us today and
            enjoy!
          </p>
        </aside>
      </div>


      <div>
        <img src="front/src/assets/LOC - Chai  Garam B-min.webp" alt="" />
      </div>
      <Journey/>
      <MenuSwiperPage />
      <SignatureDishes />
      <Customer/>
      <Contact/>
    </>
  );
};

export default OfferPage;
