import React, { useState } from "react";

const initState = ["Ammar", "Korio"];

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);

  const handleClick = () => {
    const newPersons = [...persons];
    newPersons.push("Doro");
    newPersons.push("Dorio");
    setPersons(newPersons);
  };

  console.log("ArrayUseState Render...");

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};
