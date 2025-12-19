import React, { useState } from "react";

// onChange, same as onClick

export const Form = () => {
  const [name, setName] = useState("Nome");
  function changeForm(e) {
    setName(e.target.value);
  }

  function sendForm(e) {
    e.preventDefault();
    alert(`Informações enviadas: ${name}`);
  }

  return (
    <div>
      <h2>{name}</h2>
      <form onSubmit={sendForm}>
        <label htmlFor="name">Name </label>
        <input onChange={changeForm} type="text" id="name" name="name" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
