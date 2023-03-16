import useCounter from "./useCounter";
import "./styles.css";

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
// TODO À tester
