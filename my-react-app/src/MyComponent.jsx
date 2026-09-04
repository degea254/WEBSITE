import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(30);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("joseph ");
  };

  const incrementAge = () => {
    setAge(age + 2);
  };

  const toggleEmploymentStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>name:{name}</p>
      <button onClick={updateName}>set name</button>

      <p>age:{age}</p>
      <button onClick={incrementAge}>increment age</button>

      <p>Is Employed {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmploymentStatus}>Toggle Status</button>
    </div>
  );
}

export default MyComponent;
