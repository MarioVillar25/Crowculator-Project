let addSymbol = (character) => {
  document.getElementById("screen").value += character;
};

let clearScreen = () => {
  document.getElementById("screen").value = "";
};

let clearTopScreen = () => {
  document.getElementById("topscreen").value = "";
};

let calculate = () => {
  let operation = document.getElementById("screen").value;
  let res = "E";
  
  let operador = "";
  let posicionOperador = 0;
  let operando1 = 0;
  let operando2 = 0;

  operador = obtenerOperador(operation);
  posicionOperador = obtenerPosicionOperador(operation);
  operando1 = obtenerPrimerOperando(operation);
  operando2 = obtenerSegundoOperando(operation);

  res = calcularResultado(operation);

  //console.log(operation);

  document.getElementById("screen").value = res;
};

let message = () => {
  let mess = "(👊ㆆ__ㆆ)🔪";

  if (document.getElementById("screen").value != "ERROR") {
    mess = "(👍≖‿‿≖)👍";
  }

  document.getElementById("topscreen").value = mess;
};


//Funciones para calculate:

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

    /*    
    if (Number.isInteger(calculo)) {
      //Esto lo he buscado: (Number.isInteger)
      calculo;
    } else {
      calculo = "ERROR";
    }

    */
    


  } else {
    calculo = "ERROR";
  }

  return calculo;
}

/*
operaciones correctas

5+3
-5+3
-5-3
-5+-3
-5--3
5--3
849/2
-840/-2
6*+9

*/

//el operador se obtiene recorriendo el string como un array
//y cogiendo el primer simbolo NO numerico seguido de un simbolo
//numerico

//isNaN() -> true -> cuando NO es un numero
//isNaN() -> false -> cuando SI que es un numero

/*
Operaciones NO permitidas -> E

333

*3

+/6

6+*9

3+4+5

*3+6

2.6+6  -> E

/9*3

4-/6

7* / *5

*/
