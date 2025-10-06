// ESTRUTURA DE REPETIÇÃO

//  FOR   WHILE   DO WHILE

//inicio, um limite, equação

/*
for(valor inicial; valor limite; equação)
  console.log('valor')
*/

for (let count = 0; count < 5; count++) {
  console.log(count);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//while
let count = 0;
while (count < 100) {
  console.log(count);
  count++;
}

//do while
let clock = 21;

do {
  console.log(clock);
  clock++;
} while (clock < 20);
