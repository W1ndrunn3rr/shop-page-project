import React from "react";
import { Link } from "react-router-dom";

const BackgroundImage = (): React.ReactElement => {
  return (
    <div className="relative m-10 overflow-hidden group">
      <img
        className="w-full h-auto object-cover transition-transform duration-500 transform group-hover:scale-110"
        src="src\assets\background.jpg"
        alt="Stylish clothing background"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl font-bold mb-2 tracking-wider">
          CHIC THREADS
        </h1>
        <p className="text-white text-xl italic">Elevate Your Style</p>
        <button className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-black hover:text-white transition-colors duration-300">
          <Link to="/shop">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};

export default BackgroundImage;
