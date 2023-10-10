import React, { useState } from "react";
import useInput from "./hooks/useInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <br />
          <input type="text" {...bindFirstName} />
        </div>
        <br />
        <div>
          <label>Last Name</label>
          <br />
          <input type="text" {...bindLastName} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
