/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado. Ej: miFuncion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array. Ej: miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos, en el primero almacena los números pares y en el segundo los impares. Ej: miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

//Ejercicio 21

const elevarCuadrado = () => {
  alert(
    "A continuación introduce 3 o más números y los elevaremos al cuadrado."
  );

  let numeros = [];
  let resultados = [];

  for (let i = 0; i < 3; i++) {
    const numero = prompt("Introduce un número.");

    if (!numero || isNaN(numero)) {
      alert(`No has introducido un número.`);
      i--;
    } else {
      numeros.push(parseFloat(numero));
      resultados.push(numero ** 2);
    }

    if (i === 2) {
      const seguir = confirm("¿Quieres introducir otro número?");
      seguir === true ? (i = 1) : (i = 3);
    }
  }

  console.info({
    numeros,
    resultados,
  });
};

/* elevarCuadrado(); */

//Ejercicio 22

const numeroMasAlto = () => {
  alert(
    "A continuación introduce 3 o más números y te diremos el número más alto y el más bajo."
  );

  const numeros = [];

  for (let i = 0; i < 3; i++) {
    const numero = prompt("Introduce un número.");

    if (!numero || isNaN(numero)) {
      alert(`No has introducido un número.`);
      i--;
    } else {
      numeros.push(numero);
    }

    if (i === 2) {
      const seguir = confirm("¿Quieres introducir otro número?");
      seguir === true ? (i = 1) : (i = 3);
    }
  }

  const numerosOrdenados = numeros.sort((a, b) => a - b);
  const ultimaPosicion = numerosOrdenados[numerosOrdenados.length - 1];
  const primeraPosicion = numerosOrdenados[0];

  console.info(
    `El número más alto de los introducidos es "${ultimaPosicion}" y el más bajo "${primeraPosicion}".`
  );
};

/* numeroMasAlto(); */

//Ejercicio 23

const ordenarParImpar = () => {
  alert(
    "A continuación introduce 3 o más números y te diremos cuáles son pares o impares."
  );

  const numeros = [];

  for (let i = 0; i < 3; i++) {
    const numero = prompt("Introduce un número.");

    if (!numero || isNaN(numero)) {
      alert(`No has introducido un número.`);
      i--;
    } else {
      numeros.push(parseFloat(numero));
    }

    if (i === 2) {
      const seguir = confirm("¿Quieres introducir otro número?");
      seguir === true ? (i = 1) : (i = 3);
    }
  }

  const pares = numeros.filter((numero) => numero % 2 === 0);
  const impares = numeros.filter((numero) => numero % 2 !== 0);

  console.info({
    pares,
    impares,
  });
};

ordenarParImpar();
