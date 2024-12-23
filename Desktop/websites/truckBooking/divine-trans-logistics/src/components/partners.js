import React from 'react';


const partners = [
  { id: 1, src: '/ECE.png', alt: 'Partner 1' },
  { id: 2, src: '/Britannia.png', alt: 'Partner 2' },
  { id: 3, src: '/TATA.png', alt: 'Partner 3' },
  { id: 4, src: '/Burgerking.png', alt: 'Partner 4' },
  { id: 5, src: '/Amazon.png', alt: 'Partner 5' },
  { id: 6, src: '/Relince.png', alt: 'Partner 6' },
  { id: 7, src: '/Cinema.jpeg', alt: 'Partner 7' },
  { id: 8, src: '/FIMS.jpeg', alt: 'Partner 8' },
  { id: 9, src: '/Chitkara.png', alt: 'Partner 9' },
  { id: 10, src: '/CU.jpeg', alt: 'Partner 10' },
];

const Partners = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-left mb-6">Our Partners</h1>
      
      
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        {partners.map(partner => (
          <div key={partner.id} className="w-40">
            <img 
              src={partner.src} 
              alt={partner.alt} 
              className="w-full h-auto object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
