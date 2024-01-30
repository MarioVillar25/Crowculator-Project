let calculate_test = () => {
  let operation = document.getElementById("screen").value;

  let res = "E";

  //TODO: coger el string, procesar la operación y obtener el resultado

  console.log(operation);

  document.getElementById("screen").value = res;
};

//FUNCIONES:

//Funciones para sacar el operador:

function obtenerPosicionOperador(input) {
  let pos = 0;
  let found = false;

  for (let i = 0; i < input.length - 1 && found == false; i++) {
    if (isNaN(input[i]) == false && isNaN(input[i + 1]) == true) {
      pos = i + 1;
      found = true;
    }
  }
  return pos;
}

function obtenerOperador(input) {
  let operador = "";
  let found = false;

  for (let i = 0; i < input.length - 1 && found == false; i++) {
    if (isNaN(input[i]) == false && isNaN(input[i + 1]) == true) {
      operador = input[i + 1];
      found = true;
    }
  }
  return operador;
}

//Funcion para sacar el 1º Operando(izq):

function obtenerPrimerOperando(input) {
  let operando1 = 0;

  operando1 = parseInt(input.slice(0, obtenerPosicionOperador(input)));

  if (isNaN(operando1) == true) {
    operando1 = "E";
  }

  return operando1;
}

//Funcion para sacar el 2º Operando(dch):

function obtenerSegundoOperando(input) {
  let operando2 = 0;
  let encontrar = false;

  operando2 = input.slice(obtenerPosicionOperador(input) + 1, input.length);

  for (let i = 0; i < operando2.length - 1 && encontrar == false; i++) {
    if (isNaN(operando2[i]) == false && isNaN(operando2[i + 1]) == true) {
      encontrar = true;
    }
  }

  if (encontrar == true) {
    operando2 = "E";
  } else {
    operando2 = parseInt(operando2);
  }

  if (isNaN(operando2) == true) {
    operando2 = "E";
  }

  return operando2;
}

//Funcion para el calculo final:

function calcularResultado(input) {
  let calculo = 0;

  if (
    obtenerPrimerOperando(input) != "E" &&
    obtenerSegundoOperando(input) != "E"
  ) {
    switch (obtenerOperador(input)) {
      case "+":
        calculo = obtenerPrimerOperando(input) + obtenerSegundoOperando(input);
        break;

      case "-":
        calculo = obtenerPrimerOperando(input) - obtenerSegundoOperando(input);
        break;

      case "/":
        calculo = obtenerPrimerOperando(input) / obtenerSegundoOperando(input);
        break;

      case "*":
        calculo = obtenerPrimerOperando(input) * obtenerSegundoOperando(input);
        break;
    }

    if (Number.isInteger(calculo)) {  //Esto lo he buscado: (Number.isInteger)
      calculo;
    } else {
      calculo = "E";
    }
  } else {
    calculo = "E";
  }

  return calculo;
}

//TESTEO FUNCIONES:

let cadenaPrueba = "26+6";

console.log(obtenerOperador(cadenaPrueba));

console.log(obtenerPosicionOperador(cadenaPrueba))

console.log(obtenerPrimerOperando(cadenaPrueba));

console.log(obtenerSegundoOperando(cadenaPrueba));

console.log(calcularResultado(cadenaPrueba));

//CODIGO NATIVO:

//Código para obtener operador:

/*
let cadena = "45/224";

console.log("Entrada usuario:");
console.log(cadena);

let operador = "";
let pos = 0;
let found = false;

for (let i = 0; i < cadena.length - 1 && found == false; i++) {
  if (isNaN(cadena[i]) == false && isNaN(cadena[i + 1]) == true) {
    operador = cadena[i + 1];
    pos = i + 1;
    found = true;
  }
}
console.log("Operador:");
console.log(operador);

//Codigo obtener 1º Operando (izq):

let operando1 = 0;

operando1 = parseInt(cadena.slice(0, pos));

console.log("Operando 1:");
console.log(operando1);

//Checker 1º Operando

if (isNaN(operando1) == true) {
  console.log("ERROR op1");
  res = "E";
}

//Funcion obtener 2º Operando (dch):

let operando2 = 0;

operando2 = cadena.slice(pos + 1, cadena.length);

//Buscar si hay 3º Operando

let posOp2 = 0;
let encontrar = false;

for (let i = 0; i < operando2.length - 1 && encontrar == false; i++) {
  if (isNaN(operando2[i]) == false && isNaN(operando2[i + 1]) == true) {
    posOp2 = i + 1;
    encontrar = true;
  }
}

///////////////////////

//Check por si aparece 3º Operando

if (encontrar == true) {
  //Si hay 3º operando da ERROR la calculadora
  //operando2 = "ERROR";
  res = "E";
} else {
  //Si NO HAY 3º operando entonces se convierte a numérico el 2º operando
  operando2 = parseInt(cadena.slice(pos + 1, cadena.length));
}

console.log("Operando 2:");
console.log(operando2);

//Checker 2º Operando

if (isNaN(operando2) == true) {
  console.log("ERROR op2");
  res = "E";
}

//Hacer calculo final:

console.log("-----------");
console.log("resultado:");

let calculo = 0;

switch (operador) {
  case "+":
    calculo = operando1 + operando2;
    break;

  case "-":
    calculo = operando1 - operando2;
    break;

  case "/":
    calculo = operando1 / operando2;
    break;

  case "*":
    calculo = operando1 * operando2;
    break;
}

//Check resultado (Por si salen decimales)
if (calculo == parseFloat(calculo)) {
  res = "E";
}
console.log(calculo);
*/
