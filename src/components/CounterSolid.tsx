import "solid-js";
import { createSignal } from "solid-js";

export default function CounterSolid() {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <h1>Counter Solid</h1>
      <p>Count: {count()}</p>
      <button onClick={() => setCount(count() + 1)}>Increment</button>
      <button onClick={() => setCount(count() - 1)}>Decrement</button>
    </div>
  );
}
