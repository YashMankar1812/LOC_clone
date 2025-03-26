import React, { useState, useEffect } from "react";

const images = [
  "/src/assets/slide3-img-min.jpeg",
  "https://www.lifeofchai.in/Images/Featured%20Dish%20that%20people%20like/Elaichi%20Chai-min.jpg",
  "https://lifeofchai.in/Images/cartoon/LOC_-_Chai__Garam_B-removebg-preview.png",
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>
  );
};

export default ImageSlider;

