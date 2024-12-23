import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Image from './components/image';
import Partners from './components/partners';
import AboutUs from './components/aboutus';
import ContactUs from './components/contactus';
import Loader from './components/Loader';
import Modal from './components/Modal';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (type) => {
    setBookingType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header  />
          <Image openModal={openModal} />
          <Partners />
          <AboutUs />
          <ContactUs />
        </>
      )}
      {isModalOpen && <Modal onClose={closeModal} bookingType={bookingType} />}
    </div>
  );
}

export default App;
