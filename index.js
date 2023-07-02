
const parImpar = (num) => {
    if (num % 2 === 0) {
        console.log(num + " es par ");
    } else {
        console.log(num + " es impar ");
    }
}

parImpar(5)

const mayorMenor = (num1 , num2) => {
    if (num1 > num2) {
        console.log(num1 + " Es mayor");
    } else if (num1 < num2) {
        console.log(num2 + " Es mayor");
    } else {
        console.log("Son iguales");
    }
}
mayorMenor(10 , 10)

const multiploDe5 = (numero) => {
    if (numero % 5 == 0) {
        console.log("Es multiplo de 5");
    } else {
        console.log("No es multiplo de 5")
    }
}
multiploDe5(5)

const contador = (objetivo) => {
    for (let i = 0; i <= objetivo; i++) {
        console.log(i);
        if(i > objetivo){
            break;
        }
    }
}
contador(5)

const xPalabra = (palabra, numero) => {
    for (let i = 0; i < numero; i++) {
      console.log(palabra);
    }
  }
  xPalabra("juan", 3);

const equipos =  ["estudiantes" , "boca" , "racing"]; 
    console.log(equipos.length);


let cosas = ["Manzana", "tenedor" , "plato" , "teclado" , "tv" , "rojo" , "bici" , "radio" , "huevo" , "estudiantes"]; {
    cosas.splice(4, 1);
}
console.log(cosas)

const numeros =  [ 1 , 2 , 3 , 4 , 5]; 
let multicador = 8;

const multiplicadorDeArray = (array , numero) => {
    array.forEach(function(elemento) {
        let resultado = elemento * numero;
        console.log(resultado);
    });
}
multiplicadorDeArray(numeros, multicador)





