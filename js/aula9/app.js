let temperature = 18;

if (temperature >= 24) {
  console.log("Está quente");
} else if (temperature >= 16) {
  console.log("Está ótimo");
} else {
  console.log("Está frio");
}

let compra = 200;

let cupomDesconto = 0.1;

let desconto = compra * cupomDesconto;

let precoFinal = compra - desconto;

if (compra >= 100) {
  console.log(precoFinal);
}

//switch

switch(hora){
    case 8: console.log('Morning'); 
    break;
    case 12: console.log('Afternoon'); 
    break;
    case 16: console.log('Evening'); 
    break;
}
