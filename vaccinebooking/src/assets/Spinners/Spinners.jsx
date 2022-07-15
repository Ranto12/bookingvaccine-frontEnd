import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ThreeCircles } from 'react-loader-spinner';

function Spiner() {
  return (
    <>
      <div className="d-flex justify-content-start align-items-center errorPages">
        <ThreeCircles
          color="#00BFFF"
          outerCircleColor="#00BFFF"
          innerCircleColor="#00BFFF"
        />
      </div>
    </>
  );
}

export default Spiner;
