import { useState } from "react";
import Button from "./Button";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseHandler = () => setCount(count + 1);
  const decreaseHandler = () => setCount(count - 1);
  const resetHandler = () => setCount(0);

  return (
    <>
      <h1>Counter</h1>
      <div className="container">
        <h1>{count}</h1>
        {count > 0 && <Button text="decrease" clickHandler={decreaseHandler} />}
        <Button text="increase" clickHandler={increaseHandler} />
        {count > 0 && <Button text="reset" clickHandler={resetHandler} />}
      </div>
    </>
  );
};

export default Counter;
