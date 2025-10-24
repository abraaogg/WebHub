// JavaScript Assíncrono -> coloca uma coisa de lado e continua executando o resto para que o codigo não trave

function fazerLogin(e) {
  setTimeout(() => {
    console.log("Usuário logado");
    e()
  }, 2000);
}

function mostrarPerfilUsuario() {
  console.log("Perfil usuario");
}

console.log("Site Carregado");

console.log("user inseriu info");

fazerLogin(mostrarPerfilUsuario);
// Callback -> função que é utilizada como parametro de outra função, e só é executada depois dela
