// Propriedades -> props

import "./App.css";
import Counter from "./components/Counter";
import Destructuring from "./components/Destructuring";
import Form from "./components/form";
import Form2 from "./components/Form2";
import Lista from "./components/Lista";
import ProfileCard from "./components/ProfileCard";
import Titulo1 from "./components/titulo1";

// state Lift -> Elevar o estado

function App() {
  return (
    <>
      {/*
      <ProfileCard />
      <Titulo1 />
      <Lista />
      <Counter /> 
      <Destructuring name="Abraham" age={22} />
      */}
      <Form2 />
    </>
  );
}

export default App;
