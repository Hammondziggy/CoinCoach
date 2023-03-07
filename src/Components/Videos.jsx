import React from 'react';
import { Link } from 'react-router-dom';
//import ButtonGroup from "./Button";


export default function Videos() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <iframe
          src="https://www.youtube.com/embed/axGzh4iVoZU"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title="video"
          className="w-full h-48 rounded-lg object-cover"
        />
        <h1 className="text-xl font-bold mt-4">
          Understanding crypto
          <br /> charts
        </h1>
        <p className="mt-2 text-gray-500">
          Learn how to interpret crypto charts
        </p>
        <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2">
          <Link to="/contact" className="text-white">
            <input type="button" value="Save for Later" />
          </Link>
        </div>  
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <iframe
          src="https://www.youtube.com/embed/Yb6825iv0Vk"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title="video"
          className="w-full h-48 rounded-lg object-cover"
        />
        <h1 className="text-xl font-bold mt-4">
          How To Invest In Crypto
          <br /> Full Beginners Guide in 2023
        </h1>
        <p className="mt-2 text-gray-500">
          Learn how to invest in crypto
        </p>
        <div className="bg-orange rounded-md text-center shadow-md mt-4 p-2">
          <Link to="/contact" className="text-white">
            <input type="button" value="Save for Later" />
          </Link>
        </div>
      </div>
       
      <div className="bg-white rounded-lg shadow-lg p-6">
        <iframe
          src="https://www.youtube.com/embed/3gD6aJZDjG8"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title="video"
          className="w-full h-48 rounded-lg object-cover"
        />
        <h1 className="text-xl font-bold mt-4">
          Crypto Security Guide
        </h1>   
       
      </div>
    </div>
   );
}