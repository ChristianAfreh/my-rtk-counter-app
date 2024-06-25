import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../app/features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleReset() {
    dispatch(reset());
  }

  return (
    <>
      <div className="app-container">
        <h1>My Counter App</h1>
        <div className="counter-display" id="counter">
          {count}
        </div>
        <div className="counter-buttons">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </>
  );
}
