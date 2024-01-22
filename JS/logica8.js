/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente. Ej: miFuncion([7,5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados. Ej: miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio. Ej: promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

//Ejercicio 24

const ascendenteDescendente = () => {
  alert(
    "A continuación introduce 3 o más números y los ordenaremos de forma ascendente y descendente."
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

  console.info({
    Original: numeros,
    Ascendente: [...numeros].sort((a, b) => a - b),
    Descendente: [...numeros].sort((a, b) => b - a),
  });
};

/* ascendenteDescendente(); */

//Ejercicio 25

const eliminarDuplicados = () => {
  alert(
    "A continuación introduce 3 o más números y eliminaremos los duplicados."
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

  const numerosSinDuplicados = numeros.filter((valor, indice, self) => {
    return self.indexOf(valor) === indice;
  });

  console.info({
    numerosSinDuplicados,
    originales: numeros,
  });
};

/* eliminarDuplicados(); */

//Ejercicio 26

const devolverPromedio = () => {
  alert("A continuación introduce 3 o más números y te diremos su promedio.");

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

  const numerosSumados = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
  });

  const promedio = (numerosSumados / numeros.length).toFixed(2);

  console.info(`El promedio de ${numeros} es ${promedio}.`);
};

/* devolverPromedio(); */
