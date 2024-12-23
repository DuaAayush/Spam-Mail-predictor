import React, { useState } from 'react';

function Modal({ onClose, bookingType }) {
  const [vehicleSize, setVehicleSize] = useState('');

  const handleVehicleSizeChange = (e) => {
    setVehicleSize(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {bookingType === 'truck' ? 'Book a Truck' : 'Book a Trailer'}
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Contact Number:</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Pickup Location:</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Drop Location:</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          {/* Truck or Trailer Size Dropdown */}
          {(bookingType === 'truck' || bookingType === 'trailer') && (
            <div>
              <label className="block text-sm font-medium">
                {bookingType === 'truck' ? 'Truck Size or Type:' : 'Trailer Size or Type:'}
              </label>
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                value={vehicleSize}
                onChange={handleVehicleSizeChange}
              >
                <option value="" disabled>Select size or type your own</option>
                <option value="Size 1">Size 1</option>
                <option value="Size 2">Size 2</option>
                <option value="Size 3">Size 3</option>
              </select>
              <input
                type="text"
                placeholder="Type a custom size"
                value={vehicleSize}
                onChange={(e) => setVehicleSize(e.target.value)}
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium">Date:</label>
            <input
              type="date"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Weight:</label>
            <input
              type="number"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          

          <div className="flex justify-between pt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
