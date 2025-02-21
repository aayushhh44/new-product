import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./animate.css";
import Slider from "react-slick";
import { FaBolt, FaLightbulb, FaSuitcaseRolling } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import "./animate.css";
import { Link } from "react-scroll";
import { TbRulerMeasure } from "react-icons/tb";
import { RiShutDownFill } from "react-icons/ri";

const imgs = [
  // "/assets/cooler.jpg",
  // "/assets/2fansspeeds.jpg",
  // "/assets/5sprays.jpg",
  // "/assets/everywhere.jpg",
  // "/assets/differentcolor.jpg",
  "https://ae-pic-a1.aliexpress-media.com/kf/S124515a599c84e1e81d65079a3690c12m.jpg_960x960q75.jpg_.avif",
  "https://ae-pic-a1.aliexpress-media.com/kf/S6782e549715f4f6189f5d12abb7fef19U.jpg_960x960q75.jpg_.avif",
  "https://ae-pic-a1.aliexpress-media.com/kf/S763ced06f4f444fc90161613c807fa87Q.jpg_960x960q75.jpg_.avif",
  "https://ae-pic-a1.aliexpress-media.com/kf/S6526aea23163415e93bf7e8cea3aa4d53.jpg_960x960q75.jpg_.avif",
  "https://ae-pic-a1.aliexpress-media.com/kf/S1309dc4aafbc4350b2225db048210fd60.jpg_960x960q75.jpg_.avif",
  "https://ae-pic-a1.aliexpress-media.com/kf/Sa304cf12453649118e38f68a52d2de02O.jpg_960x960q75.jpg_.avif",
  "https://ae-pic-a1.aliexpress-media.com/kf/S89178d0150c34e0091c8495cedd1d761D.jpg_960x960q75.jpg_.avif",
];

const SwipeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const initialTime = 3 * 24 * 60 * 60 * 1000;
  const resetTime = 3 * 24 * 60 * 60 * 1000;

  const startTime = new Date().getTime();

  const calculateEndTime = () => {
    const storedEndTime = localStorage.getItem("endTime");
    if (storedEndTime) {
      return parseInt(storedEndTime, 10);
    } else {
      const currentTime = Date.now();
      const timeSinceStart = currentTime - startTime;
      const timeSinceLastReset = timeSinceStart % initialTime;
      const nextEndTime = currentTime + (initialTime - timeSinceLastReset);
      localStorage.setItem("endTime", nextEndTime.toString());
      return nextEndTime;
    }
  };

  const [endTime, setEndTime] = useState(() => calculateEndTime());
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(endTime - Date.now(), 0)
  );

  useEffect(() => {
    const updateTimer = () => {
      const remainingTime = endTime - Date.now();

      if (remainingTime <= 0) {
        const newEndTime = Date.now() + resetTime;
        setEndTime(newEndTime);
        setTimeLeft(resetTime);
        localStorage.setItem("endTime", newEndTime.toString());
      } else {
        setTimeLeft(remainingTime);
      }
    };

    setTimeLeft(Math.max(endTime - Date.now(), 0));

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}hrs ${minutes}mins ${seconds}s`;
  };

  return (
    <div>
      <div className="relative font-poppins px-10 pt-6">
        <Slider {...settings}>
          {imgs.map((imgSrc, idx) => (
            <div
              key={idx}
              className="aspect-w-16 relative flex justify-center aspect-h-9 w-screen"
            >
              <img
              loading="eager"
                src={imgSrc}
                alt={`Slide ${idx}`}
                className="h-80 w-80 object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex flex-col font mt-10 gap-4 p-8">
        <Link
          smooth={true}
          duration={600}
          to="form-input"
          className="bg-red-600 text-center cursor-pointer animate-heartbeat p-4 text-white rounded-md font-poppins my-2 hover:bg-red-700 font-bold "
        >
          Buy Now
        </Link>
        <div className="grid grid-cols-4 gap-4 justify-between">
          <div className="flex gap-2 flex-col rounded-full h-20 w-20 items-center justify-center bg-red-500 p-2">
            <FaSuitcaseRolling className="text-white" fontSize={26} />
            <p className="text-white font-poppins text-xs">Portable</p>
          </div>

          <div className="flex flex-col rounded-full h-20 w-20 items-center justify-center bg-red-500 p-2">
            <TbRulerMeasure className="text-white" fontSize={26} />
            <p className="text-white font-poppins text-center text-xs">
            Accurate
            </p>
          </div>

          <div className="flex flex-col rounded-full h-20 w-20 items-center justify-center bg-red-500 p-2">
            <RiShutDownFill className="text-white" fontSize={26} />
            <p className="text-white font-poppins text-center text-xs">
            Auto Shut-Off
            </p>
          </div>

          <div className="flex flex-col rounded-full h-20 w-20 items-center justify-center bg-red-500 p-2">
            <FaBolt className="text-white" fontSize={26} />
            <p className="text-white font-poppins text-center text-xs">
            Durable Material 
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ms-2 text-sm font-bold text-gray-900">4.95</p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <Link
            smooth={true}
            duration={600}
            to="review-section"
            className="text-sm cursor-pointer font-medium font-poppins underline hover:no-underline text-red-700"
          >
            73 reviews
          </Link>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-3xl">
            <span className="mr-2 text-xl font-poppins">
           Digital Spoon Scale
            </span>
          </h1>
          <p className="bg-red-600 font-bold pulse-scale text-white p-2">
            <span className="text-[#FFDF40] font-poppins">
              Offer ends in {formatTime(timeLeft)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwipeCarousel;
