import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaBars } from "react-icons/fa";
import locLogo from "/src/assets/loc.png"; // Update this path to your actual logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-800 text-white shadow-lg border-2 border-white rounded-full px-4 py-4 w-[90%] sm:w-[80%] flex justify-between items-center z-50">
      {/* Logo Section */}
      <div className="logo flex items-center">
        <img
          src={locLogo}
          alt="LOC Logo"
          className="h-14 w-auto cursor-pointer"
          style={{ filter: "brightness(0) invert(1)" }}
          onClick={() => navigate("/")}
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {[
          { path: "/", label: "HOME" },
          { path: "/about", label: "ABOUT" },
          { path: "/franchise", label: "FRANCHISE" },
          { path: "/locators", label: "LOCATOR" },
          { path: "/blog", label: "BLOG" },
        ].map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="hover:text-yellow-400 transition duration-300">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        <div className="p-2 border-2 border-yellow-300 rounded-full">
          <a href="tel:9284777527" className="text-white hover:text-yellow-400 transition duration-300">
            <FaPhoneAlt className="text-lg" />
          </a>
        </div>
        <div className="p-2 border-2 border-yellow-300 rounded-full">
          <a
            href="https://wa.me/9284777527"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition duration-300"
          >
            <FaWhatsapp className="text-lg" />
          </a>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-yellow-400 rounded-full text-red-800 hover:text-white transition duration-300"
        >
          <FaBars className="text-lg" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 bg-red-800 text-white w-full rounded-lg mt-2 py-2 flex flex-col items-center space-y-2 shadow-lg md:hidden">
          {[
            { path: "/", label: "HOME" },
            { path: "/about", label: "ABOUT US" },
            { path: "/franchise", label: "FRANCHISE" },
            { path: "/locators", label: "LOCATOR" },
            { path: "/blog", label: "BLOG" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaPhoneAlt, FaWhatsapp, FaBars } from "react-icons/fa";
// import locLogo from "/src/assets/loc.png"; // Update the path to your logo image

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="navbar bg-red-800 text-white shadow-lg">
//       {/* Rope Holder (Optional Placeholder) */}
//       <div className="rope-holder hidden sm:block"></div>

//       {/* Logo */}
//       <div className="logo flex items-center">
//         <Link to="/">
//           <img src={locLogo} alt="LOC Logo" className="h-10 w-auto" />
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       <ul className="hidden md:flex space-x-6 items-center">
//         <li>
//           <Link
//             to="/"
//             className="hover:text-yellow-500 transition duration-300"
//             data-aos="fade-down"
//             data-aos-delay="300"
//           >
//             HOME
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/about"
//             className="hover:text-yellow-500 transition duration-300"
//             data-aos="fade-down"
//             data-aos-delay="400"
//           >
//             ABOUT US
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/franchise"
//             className="hover:text-yellow-500 transition duration-300"
//             data-aos="fade-down"
//             data-aos-delay="500"
//           >
//             FRANCHISE
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/locators"
//             className="hover:text-yellow-500 transition duration-300"
//             data-aos="fade-down"
//             data-aos-delay="500"
//           >
//             LOCATOR
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/blog"
//             className="hover:text-yellow-500 transition duration-300"
//             data-aos="fade-down"
//             data-aos-delay="600"
//           >
//             BLOG
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/contact"
//             className="hover:text-yellow-500 transition duration-300"
//             data-aos="fade-down"
//             data-aos-delay="600"
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>

//       {/* Icons */}
//       <div className="icons flex items-center space-x-4">
//         {/* Phone Icon */}
//         <div className="p-2 border-2 border-yellow-400 rounded-full">
//           <a
//             href="tel:9284777527"
//             className="hover:text-yellow-500 transition duration-300"
//             data-aos="fade-down"
//             data-aos-delay="800"
//           >
//             <FaPhoneAlt />
//           </a>
//         </div>
//         {/* WhatsApp Icon */}
//         <div className="p-2 border-2 border-yellow-400 rounded-full">
//           <a
//             href="https://wa.me/9284777527"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-yellow-500 transition duration-300"
//             data-aos="fade-down"
//             data-aos-delay="900"
//           >
//             <FaWhatsapp />
//           </a>
//         </div>
//       </div>

//       {/* Mobile Menu Toggle */}
//       <div className="menu-toggle md:hidden flex items-center">
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-white hover:text-yellow-500 focus:outline-none"
//         >
//           <FaBars className="text-2xl" />
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <ul className="flex flex-col md:hidden bg-red-800 p-4 rounded-lg mt-2 space-y-4">
//           <li>
//             <Link
//               to="/"
//               className="hover:text-yellow-500 transition duration-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               HOME
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about-us"
//               className="hover:text-yellow-500 transition duration-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               ABOUT US
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/franchise"
//               className="hover:text-yellow-500 transition duration-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               FRANCHISE
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/locator"
//               className="hover:text-yellow-500 transition duration-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               LOCATOR
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/blog"
//               className="hover:text-yellow-500 transition duration-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               BLOG
//             </Link>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Header;


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// import locLogo from "/src/assets/loc.png"; // Correct path to logo

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (

//     <>
//     <div class=" h-4 w-1 mr-3 bg-red-500 text-center">adsd</div>
//     <div class="h-full w-1 mr-3 bg-red-500 text-center">adsd</div>
    
//     <header className="text-white py-4 shadow-md bg-transparent">
//       <div className="container mx-auto flex items-center justify-between max-w-5xl rounded-full p-4 bg-red-800 text-white border-2  border-yellow-100 shadow-2xl uppercase">
//         {/* Logo */}
//         <div>
//           <a href="/" className="flex items-center">
//             <img src={locLogo} alt="LOC Logo" className="h-16 w-auto mr-2" />
//           </a>
//         </div>

//         {/* Navigation Links */}
//         <nav
//           className={`${
//             isMenuOpen ? "flex" : "hidden"
//           } md:flex md:space-x-8  flex-col md:flex-row items-center absolute md:static top-20 left-0 right-0 bg-red-800 md:bg-transparent  p-6  md:p-0 shadow-md md:shadow-none`}
//         >
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-yellow-500 font-semibold"
//                 : "hover:text-yellow-500"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-yellow-500 font-semibold"
//                 : "hover:text-yellow-500"
//             }
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/franchise"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-yellow-500 font-semibold"
//                 : "hover:text-yellow-500"
//             }
//           >
//             Franchise
//           </NavLink>
//           <NavLink
//             to="/locators"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-yellow-500 font-semibold"
//                 : "hover:text-yellow-500"
//             }
//           >
//             Locators
//           </NavLink>
//           <NavLink
//             to="/blog"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-yellow-500 font-semibold"
//                 : "hover:text-yellow-500"
//             }
//           >
//             Blog
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-yellow-500 font-semibold"
//                 : "hover:text-yellow-500"
//             }
//           >
//             Contact
//           </NavLink>
//         </nav>

//         {/* Icons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <div className="p-3 border-2 border-yellow-400 rounded-full">
//             <a
//               href="tel:+1234567890"
//               className="hover:text-yellow-500 text-xl"
//               aria-label="Call Us"
//             >
//               <FaPhoneAlt />
//             </a>
//           </div>
//           <div className="p-3 border-2 border-yellow-400 rounded-full">
//             <a
//               href="https://wa.me/1234567890"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-yellow-500 text-xl"
//               aria-label="WhatsApp"
//             >
//               <FaWhatsapp />
//             </a>
//           </div>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="md:hidden text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>
//     </header>
//     </>
//   );
// };

// export default Header;
