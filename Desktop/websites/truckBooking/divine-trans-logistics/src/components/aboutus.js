import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">

      <div className="w-1/2">
        <h1 className="text-4xl font-bold  mb-4 text-left">About Us</h1>
        <p className="text-xl text-gray-700 text-left mb-8">
          Learn more about our company and our mission.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          Welcome to Divine Trans Logistic! We are dedicated to providing top-quality logistics and transportation services. With years of experience in the industry, we ensure that your goods are transported safely, reliably, and on time. Our team of professionals is committed to maintaining the highest standards in every aspect of our business.
        </p>
        <p className="text-lg text-gray-800 mb-4">
          Our mission is to simplify logistics for businesses by offering customized solutions that meet their unique requirements. We believe in building strong relationships with our clients and partners, focusing on trust, integrity, and customer satisfaction.
        </p>
        <p className="text-lg text-gray-800">
          Whether you are looking for trucking services, trailer rentals, or specialized transportation, we have the expertise and resources to handle all your needs. Feel free to reach out to us to learn more about how we can assist you.
        </p>
      </div>
      <div className="w-1/2 flex justify-center">
        <img 
          src="/divinelogo.jpg" 
          alt="About Us"
          className="rounded-lg shadow-lg max-w-lg h-auto"
        />
      </div>
    </div>
  );
};

export default AboutUs;

