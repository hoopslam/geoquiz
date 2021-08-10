import { useState } from "react";

const Time = () => {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState<number>();

  const startTimer = () => {
    let timer = window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setTimerId(timer);
  };

  const stopTimer = () => {
    clearInterval(timerId);
  };
  return <div></div>;
};

export default Time;
