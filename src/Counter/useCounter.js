import React from "react";

export default function useCounter({ defaultCounter, step }) {
  const [counter, setCounter] = React.useState(defaultCounter);

  const add = () => setCounter(counter + step);
  const substract = () => setCounter(counter - step);

  return [counter, { add, substract }];
}
