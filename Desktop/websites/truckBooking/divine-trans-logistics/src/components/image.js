
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './Animation - 1729034692586.json';

const BookingBox = ({ openModal }) => {
  return (
    <div className="bg-gray-400 p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-white text-2xl font-bold mb-4 text-center">Book Your Service</h2>
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => openModal('truck')}
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-500 hover:text-gray-200 hover:scale-105 transition-all duration-1000 delay-100 hover:shadow-xl"
        >
          Book a Truck
        </button>
        <button
          onClick={() => openModal('trailer')}
          className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-500 hover:text-gray-200 hover:scale-105 transition-all duration-1000 delay-100 hover:shadow-xl"
        >
          Book a Trailer
        </button>
      </div>
    </div>
  );
};

const Image = ({ openModal }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="relative w-full h-screen flex">
      <div className="relative z-10 w-1/2 flex justify-center items-center">
        <BookingBox openModal={openModal} />
      </div>
      <div className="absolute right-0 w-1/2 h-full z-10">
        <Lottie className="rounded" options={defaultOptions} height="100%" width="100%" />
      </div>
    </div>
  );
};

export default Image;
