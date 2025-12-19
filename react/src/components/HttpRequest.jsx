import React, { useState, useEffect } from "react";

// json() converte json para objetos JavaScript
function HttpRequest() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []); // runs only once

  return (
    <div>
      <h2>{users.length === 0 ? "Carregando" : users[0].name}</h2>
    </div>
  );
}

export default HttpRequest;
