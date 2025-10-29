import "./App.css";
import Contador from "./components/Contador";
import deku from "./assets/deku.jpg";

function App() {
  //  const frutas = ["Strawberry", "Banana", "Apple"]
  const tarefas = [
    {id: 1,titulo: "Estudar React", feita: true },
    {id: 2, titulo: "Estudar Js", feita: false },
    {id: 3, titulo: "Estudar College", feita: true }
  ];
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li className={iftarefa.feita ? "feita" : ""} key={tarefa.id}>{tarefa.titulo}</li>
        ))}
      </ul>
    </div>
    /*    <div>
      <img src={deku} alt="Midoriya" />

      <Contador /> 
    </div> */
    /*     <ul>
      {frutas.map(frutas => <li>{frutas}</li>)}
    </ul> */
  );
}

export default App;
