import { useState } from "react";

// [valorAtual, funcaoAlterarValorAtual] = valorInicial

//useState -> Hook -> Uma nova funcionalidade dentro do react -> Estados

function Contador() {
  const [contador, setContador] = useState(0);

  function somar() {
    setContador(contador + 1);
  }

  function zerar(){
    setContador(0);
  }

  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={somar}>Aumentar</button>
      <button onClick={zerar}>Zerar</button>
    </div>
  );
}

export default Contador;
