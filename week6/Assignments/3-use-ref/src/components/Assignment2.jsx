import { useEffect, useRef, useState } from "react";

export function Assignment2() {
  const renderCount = useRef(0);
  const [, forceRender] = useState(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const handleReRender = () => {
    // Update state to force re-render
    forceRender(Math.random());
  };

  return (
    <div>
      <p>This component has rendered {renderCount.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
