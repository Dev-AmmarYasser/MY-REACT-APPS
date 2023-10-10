import React, { useState } from "react";
import { ParentOne } from "./ParentOne";
import { ChildOne } from "./ChildOne";

export const GrandParent = () => {
  const [newCount, setNewCount] = useState(0);
  return (
    <div>
      <button onClick={() => setNewCount((c) => c + 1)}>
        Grand Parent Count - {newCount}
      </button>
      <ParentOne newCount={newCount}>
        <ChildOne />
      </ParentOne>
    </div>
  );
};
