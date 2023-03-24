import useCounter from "./useCounter";
import "./styles.css";
import { number } from "prop-types";

export default function Counter({ defaultCounter = 0, step = 1 }) {
  const [counter, { add, substract }] = useCounter({ defaultCounter, step });

  return (
    <article className="counter">
      <h3>{counter}</h3>
      <button onClick={add}>Add</button>
      <button onClick={substract}>Substract</button>
    </article>
  );
}

Counter.propTypes = {
  defaultCounter: number,
  step: number,
};
