import React, { useEffect, useState } from "react";
import "./animate.css";

const Topbar = () => {
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

    return (
      <div className="p-2 text-white font-bold rounded-md">
        Offer ends in
        <span className="border mx-1 bg-white text-black p-1">{days}d</span>
        <span className="border bg-white text-black p-1">{hours}hrs</span>
        <span className="border ml-1 bg-white text-black p-1">
          {minutes}Mins
        </span>
        <span className="border ml-1 bg-white text-black p-1">{seconds}s</span>
      </div>
    );
  };

  return (
    <div className="sticky top-0 font-poppins z-50">
      <div className="mb-2 bg-[#3182ce] p-3 items-center flex flex-col justify-center">
        <h1 className="uppercase font-bold text-[#FFDF40] text-nowrap">
          Only a Few Left in Stock –{" "}
          <span className="animate-heartbeat">Order Now!</span>
        </h1>
        <div>{formatTime(timeLeft)}</div>
      </div>
    </div>
  );
};

export default Topbar;
