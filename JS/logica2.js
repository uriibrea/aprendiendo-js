/* 5) Programa una función que invierta las palabras de una cadena de texto. Ej: miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo. Ej: miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro). Ej: mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado. Ej: miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

//Ejercicio 5

const invertirStrings = () => {
  let texto = prompt("Introduce el mensaje que quieras invertir.");

  if (!texto) return console.warn("No has introducido el mensaje.");

  let textoInvertido;

  textoInvertido = texto.split("");
  textoInvertido = textoInvertido.reverse();
  textoInvertido = textoInvertido.join("");

  console.info(`Tu mensaje "${texto}" se transformó a "${textoInvertido}".`);

  if (texto === textoInvertido)
    return console.info(
      `¡Caramba! parece que "${texto}" es un palíndromo. ¡Que curioso!`
    );
};

/* invertirStrings(); */

//Ejercicio 6

const stringsRepetidos = () => {
  let texto = prompt("Introduce el texto para que busque un mensaje."),
    palabra = prompt("¿Cuál es la palabra que quieres buscar?"),
    expresion = new RegExp("\\b" + palabra + "\\b", "gi");

  if (!texto) return console.warn("No has introducido texto.");

  if (!palabra)
    return console.warn("No has introducido ninguna palabra a buscar.");

  let coincidencias = texto.match(expresion);

  if (coincidencias === null)
    return console.warn(
      `El mensaje "${palabra}" no se encuentra en el texto indicado.`
    );

  if (coincidencias.length === 1)
    return console.info(`El mensaje "${palabra}" se repite 1 vez.`);

  console.info(
    `El mensaje "${palabra}" se repite "${coincidencias.length}" veces.`
  );
};

/* stringsRepetidos(); */

//Ejercicio 7

const palindromoStrings = () => {
  let texto = prompt("Introduce el mensaje y te diré si es un palíndromo.");

  if (!texto) return console.warn("No has introducido texto.");

  let palindromo;

  palindromo = texto.split("");
  palindromo = palindromo.reverse();
  palindromo = palindromo.join("");

  if (texto === palindromo)
    return console.info(`Correcto, "${texto}" es un palíndromo.`);

  if (texto !== palindromo);
  return console.warn(`Lo siento, "${texto}" no es un palíndromo.`);
};

/* palindromoStrings(); */

//Ejercicio 8

const eliminarStrings = () => {
  let texto = prompt("Introduce el texto."),
    patron = prompt("¿Cuál es el patrón que quieres eliminar?"),
    considerarMayusculas = prompt(
      "¿Te gustaría tener en cuenta las mayúsculas? S/N"
    ),
    expReg = new RegExp(patron, "g"),
    reemplazo = prompt(
      "¿Te gustaría reemplazar el patrón por un carácter en particular?"
    );

  if (!texto) return console.warn("No has introducido texto.");
  if (!patron)
    return console.warn("No has introducido ningún patrón a eliminar.");

  if (reemplazo === null) reemplazo = "";

  if (considerarMayusculas === "s" || considerarMayusculas === "si") {
    considerarMayusculas === considerarMayusculas.toLowerCase();
    console.info(texto.replace(expReg, reemplazo));
  } else if (considerarMayusculas === "n" || considerarMayusculas === "no") {
    considerarMayusculas === considerarMayusculas.toLowerCase();
    expReg = new RegExp(patron, "gi");
    console.info(texto.replace(expReg, reemplazo));
  } else {
    console.warn("Opción no válida para considerar las mayúsculas.");
  }
};

/* eliminarStrings(); */
