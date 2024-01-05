/* 5) Programa una función que invierta las palabras de una cadena de texto. Ej: miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo. Ej: miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro). Ej: mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado. Ej: miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

//Ejercicio 5 (Con cambios después de ver el video).

const invertirStrings = () => {
  const texto = prompt("Introduce el mensaje que quieras invertir.");

  if (!texto) return console.warn("No has introducido el mensaje.");

  const textoInvertido = texto.split("").reverse().join("");

  console.info(`Tu mensaje "${texto}" se transformó a "${textoInvertido}".`);

  if (texto === textoInvertido)
    return console.info(
      `¡Caramba! parece que "${texto}" es un palíndromo. ¡Que curioso!`
    );
};

/* invertirStrings(); */

//Ejercicio 6 (Con cambios después de ver el video).

const stringsRepetidos = () => {
  const texto = prompt("Introduce el texto para que busque un mensaje."),
    palabra = prompt("¿Cuál es la palabra que quieres buscar?"),
    expresion = new RegExp("\\b" + palabra + "\\b", "gi");

  if (!texto) return console.warn("No has introducido texto.");
  if (!palabra)
    return console.warn("No has introducido ninguna palabra a buscar.");

  const coincidencias = texto.match(expresion);

  if (coincidencias === null)
    return console.info(`El mensaje "${palabra}" no se encuentra en el texto.`);
  else if (coincidencias.length === 1)
    return console.info(`El mensaje "${palabra}" se repite 1 vez.`);
  else
    return console.info(
      `El mensaje "${palabra}" se repite ${coincidencias.length} veces.`
    );
};

/* stringsRepetidos(); */

//Ejercicio 7 (Con cambios después de ver el video).

const palindromoStrings = () => {
  const texto = prompt("Introduce el mensaje y te diré si es un palíndromo.");

  if (!texto) return console.warn("No has introducido texto.");

  //Paso el prompt a minúscula
  const textoNormalizado = texto.toLowerCase();
  //Doy vuelta los caracteres del prompt
  const palindromo = texto.split("").reverse().join("");
  const noNormalizado = textoNormalizado.split("").reverse().join("");

  //Variables booleanas
  const esUnicoCaracter = texto.length === 1;
  const esPalindromo = textoNormalizado === palindromo;

  //Devuelvo el resultado
  if (esUnicoCaracter)
    return console.info(
      `Correcto, "${texto}" es un palíndromo porque tiene un solo carácter.`
    );
  else if (esPalindromo)
    return console.info(`Correcto, "${texto}" es un palíndromo.`);
  else
    return console.warn(
      `Lo siento, "${texto}" no es un palíndromo. Mensaje al revés: "${noNormalizado}"`
    );
};

/* palindromoStrings(); */

//Ejercicio 8 (Con cambios después de ver el video).

const eliminarStrings = () => {
  //Variables constantes
  const texto = prompt("Introduce el texto.");
  if (!texto) {
    return console.warn("No has introducido texto.");
  }

  const patron = prompt("¿Cuál es el patrón que quieres eliminar?");
  if (!patron) {
    return console.warn("No has introducido ningún patrón a eliminar.");
  }

  const deboConsiderarMayusculas = prompt(
    "¿Te gustaría tener en cuenta las mayúsculas? S/N"
  );
  if (deboConsiderarMayusculas === null)
    return console.warn("Opción no válida para considerar las mayúsculas.");

  const mayusNormalizado = deboConsiderarMayusculas.toLowerCase();

  //Variables modificables
  let reemplazo = prompt(
    "¿Te gustaría reemplazar el patrón por un carácter en particular?"
  );
  if (reemplazo === null) reemplazo = "";

  //Devuelvo el resultado

  let expReg = new RegExp(
    patron,
    mayusNormalizado === "s" || mayusNormalizado === "si" ? "gi" : "g"
  );
  const resultado = texto.replace(expReg, reemplazo);
  texto !== resultado
    ? console.info(`El resultado final es el siguiente: "${resultado}"`)
    : console.warn("No se encontraron coincidencias para eliminar.");
};

/* eliminarStrings(); */

//Ejercicios versión @JonMircha (retoques propios).
//El ejercicio 8 no tiene nada a destacar.

//Ejercicio 5

const invertirCadena = () => {
  const texto = prompt("Introduce el mensaje que quieras invertir.");

  if (!texto) return console.warn("No has introducido el mensaje.");

  //Desubrí que puedo poner varios métodos en una misma linea (era bastante obvio). De esta forma simplifiqué mi código. Además declaré mi variable en la misma linea y no arriba.
  const textoInvertido = texto.split("").reverse().join("");

  console.info(`Tu mensaje "${texto}" se transformó a "${textoInvertido}".`);

  if (texto === textoInvertido)
    return console.info(
      `¡Caramba! parece que "${texto}" es un palíndromo. ¡Que curioso!`
    );
};

/* invertirCadena(); */

//Ejercicio 6

const textoRepetido = () => {
  const texto = prompt("Introduce el texto para que busque un mensaje."),
    palabra = prompt("¿Cuál es la palabra que quieres buscar?");

  if (!texto) return console.warn("No has introducido texto.");
  if (!palabra)
    return console.warn("No has introducido ninguna palabra a buscar.");

  const i = 0,
    contador = 0;

  while (i !== -1) {
    i = texto.indexOf(palabra, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }

  if (contador === 0)
    return console.info(`El mensaje "${palabra}" no se encuentra en el texto.`);
  else if (contador === 1)
    return console.info(`El mensaje "${palabra}" se repite 1 vez.`);
  else
    return console.info(`El mensaje "${palabra}" se repite ${contador} veces.`);
};

/* textoRepetido(); */

//Ejercicio 7

const palindromo = () => {
  const texto = prompt("Introduce el mensaje y te diré si es un palíndromo.");

  if (!texto) return console.warn("No has introducido texto.");

  const textoNormalizado = texto.toLowerCase();
  const palindromo = textoNormalizado.split("").reverse().join("");
  const noNormalizado = texto.split("").reverse().join("");

  texto.length === 1
    ? console.info(
        `Correcto, "${texto}" es un palíndromo porque tiene un solo carácter.`
      )
    : textoNormalizado === palindromo
    ? console.info(`Correcto, "${texto}" es un palíndromo.`)
    : console.warn(
        `Lo siento, "${texto}" no es un palíndromo. Mensaje al revés: "${noNormalizado}"`
      );
};

/* palindromo(); */
