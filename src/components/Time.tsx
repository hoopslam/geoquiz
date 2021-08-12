import { useAppStore } from "../store/store";
import { useState, useEffect } from "react";

const Time = () => {
  const { addTime } = useAppStore();
  const [time, setTime] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number>();

  const addSecond = (): void => {
    setTime((prev) => prev + 1);
    addTime(time);
  };

  const cleanUp = (): void => {
    addTime(time);
    clearInterval(intervalId);
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      addSecond();
    }, 1000);
    setIntervalId(id);
    return cleanUp();
  }, []);

  return <p>Time: {time}s</p>;
};

export default Time;
