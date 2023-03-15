import Counter from "./Counter";

export default function App() {
  return (
    <>
      <h1>Hello!</h1>
      <p>Lorem ipsum</p>
      <Counter />
      <Counter defaultCounter={100} step={20} />
    </>
  );
}
