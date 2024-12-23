import React from 'react';
import Lottie from 'react-lottie';
import animationData from './Animation - 1729033356107.json';

function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={loaderStyles}>
      <Lottie options={defaultOptions} height="50%" width="50%" />
      <h1 style={textStyles}>Loading...</h1>
    </div>
  );
}
const loaderStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
};

const textStyles = {
  marginTop: '20px', // Add some spacing between the animation and the text
  fontSize: '24px',
  color: '#333',
};

export default Loader;
