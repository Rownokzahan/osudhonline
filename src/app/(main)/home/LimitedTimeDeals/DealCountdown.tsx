"use client";
import { useEffect, useState } from "react";

const DealCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: "00h",
    minutes: "00m",
    seconds: "00s",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // today’s midnight (00:00 next day)

      const diff = midnight.getTime() - now.getTime();

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: `${hours}h`,
        minutes: `${minutes}m`,
        seconds: `${seconds}s`,
      });
    };

    updateCountdown(); // run immediately
    const interval = setInterval(updateCountdown, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h3 className="font-black text-white md:text-2xl">Limited Time Deals</h3>
      <div className="mt-2 space-y-1">
        <p className="text-[#ff99db] text-sm">Ends in</p>

        <div className="flex items-center gap-1 text-sm font-bold text-white">
          <span className="px-1 rounded bg-[#f50031]">{timeLeft.hours}</span>
          <span className="px-1 rounded bg-[#f50031]">{timeLeft.minutes}</span>
          <span className="px-1 rounded bg-[#f50031]">{timeLeft.seconds}</span>
        </div>
      </div>
    </>
  );
};

export default DealCountdown;
