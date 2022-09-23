import { useEffect, useState } from "react";
import { useCounter } from "./useCounter";

const MAX_CAPACITY = 10;

export const UseCount = (props) => {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, deCreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("========================");
    console.log("useEffect() is called.");
    console.log(`isFull:${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, []);

  return <div></div>;
};
