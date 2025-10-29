import "./App.css";
import Contador from "./components/Contador";
import deku from "./assets/deku.jpg"

function App() {
  return (
    <div>
      <img src={deku} alt="Midoriya" />
      <Contador />
    </div>
  );
}

export default App;
