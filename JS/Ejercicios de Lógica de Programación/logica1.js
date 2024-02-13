//Ejercicios de Lógica de Progrmación 1

/* 1) Programa una función que cuente el número de caracteres de una cadena de texto.
Ej: miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de carácteres indicados. Ej: miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter. Ej: miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces. Ej: miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

//Ejercicio Número 1

let contarStrings = () => {
  let texto = prompt(
    "Introduce el texto al que le quieres contar los caracteres."
  );
  if (!texto) {
    console.log("El texto está vacío.");
  } else if (isNaN(texto) === false) {
    console.log("Has mandado números.");
  } else {
    console.log(texto.length);
  }
};

/* contarStrings(); */

//Ejercicio Número 2

let recortarStrings = () => {
  let texto = prompt("Introduce el texto que quieras recortar."),
    longitud = prompt(
      "Introduce el número de caracteres que quieres recortar (De izquierda a derecha)."
    );
  if (!texto) {
    console.log("El texto está vacío.");
  } else if (isNaN(longitud)) {
    console.log("La longitud a recortar debe ser en números");
  } else if (longitud === "" || longitud === null) {
    console.log("No has mandado la longitud a recortar.");
  } else {
    console.log(texto.slice(0, longitud));
  }
};

/* recortarStrings(); */

//Ejercicio Número 3

let separarStrings = () => {
  let texto = prompt(
      "Introduce texto y entre cada palabra pon un único carácter a elección que sirva de separador. Las palabras que tengan ese carácter a su lado se convertirán en posiciones de un array. Recuerda que los espacios en blanco también sos caracteres"
    ),
    separador = prompt("Introduce el carácter que usaste para separar.");
  if (!texto) {
    console.log("El texto está vacío.");
  } else if (!separador) {
    console.log("No ingresaste el carácter separador.");
  } else {
    console.log(texto.split(separador));
    console.log(
      "Si no ocurrió nada es porque no has introducido correctamente los datos."
    );
  }
};

/* separarStrings(); */

//Ejercicio Número 4

let repetirStrings = () => {
  let texto = prompt("Introduce el mensaje que quieras repetir."),
    repeticiones = prompt("¿Cuántas veces lo quieres repetir?");
  if (!texto) {
    console.log("El texto está vacío.");
  } else if (isNaN(repeticiones) || !repeticiones) {
    console.log(
      "Por favor, introduce el número de veces que quieres que se repita."
    );
  } else {
    console.log(texto.repeat(repeticiones));
  }
};

/* repetirStrings(); */

//Soluciones de @JonMircha y retoques propios:

//Ejercicio Número 1

function contarCaracteres() {
  let cadena = prompt("Introduce el texto.");
  if (!cadena) {
    console.warn("No ingresaste ninguna cadena.");
  } else {
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`);
  }
}

/* contarCaracteres(); */

//Con Operador Ternario (Le agregé prompt() y una condición más).

const contarCaracteres2 = () => {
  let cadena = prompt("Introduce el texto.");

  !cadena
    ? console.warn("No ingresaste ninguna cadena.")
    : cadena.length === 1
    ? console.info(`La cadena "${cadena}" tiene 1 carácter.`)
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`);
};

/* contarCaracteres2(); */

//Ejercicio Número 2 (Nuevamente agregué prompt() y condiciones).

const recortarCaracteres = () => {
  let cadena = prompt("Introduce el texto."),
    longitud = prompt(
      "Introduce el número de caracteres que quieres recortar (De izquierda a derecha)."
    );

  !cadena
    ? console.warn("No ingresaste ninguna cadena de texto.")
    : isNaN(longitud)
    ? console.warn("La longitud a recortar debe ser en números.")
    : !longitud
    ? console.warn("No has mandado la longitud a recortar.")
    : console.info(
        `La cadena "${cadena}" quedó reducida a "${cadena.slice(0, longitud)}".`
      );
};

/* recortarCaracteres(); */

//Ejercicio Número 3 (Nuevamente agregué promt() y condiciones).

const separarCaracteres = () => {
  let cadena = prompt(
      "Introduce texto y entre cada palabra pon un único carácter a elección que sirva de separador. Las palabras que tengan ese carácter a su lado se convertirán en posiciones de un array. Recuerda que los espacios en blanco también sos caracteres."
    ),
    separador = prompt("Introduce el carácter que usaste para separar.");

  !cadena
    ? console.warn("El texto está vacío.")
    : !separador
    ? console.warn("No ingresaste el carácter separador.")
    : console.info(cadena.split(separador));
};

/* separarCaracteres(); */

//Ejercicio Número 4 (Yo la hice con operador ternario nuevamente).

const repetirTexto = () => {
  let texto = prompt("Introduce el mensaje que quieras repetir."),
    repeticiones = prompt("¿Cuántas veces lo quieres repetir?");

  !texto
    ? console.warn("El texto está vacío.")
    : Math.sign(repeticiones) === -1
    ? console.error("El número de repeticiones no puede ser negativo.")
    : repeticiones == 0
    ? console.error("El número de veces no puede ser 0.")
    : isNaN(repeticiones) || !repeticiones
    ? console.warn(
        "Por favor, introduce el número de veces que quieres que se repita."
      )
    : (console.info(texto.repeat(repeticiones)),
      repeticiones !== !repeticiones &&
        console.info(`El mensaje se repitió ${repeticiones} veces.`));
};

repetirTexto();

//Versión de @JonMircha con if y return.

const repetirTexto2 = () => {
  let texto = prompt("Introduce el mensaje que quieras repetir."),
    repeticiones = prompt("¿Cuántas veces lo quieres repetir?");

  if (!texto) {
    return console.warn("No ingresaste texto");
  }

  if (!repeticiones) {
    return console.warn(
      "Por favor, introduce el número de veces que quieres que se repita."
    );
  }

  if (repeticiones == 0) {
    return console.error("El número de veces no puede ser 0.");
  }

  if (Math.sign(repeticiones) === -1) {
    return console.error("El número de repeticiones no puede ser negativo.");
  }

  for (let i = 1; i <= repeticiones; i++) console.info(`${texto} ${i}`);
};

/* repetirTexto2(); */
