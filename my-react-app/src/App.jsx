import React from "react";
import List2 from "./List2";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Orange", calories: 62 },
    { id: 4, name: "Grapes", calories: 62 },
    { id: 5, name: "Strawberry", calories: 4 },
  ];

  const vegetables = [
    { id: 6, name: "Carrot", calories: "apple" },
    { id: 7, name: "Broccoli", calories: 55 },
    { id: 8, name: "Spinach", calories: 23 },
    { id: 9, name: "Cauliflower", calories: 25 },
    { id: 10, name: "Tomato", calories: 22 },
  ];

  return (
    <>
      {/* {fruits.length > 0 ? <List2 items={fruits} category="fruits" /> : null} */}

      {fruits.length > 0 && <List2 items={fruits} category="fruits" />}

      {vegetables.length > 0 && (
        <List2 items={vegetables} category="vegetables" />
      )}
    </>
  );
}

export default App;
