import React, { useState } from 'react';
import Modal from './Modal';
import Partners from './partners';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const [isTruckModalOpen, setTruckModalOpen] = useState(false);
  const [isTrailerModalOpen, setTrailerModalOpen] = useState(false);

  const openTruckModal = () => setTruckModalOpen(true);
  const closeTruckModal = () => setTruckModalOpen(false);

  const openTrailerModal = () => setTrailerModalOpen(true);
  const closeTrailerModal = () => setTrailerModalOpen(false);

  const navigate = useNavigate();
  return (
    <div className='bg-gradient-to-b from-gray-600 to-white'>
      <header className="text-white p-4 flex justify-between items-center h-20 w-full">
        {/* Company Name */}
        <div className="text-2xl font-bold text-blue-950">
          <a href="/" className="">Divine Trans Logistic</a>
        </div>

        <div className="flex space-x-8 relative">
          {/* Book a Truck Button */}
          <div className="relative group">
            <button 
              onClick={openTruckModal}
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-500 hover:text-gray-200 hover:scale-125 transition-all hover:shadow-x1"
            >
              Book a Truck
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black p-4 rounded mt-2 shadow-lg z-20">
              <ul>
                <li className="py-1 px-4 hover:bg-gray-200 rounded"><a href="#">Truck size 1</a></li>
                <li className="py-1 px-4 hover:bg-gray-200 rounded"><a href="#">Truck size 2</a></li>
                <li className="py-1 px-4 hover:bg-gray-200 rounded"><a href="#">Truck size 3</a></li>
              </ul>
            </div>
          </div>

          {/* Book a Trailer Button */}
          <div className="relative group">
            <button 
              onClick={openTrailerModal}
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-500 hover:text-gray-200 hover:scale-125 transition-all hover:shadow-x1"
            >
              Book a Trailer
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black p-4 rounded mt-2 shadow-lg z-20">
              <ul>
                <li className="py-1 px-4 hover:bg-gray-200 rounded"><a href="#">Trailer size 1</a></li>
                <li className="py-1 px-4 hover:bg-gray-200 rounded"><a href="#">Trailer size 2</a></li>
                <li className="py-1 px-4 hover:bg-gray-200 rounded"><a href="#">Trailer size 3</a></li>
              </ul>
            </div>
          </div>

          {/* Other Links */}
          <div className="relative group">
          <button 
              onClick={() => navigate('/partners')}
              className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-500 hover:text-gray-200 hover:scale-125 transition-all hover:shadow-x1"
            >
              Book a Truck
            </button>
          </div>
          <div className="relative group">
            <a href="/aboutus" className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-500 hover:text-gray-200 hover:scale-125 transition-all hover:shadow-x1">
              About Us
            </a>
          </div>
          <div className="relative group">
            <a href="/contact" className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-500 hover:text-gray-200 hover:scale-125 transition-all hover:shadow-x1">
              Contact Us
            </a>
          </div>
        </div>

        {/* Company Use Link */}
        <div>
          <a href="/company" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-500 hover:text-gray-200 hover:scale-125 transition-all duration-1000 delay-100 hover:shadow-x1">
            For Company Use
          </a>
        </div>
      </header>

      {/* Modals */}
      {isTruckModalOpen && <Modal onClose={closeTruckModal} bookingType="truck" />}
      {isTrailerModalOpen && <Modal onClose={closeTrailerModal} bookingType="trailer" />}
    </div>
  );
};

export default Header;