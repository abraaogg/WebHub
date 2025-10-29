import "./App.css";
import Contador from "./components/Contador";
import deku from "./assets/deku.jpg"

function App() {
  const frutas = ["Strawberry", "Banana", "Apple"]
  return (
 /*    <div>
      <img src={deku} alt="Midoriya" />

      <Contador /> 
    </div> */
    <ul>
      {frutas.map(frutas => <li>{frutas}</li>)}
    </ul>
  );
}

export default App;
