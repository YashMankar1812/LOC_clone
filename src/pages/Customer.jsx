

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Customer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const images = [
    'https://lifeofchai.in/Images/gallery/selfie-customer-img%20-%20min%20_1__11zon.webp',
    'https://lifeofchai.in/Images/gallery/family-customer-img-min.webp',
    'https://lifeofchai.in/Images/gallery/helping-man-customer_11zon.webp',
    'https://lifeofchai.in/Images/gallery/girl-group-customer-img-min.webp',
    'https://lifeofchai.in/Images/gallery/family-customer2.webp',
    'https://lifeofchai.in/Images/gallery/IMG_8236-min.webp',
    'https://lifeofchai.in/Images/gallery/couple-customer-img-min.webp',
    'https://lifeofchai.in/Images/gallery/frd-chai-customer-min.webp',
    'https://lifeofchai.in/Images/gallery/group-customer-min.webp',
  ];

  return (
    <div className="p-8 bg-gray-100 font-poppins overflow-hidden">
      <div className='max-w-40' data-aos="fade-right" >
        <img src="https://lifeofchai.in/Images/gallery/lamp-img-removebg-preview-min.webp" alt="" />
      </div>
      <div className="text-center mb-10">
        <h2 className="text-red-800 text-4xl font-bold mb-4 " data-aos="fade-up">
          Our Happy Customers
        </h2>
        <p className="font-bold text-2xl text-black mt-5 sm:text-sm " data-aos="fade-up" data-aos-delay="200">
          "Where Every Bite Tells a Story: Dive into Flavour and Friendship at Our Cafe."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="text-center"
            data-aos="zoom-in"
            data-aos-delay={index * 100} // Incremental delay for each image
          >
            <img
              src={src}
              alt={`Customer ${index + 1}`}
              className={`rounded-lg object-cover w-full ${
                index < 3 || index > 5 ? 'h-64' : 'h-74' // Conditional height
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
