import React, { useState } from "react";

function List() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

// Use React.memo to memoize ListItem
const ListItem = React.memo(({ text }) => {
  console.log("Rendering", text);
  return <div>{text}</div>;
});

export default List;
