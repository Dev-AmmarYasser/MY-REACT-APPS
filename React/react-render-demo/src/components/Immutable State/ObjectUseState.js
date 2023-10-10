import React, { useState } from "react";

const initState = {
  fname: "Ammar",
  lname: "Yasser",
};

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);

  const changeName = () => {
    const newPerson = { ...person };
    newPerson.fname = "Doro";
    newPerson.lname = "Koro";
    setPerson(newPerson);
  };

  console.log("ObjectUseState Render...");

  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};
