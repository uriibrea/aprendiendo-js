/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro). Ej: miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n). Ej: miFuncion(5) devolverá 120. */

//Ejercicio 9

//Recordé que confirm() devuelve valores booleanos.

const aleatorioNumber = () => {
  alert(
    "Dame dos valores númericos y te daré un número aleatorio entre ambos."
  );
  let valor1 = prompt("Dame el primer valor.");
  valor1 = parseFloat(valor1);

  if (valor1 === "") return console.warn("No ingresaste el primer valor.");
  else if (isNaN(valor1)) return console.error("El valor debe ser númerico.");

  let valor2 = prompt("Dame el segundo valor.");
  valor2 = parseFloat(valor2);

  if (valor2 === "") return console.warn("No ingresaste el segundo valor.");
  else if (isNaN(valor2)) return console.error("El valor debe ser númerico.");

  let resultado = (Math.random() * (valor2 - valor1) + valor1).toFixed(2);

  console.info(
    `Un número aleatorio entre "${valor1}" y "${valor2}": ${resultado}.`
  );

  let respuesta = confirm("¿Randomizar de nuevo?");

  while (respuesta === true) {
    resultado = (Math.random() * (valor2 - valor1) + valor1).toFixed(2);

    console.info(
      `Otro aleatorio entre "${valor1}" y "${valor2}": ${resultado}.`
    );
    respuesta = confirm("¿Randomizar de nuevo?");
  }
};

/* aleatorioNumber(); */

//Ejercicio 10

const capicuaNumber = () => {
  const cadena = prompt("Introduce los números y te diré si son capicúa.");

  if (!cadena) return console.warn("No has introducido los números.");
  if (isNaN(cadena)) {
    return console.error(`El valor "${cadena}" no es un Número.`);
  }

  //Convierto la cadena a número para evaluar si es negativo
  const numero = parseFloat(cadena);
  if (Math.sign(numero) === -1)
    return console.error("No puedes introducir números negativos.");

  //Evaluo si el número empieza en 0
  if (cadena.charAt(0) == 0 && cadena.length !== 1)
    return console.error("El número no puede empezar con un cero.");

  //Doy vuelta los caracteres del prompt
  const capicua = cadena.split("").reverse().join("");

  //Devuelvo el resultado
  if (cadena.length === 1)
    return console.info(
      `Correcto, "${cadena}" es capicúa porque es un solo número.`
    );
  else if (cadena === capicua)
    return console.info(`Correcto, "${cadena}" es capicúa.`);
  else
    return console.warn(
      `Lo siento, "${cadena}" no es capicúa. Al revés: "${capicua}"`
    );
};

/* capicuaNumber(); */

//Ejercicio 11

const factorialNumber = () => {
  let cadena = prompt("Introduce el número y te diré su factorial.");

  if (!cadena) return console.warn("No has introducido los números.");
  if (isNaN(cadena)) {
    return console.error(`El valor "${cadena}" no es un Número.`);
  }

  //Convierto la cadena a número para evaluar si es negativo
  let numero = parseInt(cadena);
  if (Math.sign(numero) === -1) numero = Math.abs(numero);

  //0! = 1 por definición
  if (numero == 0) return console.info(`El factorial de "0" es: 1`);

  //Inicio un bucle para multiplicar desde 1 hasta número
  let resultado = 1;

  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  //Devuelvo el resultado
  console.info(`El factorial de "${cadena}" es: ${resultado}`);
};

/* factorialNumber(); */
