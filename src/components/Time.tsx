import { useAppStore } from "../store/store";
import { useState, useEffect } from "react";

const Time = () => {
  const { addTime } = useAppStore();
  const [time, setTime] = useState<number>(0);

  const addSecond = (): void => {
    setTime((prev) => prev + 1);
  };

  useEffect(() => {
    //setInterval Id to stop interval
    let id = window.setInterval(() => {
      addSecond();
    }, 1000);

    //Cleanup function to stop interval on unmount
    return () => {
      addTime(time);
      clearInterval(id);
    };
  }, []);
  return <p>Time: {time}s</p>;
};

export default Time;
