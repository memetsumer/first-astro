import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button class="rounded-lg border p-2 bg-slate-300 m-4" onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <div class="text-4xl">Counter: {count}</div>
    </div>
  );
};

export default Counter;
