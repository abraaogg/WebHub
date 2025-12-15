import React from "react";

function ProfileCard() {
/*   const nome = "Froppy";
  return <h2>Hi {nome}</h2>; */

  let logado = true;
  return <div>{logado ? "Welcome" : "Login"}</div>
  
  // Condição ? valorSeVerdadeiro : ValorSeFalso
}

export default ProfileCard;
