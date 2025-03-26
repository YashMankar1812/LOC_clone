import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaClock } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black  text-gray-400  py-12 p-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div> 
            {/* logo section */}
            <div className="flex items-center justify-center">
                <img src="/src/assets/loc logo-white.png" alt="Logo" className="w-20 h-20"/>
            </div>

          <p className="text-sm">
            At Life of Chai, we brew happiness in every cup. Our mission is to
            serve you the most authentic and flavorful chai, crafted with love
            and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 ">Quick Links</h3>
          <ul className="space-y-2 text-sm  ">
            <li className="hover:text-red-500">
              <a href="/" className="hover:underline ">
                Home
              </a>
            </li>
            <li className="hover:text-red-500">
              <a href="/menu" className="hover:underline">
                Menu
              </a>
            </li>
            <li className="hover:text-red-500">
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="hover:text-red-500"> 
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400 mt-5">
        <li className="flex items-center gap-2"><FaLocationDot /> Chai Street, Tea City, India</li>
        <li className="flex items-center gap-2"><IoCallSharp /> +91 9876543210</li>
        <li className="flex items-center gap-2"><IoIosMail /> contact@lifeofchai.com</li>
        <li className="flex items-center gap-2"><FaClock /> Open Daily: 8 AM - 10 PM</li>
      </ul>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-8 border-t border-yellow-600 pt-6 p-7">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-4 md:mt-0 text-sm text-center">
            &copy; {new Date().getFullYear()} Life of Chai. All rights reserved Designed by Yash Mankar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



















