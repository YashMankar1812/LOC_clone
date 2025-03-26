import React, { useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import FloatingButtons from "../components/FloatingButtons";

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true }); // Initialize AOS with custom settings
  }, []);

  const blogs = [
    {
      id: 1,
      title: "The Art of Brewing Chai",
      description:
        "Discover the secrets behind brewing the perfect cup of chai that warms the soul.",
      image: "https://www.lifeofchai.in/blog/blog-image-min.jpg",
      date: "January 10, 2025",
      author: "Yash Mankar",
    },
    {
      id: 2,
      title: "The History of Chai",
      description:
        "Dive into the rich history of chai and its journey from ancient traditions to modern-day rituals.",
      image: "data:image/jpeg;base64,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",
      date: "February 5, 2025",
      author: "Life of Chai Team",
    },
    {
      id: 3,
      title: "Benefits of Drinking Chai",
      description:
        "Learn how chai can improve your health, calm your mind, and energize your day.",
      image: "data:image/jpeg;base64,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",
      date: "March 12, 2025",
      author: "Life of Chai Team",
    },
  ];


  return (

    <>
        <div className="flex flex-wrap w-full h-screen overflow-hidden">
      {/* Left Image */}
      <div
        className="w-full md:w-1/2 h-1/2 md:h-full"
        data-aos="fade-right" // AOS Animation
      >
        <img
          src="https://www.lifeofchai.in/blog/blog-image-min.jpg"
          alt="Left Image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Side - Image with Overlay */}
      <div
        className="relative w-full md:w-1/2 h-1/2 md:h-full"
        data-aos="fade-left" // AOS Animation
      >
        <img
          src="/src/assets/Group 659-min _3_.png"
          alt="Right Image"
          className="object-cover w-full h-full"
        />
        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-left text-center text-white p-6">
          <h2
            className="text-7xl text-center font-bold mb-4 text-white"
            data-aos="zoom-in" // AOS Animation
          >
            BLOG
          </h2>

          <FaQuoteLeft className="inline text-4xl text-white" />
          <p
            className="inline text-lg text-white text-center font-medium"
            data-aos="fade-up" // AOS Animation
          >
            Discover Our Story: Where Passion Meets Perfection!
            <FaQuoteRight className="inline text-4xl text-white" />
          </p>
        </div>
      </div>
    </div> 
       <div className="bg-gray-100 min-h-screen">
    {/* Hero Section */}
    {/* <section className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center bg-red-400" >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="zoom-in">
          Welcome to Our Blog
        </h1>
        <p className="text-lg md:text-xl" data-aos="fade-up">
          Explore stories, traditions, and secrets behind the world of chai.
        </p>
      </div>
    </section> */}

    {/* Blog Section */}
    <section className="container mx-auto px-6 py-12">
      <h2
        className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8"
        data-aos="fade-up"
      >
        Latest Posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${blog.id * 100}`}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
              <div className="text-gray-500 text-sm flex justify-between">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Subscribe Section */}
    <section className="relativ bg-gray-200 text-white py-12 p-10 h-screen  md:p-6 ">
      <div className="absolute inset-0  "></div>
      <div
        className="relative z-10 text-center max-w-2xl mx-auto  "
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold  text-red-600 mt-20">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg mt-5 text-black ">
          Stay updated with the latest stories and offers from Life of Chai.
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-1/2 px-4 py-2 rounded-lg focus:outline-none text-gray-800"
          />
          <button
            type="submit"
            className="bg-gray-800 px-6 py-2 rounded-lg text-white font-bold hover:bg-gray-700"
            
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  </div>

 <FloatingButtons/>

    </>
  );
};

export default Blog;
