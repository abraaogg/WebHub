import React from "react";

function Lista() {
  const frutas = [
    { id: 1, nome: "Banana" },
    { id: 2, nome: "Morango" },
    { id: 3, nome: "Uva" },
  ];

  return (
    <ul>
      {frutas.map((fruta) => (
        <li key={fruta.id}>{fruta.nome}</li>
      ))}
    </ul>
  );
}

export default Lista;
