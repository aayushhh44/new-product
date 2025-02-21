import React from "react";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { LiaBoxSolid, LiaFanSolid } from "react-icons/lia";
import { Link } from "react-scroll";

const Features = () => {
  return (
    <div className="p-6 flex font-poppins flex-col">
      <h2 className="text-3xl text-center p-4">Why to Buy?</h2>
      
      <div className="grid grid-cols-2 gap-1">
        <div>
          <img src="https://i5.walmartimages.com/seo/New-Digital-Measuring-Spoon-Food-Scoop-Scale-Weighing-Spoon-Scale-800g-0-1g-High-Precision-LCD-Screen-Display-Electronic-Dog-Cat_be1a0e04-0f13-424b-bbe7-516d79f2c6a5.8c00a93d28bb67140d0de04844eead31.jpeg" alt="Imag1" />
        </div>

        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Aiv80z3NVrguL6v-Lo-ccjdWp8pPiw3Z-4LE8nHlySm-f52L8mNMRPlH8KRR7--oB44&usqp=CAU" alt="Imag2" />
        </div>
        

        <div>
          <img src="https://i5.walmartimages.com/asr/88f52cd0-5c2b-4217-ab2a-6ba72c13b881.be745d724fe14590d3b5ad56674bf8b9.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="Imag1" />
        </div>
        

        <div>
          <img src="https://m.media-amazon.com/images/I/71YG8bmLNQL._AC_UF1000,1000_QL80_.jpg" alt="Imag1" />
        </div>
        

        <div>
          <img src="https://m.media-amazon.com/images/I/61slHKcFgYL._AC_UF350,350_QL80_.jpg" alt="Imag1" />
        </div>
        

        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTARUscVIBn89OSyVejHz3VciyB3ELd1SS1Ct5cOjpVRZDLgigSWvdX5pwYXtubbLeJrFI&usqp=CAU" alt="Imag1" />
        </div>
        
        
      </div>
      {/* <img loading="lazy" src="/image2.png" alt="Features" /> */}

      <h2 className="text-2xl mt-6">Packaging Contains</h2>

      <div className="flex flex-col gap-2 my-4">
        <div className="flex items-center font-poppins">
        <LiaBoxSolid />
        <p className="font-poppins">1 x Digital Spoon Scale</p>
        </div>

        <div className="flex items-center">
        <LiaBoxSolid />
        <p className="font-poppins">1 x Button Battery (CR2032)</p> <LiaBoxSolid />
        </div>

        <div className="flex font-poppins items-center">
        <LiaBoxSolid />
        <p>1 x User Manual</p>
        </div>
      </div>

      <Link smooth={true} 
        duration={600} to="form-input" className="bg-red-600 my-4 text-center cursor-pointer p-4 text-white rounded-md font-poppins hover:bg-red-700 font-bold ">
          Buy Now
        </Link>
      <div>
        <h2 className="text-2xl text-center my-4 font-poppins">Digital Spoon Scale Specifications</h2>

        <table className="min-w-full border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
          Specification
        </th>
        <th className="border border-gray-300 px-4 py-2 bg-gray-100">
          Details
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Dimensions</td>
        <td className="border border-gray-300 px-4 py-2">
          <b>Length:</b> 23 cm  
          <br />
          <b>Width:</b> 5.5 cm  
          <br />
          <b>Weight:</b> Approx. 90 grams
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Measurement Range</td>
        <td className="border border-gray-300 px-4 py-2">
          0.1g – 500g
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Units</td>
        <td className="border border-gray-300 px-4 py-2">
          Grams (g), Ounces (oz), Carats (ct), Grains (gn)
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Power Source</td>
        <td className="border border-gray-300 px-4 py-2">
          1 x CR2032 Button Battery (Included)
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Material</td>
        <td className="border border-gray-300 px-4 py-2">
          Food-Grade ABS Plastic
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Features</td>
        <td className="border border-gray-300 px-4 py-2">
          LCD Display, Tare Function, Auto Shut-Off, Detachable Spoon
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Accuracy</td>
        <td className="border border-gray-300 px-4 py-2">
          ±0.1g
        </td>
      </tr>
    </tbody>
  </table>
      </div>
    </div>
  );
};

export default Features;
