import React, { useState } from "react";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { Link } from "react-scroll";

const Pricing1 = ({selectedFan, setSelectedFan}) => {
  // const [selectedFan, setSelectedFan] = useState(1);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const getImageSrc = () => {
    switch (selectedFan) {
      case 1:
        return "https://ae-pic-a1.aliexpress-media.com/kf/S6782e549715f4f6189f5d12abb7fef19U.jpg_960x960q75.jpg_.avif";
      case 2:
        return "https://i5.walmartimages.com/seo/New-Digital-Measuring-Spoon-Food-Scoop-Scale-Weighing-Spoon-Scale-800g-0-1g-High-Precision-LCD-Screen-Display-Electronic-Dog-Cat_be1a0e04-0f13-424b-bbe7-516d79f2c6a5.8c00a93d28bb67140d0de04844eead31.jpeg";
      case 3:
        return "https://buddiespetshop.com/cdn/shop/files/buddies-pet-shop-bottles-and-feeders-pet-food-measuring-spoon-21384435564705.jpg?v=1714122920&width=1445";
      default:
        return "https://ae-pic-a1.aliexpress-media.com/kf/S6526aea23163415e93bf7e8cea3aa4d53.jpg_960x960q75.jpg_.avif";
    }
  };

  console.log(selectedFan)

  return (
    <div>
      <div className="border font-poppins border-black">
        <div className="flex justify-center flex-col p-8 gap-8">
          <img
            className=" border"
            loading="lazy"
            src={getImageSrc()}
            alt={`Cooler ${selectedFan}`}
          />

          <div className="flex font-poppins flex-col gap-4">
            <div
              className={`border p-4 rounded-lg justify-between flex items-center border-black cursor-pointer ${
                selectedFan === 1 ? "bg-[#96CDF7] border-red-500" : ""
              }`}
              onClick={() => setSelectedFan(1)}
            >
              {selectedFan == 1 ? (
                <FaRegDotCircle size={25} />
              ) : (
                <FaRegCircle size={25} />
              )}

              <p className="font-poppins">1 Spoon</p>
              <p className="font-poppins">NPR 700</p>
            </div>

            <div
              className={`border relative p-4 rounded-lg justify-between flex items-center border-black cursor-pointer ${
                selectedFan === 2 ? "bg-[#96CDF7] border-red-500" : ""
              }`}
              onClick={() => setSelectedFan(2)}
            >
              <div className="bg-red-600 text-xs absolute font-poppins -right-2 t-0 -top-2 p-1 rounded-md text-white">
                Best selling
              </div>
              {selectedFan == 2 ? (
                <FaRegDotCircle size={25} />
              ) : (
                <FaRegCircle size={25} />
              )}
              <p>2 Spoon</p>
              <p className="border font-poppins border-black text-sm p-2 rounded-md mr-2">
                Free Delivery
              </p>
              <p className="font-poppins">NPR 1400</p>
            </div>

            <div
              className={`border p-4 rounded-lg justify-between flex items-center border-black cursor-pointer ${
                selectedFan === 3 ? "bg-[#96CDF7] border-red-500" : ""
              }`}
              onClick={() => setSelectedFan(3)}
            >
              {selectedFan == 3 ? (
                <FaRegDotCircle size={25} />
              ) : (
                <FaRegCircle size={25} />
              )}
              <p className="font-poppins">3 Spoon</p>
              <p className="border font-poppins border-black text-sm p-2 rounded-md mr-2">
                Free Delivery
              </p>
              <p>NPR 2100</p>
            </div>

            <Link smooth={true} 
        duration={600} to="form-input" className="bg-red-600 cursor-pointer text-center animate-heartbeat p-4 text-white rounded-md font-poppins my-2 hover:bg-red-700 font-bold ">
          Buy Now
        </Link>
          </div>
        </div>
      </div>

      {/*   
      {isModalOpen && (
        <div
          id="authentication-modal"
          className="fixed p-4 inset-0 z-50 flex items-center justify-center w-full h-full bg-[#3182ce] bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md rounded-lg shadow bg-[#3182ce]">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Please fill up the form
              </h3>
              <button
                type="button"
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5">
              <form className="space-y-4 flex flex-col">
                <label className="font-bold" htmlFor="">Name</label>
                <input className="p-2" type="text" placeholder="Enter your name" />

                <label className="font-bold" htmlFor="">Contact Number</label>
                <input className="p-2" type="text" placeholder="Enter your contact number" />

                <label className="font-bold" htmlFor="">Address</label>
                <input className="p-2" type="text" placeholder="Enter your Address" />
                <button className="text-[#FFDF40] font-bold border p-2 mt-5" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Pricing1;
