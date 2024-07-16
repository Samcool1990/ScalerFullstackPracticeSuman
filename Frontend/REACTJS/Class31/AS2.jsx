import React, { useState, useEffect } from "react";

function GetData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        console.log("Fetching data...");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
        );
        const user = await response.json();
        setData(user);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError("Error fetching data: ");
        // Optionally set an error state and display it
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {loading && <h2>Loading data...</h2>}
      {error && <h2>Error fetching data</h2>}
      {data && (
        <>
          <h2>Name: {data.name}</h2>
          <h2>Email: {data.email}</h2>
          <h2>Username: {data.username}</h2>
        </>
      )}
    </>
  );
}

export default GetData;