/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes. Ej: miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido. Ej: miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido. Ej: miFuncion("jonmircha@gmail.com") devolverá verdadero. */

//Ejercicio 18

const vocalesConsonantes = () => {
  const cadena = prompt("Introduce el texto.");

  if (!cadena) return console.warn(`No has introducido texto.`);

  if (!isNaN(cadena)) return console.warn(`Has introducido solo números.`);

  const vocales = /[aeiouáéíóúü]/gi;
  const consonantes = /[b-df-hj-np-tv-z-ñ]/gi;

  const matchVocales = cadena.match(vocales);
  const cantidadVocales = matchVocales ? matchVocales.length : 0;

  const matchConsonantes = cadena.match(consonantes);
  const cantidadConsonantes = matchConsonantes ? matchConsonantes.length : 0;

  if (cantidadConsonantes === 0 && cantidadVocales === 0)
    return console.error(`Tu texto no tiene consonantes ni vocales.`);

  if (cantidadVocales === 0)
    return console.info(
      `Al parecer tu texto no tiene vocales, pero tiene ${cantidadConsonantes} consonante/s.`
    );

  if (cantidadConsonantes === 0)
    return console.info(
      `Al parecer tu texto no tiene consonantes, pero tiene ${cantidadVocales} vocale/s.`
    );

  console.info(
    `Tu texto tiene ${cantidadVocales} vocal/es y ${cantidadConsonantes} consonante/s.`
  );
};

/* vocalesConsonantes(); */

//Ejercicio 19

const validarNombre = () => {
  const nombre = prompt("Introduce tu nombre.");

  if (!nombre) return console.warn(`No has introducido ningún nombre.`);

  const validarNombre =
    /^[A-ZÑÁÉÍÓÚÜ][a-zñáéíóúü]+(\s+[A-ZÑÁÉÍÓÚÜ][a-zñáéíóúü]+)*$/i;

  const nombreVerdadero = validarNombre.test(nombre);

  return nombreVerdadero
    ? console.info(`Nombre registrado correctamente.`)
    : console.warn(
        `El nombre/nombres introducidos no son válidos. Deben comenzar con mayúscula y solo pueden contener letras.`
      );
};

/* validarNombre(); */

//Ejercicio 20

const validarEmail = () => {
  const email = prompt("Introduce tu email.");

  if (!email) return console.warn(`No has introducido ningún email.`);

  const validarEmail = /^[a-z0-9._-]+@[a-z0-9-]+(\.[a-z]{2,15})+$/i;

  const emailVerdadero = validarEmail.test(email);

  return emailVerdadero
    ? console.info(`Email registrado correctamente.`)
    : console.warn(`El email introducido no es válido.`);
};

/* validarEmail(); */
