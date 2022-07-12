import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeCircles } from 'react-loader-spinner';

function Spiner() {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <ThreeCircles
          color="red"
          outerCircleColor="green"
          innerCircleColor="orange"
        />
      </div>
    </>
  );
}

export default Spiner;