/* 15) Programa una función para convertir números de base binaria a decimal y viceversa. Ej: miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada. Ej: miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy. Ej: miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

//Ejercicio 15

const binarioDecimal = () => {
  let cadena = prompt(
    "Introduce el número en base 10 o 2 y haremos la conversión."
  );
  if (!cadena || isNaN(cadena))
    return console.warn(`No has introducido un número válido.`);

  let numero = parseInt(cadena);

  if (numero < 0) return console.error(`El número no puede ser negativo.`);

  let base = prompt("Introduce la base del número (2 o 10).");

  if (!base || (base !== "2" && base !== "10"))
    return console.error(`La base introducida no es válida.`);

  //Devuelvo el resultado
  if (base === "2") {
    const esBinario = isNaN(parseInt(numero, 2));
    if (esBinario === true)
      return console.error(`"${numero}" no es un número binario.`);

    const decimal = parseInt(numero, 2);
    return console.info(`${cadena} (binario) = ${decimal} (decimal)`);
  } else if (base === "10") {
    const binario = numero.toString(base);
    return console.info(`${cadena} (decimal) = ${binario} (binario)`);
  }
};

/* binarioDecimal(); */

//Ejercicio 16

const descuentoPrecio = () => {
  let cantidad = prompt("Introduce el precio.");

  if (!cantidad || isNaN(cantidad))
    return console.warn(`No has introducido un precio válido.`);

  if (cantidad <= 0)
    return console.error(`El precio no puede ser negativo ni 0.`);

  let porcentaje = prompt("Introduce el porcentaje de descuento.");

  if (!porcentaje || isNaN(porcentaje))
    return console.warn(`No has introducido un descuento válido.`);

  if (porcentaje < 0)
    return console.error(`El descuento no puede ser negativo.`);

  if (porcentaje == 0)
    return console.info(`Lo siento, parece que no tienes ningún descuento.`);

  let descuento = parseFloat(porcentaje);
  let precio = parseFloat(cantidad);
  const resultado = precio - (descuento / 100) * precio;

  if (resultado === 0)
    return console.info(`¡Felicidades, el producto es gratis!`);

  //Devuelvo el resultado
  console.info(
    `Con un descuento del ${porcentaje}%, el precio pasó de $${cantidad} a $${resultado}.`
  );
};

/* descuentoPrecio(); */

//Ejercicio 17

const tiempoTranscurrido = () => {
  alert(
    "A continuación deberás introducir una fecha y se calculará cuántos años han transcurrido desde la misma."
  );

  const dia = prompt("Introduce el día (1-31).");

  if (!dia || !(dia >= 1 && dia <= 31))
    return console.warn(`El día introducido no es válido.`);

  let mes = prompt("Introduce el mes (1-12).");

  if (!mes || !(mes >= 1 && mes <= 12))
    return console.warn(`El mes introducido no es válido.`);

  mes = mes - 1;

  const año = prompt("Introduce el año.");

  if (año == new Date().getFullYear())
    return console.warn("Has introducido el año actual.");

  if (!año || !(año >= 1 && año <= new Date().getFullYear()))
    return console.warn(`El año introducido no es válido.`);

  const fechaPasada = new Date(año, mes, dia);
  const fechaActual = new Date();

  const añosTranscurridos = Math.trunc(
    (fechaActual - fechaPasada) / 31555008000
  );

  console.info(
    `Han transcurrido ${añosTranscurridos} años desde el ${fechaPasada.getDate()}/${
      fechaPasada.getMonth() + 1
    }/${fechaPasada.getFullYear()}.`
  );
};

/* tiempoTranscurrido(); */
