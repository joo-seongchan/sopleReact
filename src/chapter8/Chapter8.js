import { useState } from "react";

export const Chapter8 = () => {
  const [isConfirmed, setIsConfiremed] = useState(false);

  const handleConfirm = () => {
    setIsConfiremed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
};
