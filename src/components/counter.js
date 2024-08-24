import { useState } from "react";
import Button from "./Button";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseHandler = () => setCount(count + 1);
  const decreaseHandler = () => setCount(count - 1);
  const resetHandler = () => setCount(0);

  return (
  );
};

export default Counter;
