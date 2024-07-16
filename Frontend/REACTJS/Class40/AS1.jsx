import React, { useState, useEffect, useRef } from "react";

const dataList = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
];

function SearchComponent() {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(dataList);
  const debounceTimeout = useRef(null);


  useEffect(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      const results = dataList.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(results);
    }, 300); // Adjust the delay as needed (300ms in this case)

    // Cleanup function to clear the timeout if the component unmounts or query changes
    return () => {
      clearTimeout(debounceTimeout.current);
    };
    }, [query]);

    return (
    <div>
        <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
        {filteredData.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
        </ul>
    </div>
    );
    }

export default SearchComponent;
