function ItemList({ list }) {
    // Implement the ItemList component to render the list of stationary items here
    return (
      <ul>
        {list.map((item, idx) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
  
  export default ItemList;