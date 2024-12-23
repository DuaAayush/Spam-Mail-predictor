import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-400 min-h-screen p-8 flex items-center justify-center">

      <div className="w-1/2 pr-8">
        <h1 className="text-4xl font-bold  mb-4 text-left">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8 text-left">
          We’d love to hear from you. Please fill out the form below and we’ll get in touch as soon as possible.
        </p>
        
        <form className="bg-gray-300 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name" 
              type="text" 
              placeholder="Your name" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" 
              type="email" 
              placeholder="Your email address" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">Phone No</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone" 
              type="number" 
              placeholder="Your Mobile Number" 
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message" 
              placeholder="Your message" 
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

     
      <div className="w-1/2 pl-8 flex flex-col items-start">
        <h2 className="text-4xl font-bold  mb-4">Our Contact Details</h2>
        <p className="text-lg text-gray-600 mb-4">Feel free to reach us through any of the following:</p>
        
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-700">Address</h3>
          <p className="text-lg text-gray-600">726/12 Sikka Colony Sonipat Haryana </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-700">Phone</h3>
          <p className="text-lg text-gray-600">+91 1234567890</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-700">Email</h3>
          <p className="text-lg text-gray-600">contact@divinetranslogistic.com</p>
        </div>

        <div className="mt-8">
          <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019349760745!2d144.95605431563254!3d-37.8172099797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xfb8c1ac0ec56b29f!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1634765472860!5m2!1sen!2sau"
    width="600"
    height="250"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
