import { useState } from "react";

export default function TimeoutComponent() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
