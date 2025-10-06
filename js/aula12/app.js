function mensagem() {
  console.log("Bom dia");
}

//setTimeout -> serve para criar um delay na execução de uma função
setTimeout(mensagem, 2500);

//setInterval -> controla o tempo de execução de uma função

setInterval(mensagem, 2000);
// vai ser executado de 2 em 2 segundos

// também pode ser escrito dessa forma
setInterval(function mensagem() {
  console.log("Boa noite");
}, 2000);

setTimeout(function acabou(){
  alert('acabouuuu')
}, 3000)
