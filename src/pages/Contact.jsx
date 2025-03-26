import React, { useEffect, useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
    } else {
      toast.error("Invalid input !", {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });
    }
  };

  return (
    <section className=" min-h-screen p-5 flex flex-col md:flex-row items-center justify-center">
      <ToastContainer />
      <div className="bg-white shadow-2xl m-20 rounded-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 gap-6">
          <div className="md:w-1/2 p-2" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-2xl font-semibold mb-4 text-red-800">Let's Get in Touch</h2>
            <p className="text-lg mb-6">
              We’d love to hear from you! Share your thoughts, feedback, or tea stories with us.
            </p>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-red-700 text-2xl mr-3" />
              <p>Nagpur, Maharashtra</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-red-700 text-2xl mr-3" />
              <p>infolifeofchai@gmail.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-red-700 text-2xl mr-3" />
              <p>9752860225</p>
            </div>
            <p className="text-lg font-semibold mt-4">Connect with us:</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-red-700 hover:text-blue-600 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-red-700 hover:text-blue-400 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-red-700 hover:text-pink-600 text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="md:w-1/2 bg-red-700 p-6 rounded-md" data-aos="fade-left" data-aos-duration="1000">
            <h2 className="text-2xl text-white font-bold ">Contact us</h2>
            <form className="p-4 max-w-md mx-auto bg-red-700 rounded-md" onSubmit={handleFormSubmit}>
              {["name", "email", "phone", "message"].map((field) => (
                <div className="relative mb-6" key={field}>
                  {field === "message" ? (
                    <textarea
                      id={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="peer w-full p-3 bg-red-700 text-white border rounded-md focus:ring-2 focus:ring-white focus:outline-none placeholder-transparent"
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      rows="3"
                    ></textarea>
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="peer w-full p-3 bg-red-700 text-white border rounded-md focus:ring-2 focus:ring-white focus:outline-none placeholder-transparent"
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    />
                  )}
                  <label
                    htmlFor={field}
                    className="absolute left-3 top-3 text-sm text-gray-300 transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-white peer-placeholder-shown:text-base peer-focus:top-[-20px] peer-focus:text-white peer-focus:text-sm"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {errors[field] && <p className="text-yellow-300 text-sm mt-1">{errors[field]}</p>}
                </div>
              ))}

<button
  type="submit"
  className="w-full bg-white shadow-2xl text-red-800 py-3 px-6 rounded-md font-semibold text-lg transition-all transform hover:scale-105 hover:-translate-y-1 hover:bg-red-200"
>
  Send
</button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;





