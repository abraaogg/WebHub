// Propriedades -> props

import "./App.css";
import Counter from "./components/Counter";
import Destructuring from "./components/Destructuring";
import Lista from "./components/Lista";
import ProfileCard from "./components/ProfileCard";
import Titulo1 from "./components/titulo1";

function App() {
  return (
    <>
     {/* {/*  {/* <ProfileCard />
      <Titulo1 /> {" "}
      <Lista />
      <Counter /> */}
      <Destructuring name="Abraham" age={22}/>
    </>
  );
}

export default App;
