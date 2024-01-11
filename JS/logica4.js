/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no. Ej: miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar. Ej: miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa. Ej: miFuncion(0,"C") devolverá 32°F. */

//Ejercicio 12

const primoNumber = () => {
  numero = prompt("Introduce un número y te diré si es primo.");

  if (!numero || isNaN(numero))
    return console.warn("No has introducido un número.");

  if (numero <= 1) return console.error("El número debe ser mayor que 1.");

  for (i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0)
      return console.warn(`Lo siento, "${numero}" no es un número primo.`);
  }

  console.info(`Correcto, "${numero}" es un número primo.`);
};

/* primoNumber(); */

//Ejercicio 13

const parImparNumber = () => {
  const numero = prompt("Introduce un número y te diré si es par o impar");

  if (!numero) return console.warn("No has introducido un número.");

  if (isNaN(numero)) return console.error("No has introducido un número.");

  return numero % 2 === 0
    ? console.info(`El número ${numero} es un número par.`)
    : console.info(`El número ${numero} es un número impar.`);
};

/* parImparNumber(); */

//Ejercicio 14

const FahrenheitCelsius = () => {
  let temperatura = prompt("Introduce la temperatura en Celsius o Fahrenheit.");

  if (!temperatura) return console.warn("No has introducido una temperatura.");

  temperatura = temperatura.toUpperCase();

  //Obtener el número de la temperatura y eliminar los símbolos
  let numeroTemperatura = parseFloat(temperatura.replace(/°?[CF]/gi, ""));

  //Devuelvo el resultado
  if (temperatura.endsWith("F")) {
    let resultadoCelsius = ((numeroTemperatura - 32) * 5) / 9;
    console.info(
      `"${temperatura}" es igual a "${resultadoCelsius.toFixed(2)}°C".`
    );
  } else if (temperatura.endsWith("C")) {
    let resultadoFahrenheit = (numeroTemperatura * 9) / 5 + 32;
    console.info(
      `"${temperatura}" es igual a "${resultadoFahrenheit.toFixed(2)}°F".`
    );
  } else {
    console.warn("El formato introducido es incorrecto.");
  }
};

/* FahrenheitCelsius(); */
