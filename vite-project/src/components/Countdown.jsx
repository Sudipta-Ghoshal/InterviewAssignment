import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2027-04-22T23:59:59").getTime();

function calculateTimeLeft() {
  const difference = TARGET_DATE - Date.now();

  if (difference <= 0) {
    return {
      days: "000",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(3, "0"),

    hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, "0"),

    minutes: Math.floor((difference / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0"),

    seconds: Math.floor((difference / 1000) % 60)
      .toString()
      .padStart(2, "0"),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="justify-center inline-flex items-center rounded-[10px] border border-solid border-[#eee] bg-white px-5 py-2.5 shadow-sm">
      <div className="flex items-baseline gap-1">
        <span className="font-quicksand text-[20px] font-bold text-[#3d4750]">
          {timeLeft.days}
        </span>
        <span className="font-Poppins text-[13px] font-medium text-[#686e7d]">
          Days
        </span>
      </div>

      <div className="ml-4 flex items-center gap-2">
        <Time value={timeLeft.hours} />
        <Colon />
        <Time value={timeLeft.minutes} />
        <Colon />
        <Time value={timeLeft.seconds} />
      </div>
    </div>
  );
}

function Time({ value }) {
  return (
    <span className="min-w-7 text-center font-quicksand text-[20px] font-bold text-[#3d4750]">
      {value}
    </span>
  );
}

function Colon() {
  return <span className="text-[18px] font-semibold text-[#686e7d]">:</span>;
}
