import { useAppStore } from "../store/store";

const Time = () => {
  const { time } = useAppStore();

  return <p>Time: {time}s</p>;
};

export default Time;
