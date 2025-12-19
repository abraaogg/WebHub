import React, { useState } from "react";

function Form2() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [observations, setObservations] = useState("");

  const data = [name, gender, state, observations]

  function handleSubmit(e) {
    e.preventDefault();

    if (state === ""){
        alert("Select a state")
    } else {
        console.log("Info sent", data)
    }
  }
  return (
    <div>
      <h1>Form 2</h1>
      <form onSubmit={handleSubmit}>
        {/*TEXT*/}
        <label htmlFor="">
          <span>Name </span>
          <input
            type="text"
            value={name}
            name=""
            placeholder="Abe"
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        {/*RADIO*/}
        <label htmlFor="">
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />
          <span>Male</span>
        </label>

        <label htmlFor="">
          <input
            type="radio"
            value="Female"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />
          <span>Female</span>
        </label>

        {/*SELECT*/}
        <label htmlFor="">
          <span>State </span>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">Select</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio</option>
            <option value="MG">Minas</option>
          </select>
        </label>

        {/*RADIO*/}
        <label htmlFor="">
          <span>Observations</span>
          <textarea
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
          ></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Form2;
