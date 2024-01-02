function suma(a, b) {
  console.log(a + b);
}

suma(4, 8);

//Usando prototipos

function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}
Animal.prototype.saludar = function () {
  console.log(`Hola, mi nombre es ${this.nombre}.`);
};
Animal.prototype.sonar = () => console.log("Hago sonidos porque estoy vivo.");

function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

Perro.prototype.sonar = () => console.log("Soy un perro y ladro.");
Perro.prototype.ladrar = function () {
  console.log("Guauuu Guauuu Guauuu!!!");
};

function Conejo(nombre, genero, alimento) {
  this.super = Animal;
  this.super(nombre, genero);
  this.alimento = alimento;
}

Conejo.prototype = new Animal();
Conejo.prototype.constructor = Conejo;

Conejo.prototype.sonar = () => console.log("Soy un conejo y ronroneo.");
Conejo.prototype.ronronear = () => console.log("Prrrrrrrr!!!");

const snoopy = new Perro("Snoopy", "Macho", "Mediano");
const lolaBunny = new Conejo("Lola Bunny", "Hembra", "Zanahoria");

console.log(snoopy);
snoopy.saludar();
snoopy.sonar();
snoopy.ladrar();
console.log(lolaBunny);
lolaBunny.saludar();
lolaBunny.sonar();
lolaBunny.ronronear();

//Usando Clases

/* class Animal2 {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}.`);
  }
  sonar() {
    console.log("Hago sonidos porque estoy vivo.");
  }
}

class Perro2 extends Animal2 {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
  }
  sonar() {
    console.log("Soy un perro y ladro.");
  }
  ladrar() {
    console.log("Guauuu Guauuu Guauuu!!!");
  }
}

class Conejo2 extends Animal2 {
  constructor(nombre, genero, alimento) {
    super(nombre, genero);
    this.alimento = alimento;
  }
  sonar() {
    console.log("Soy un conejo y ronroneo.");
  }
  ronronear() {
    console.log("Prrrrrrrr!!!");
  }
}

const snoopy2 = new Perro2("Snoopy", "Macho", "Mediano"),
  lolaBunny2 = new Conejo2("Lola Bunny", "Hembra", "Zanahoria");

console.log(snoopy2);
snoopy2.saludar();
snoopy2.sonar();
snoopy2.ladrar();

console.log(lolaBunny2);
lolaBunny2.saludar();
lolaBunny2.sonar();
lolaBunny2.ronronear(); */

//Objeto Console

let nombre = "Uriel";
apellido = "Brea";
edad = 20;

console.log(console);

console.error("Error");

console.warn("Advertencia");

console.info("Información");

console.log("Registro de lo sucedido en nuestra aplicación");

console.log(`Mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`); //Variante 1
console.log(`Mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad); //Variante 2

console.clear("Esto limpia la consola");

console.log(window);
//Manda a la consola el objeto window, que es el objeto global que representa la ventana del navegador.
console.log(document);
//Manda a la consola el objeto document que representa el documento HTML.

console.dir(window);
console.dir(document);
//El método dir manda a la consola una representación en forma de objeto del elemento para así poder ver sus atributos.

console.group("Colores"); //Lista abierta
console.log("Azul");
console.log("Rojo");
console.log("Amarillo");
console.log("Verde");
console.groupEnd();

console.groupCollapsed("Colores"); //Lista cerrada
console.log("Azul");
console.log("Rojo");
console.log("Amarillo");
console.log("Verde");
console.groupEnd();

const numeros = [1, 2, 3, 4, 5],
  vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const animal = {
  tipo: "Perro",
  raza: "Bulldog",
  color: "Marrón",
};

console.table(animal);

console.table(Object.entries(console).sort());

console.time(`Cuanto tiempo tarda mi código`);
//Esto indica el comienzo del bloque de código que se va a cronometrar. El contenido de la función debe ser el mismo entre "time" y "timeEnd" para lograr el enlace entre ambos.

/*const arreglo = Array(10000000);

for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}

console.log(arreglo); lo comento porque explota mi pc :')*/

//Cuanto tiempo tarda mi código: 2490.699951171875 ms.

console.timeEnd(`Cuanto tiempo tarda mi código`);
//Esto indica el final del bloque de código que se va a cronometrar. El contenido de la función debe ser el mismo entre "time" y "timeEnd" para lograr el enlace entre ambos.

for (let i = 0; i < 100; i++) {
  console.count("Ejecución número");
  console.log(i);
}
//El método count muestra el número de ejecuciónes del bloque de código.

let x = 2,
  y = 2,
  pruebaXY = "Se espera que X siempre sea menor a Y";

console.assert(y > x, { x, y, pruebaXY });
//Solo se ejecuta si la prueba falla. Dentro de la función ponemos:(condicion{variables})

console.clear();

//Objeto Date

console.log(Date());

//Nota: No podría usar los métodos de la función Date sin crear una nueva instancia de la misma, porque de esa forma no existiría el objeto Date.

console.log(new Date().getMonth());
//Esto es válido, pero lo ideal es hacer lo siguiente:

let fecha = new Date();
//Guardamos una nueva instancia de la función constructora Date en una variable.

console.log(fecha.getMonth());
//Ahora podemos utilizarla de la misma forma que new Date(), pero esto la hace más prolija y legible.

console.log(fecha.getFullYear());
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCDay());
console.log(fecha.getUTCHours());
console.log(Date.now());

let cumpleUri = new Date(2003, 6, 17);
console.log(cumpleUri);

console.clear();

//Objeto Math

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-8)); //El módulo.
console.log(Math.ceil(Math.PI)); //Redondea para arriba.
console.log(Math.floor(Math.PI)); //Redondea para abajo.
console.log(Math.round(7.8));
console.log(Math.round(7.4));
//Redondea al número inmediato.
console.log(Math.sqrt(81)); //Raíz cuadrada.
console.log(Math.pow(2, 6)); //Potenciar (base, exponente)
console.log(Math.sign(-5)); //Nos dice si es negativo, positivo o cero. (-1 - 0 - 1)
console.log(Math.random()); //Número aleatorio ente 0 y 1.
console.log(Math.random() * 100); //Esto arroja un número aleatorio entre 0 y 100.
console.log(Math.round(Math.random() * 100)); //De esta forma podemos redondearlo.

console.clear();

//Operador de circuitos

const saludar = (nombre) => {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
};

saludar();
saludar("Uri");

//Cortocircuito OR - cuando el valor de la izquierda sea truthy se cargara ese, de lo contrario se cargara el otro.
console.log(1 || "Valor de la derecha");
console.log(0 || "Valor de la derecha");
//Cortocircuito AND - cuando el valor de la izquierda sea falsy se cargara ese, de lo contrario se cargara el otro.
console.log(null && "Valor de la derecha");
console.log(-15 && "Valor de la derecha");

console.clear();

//Alert, Confirm y Prompt

/* console.log(window);
//Las siguientes funciones están en el objeto global window:

alert("Esto es una alerta.");
confirm("Esto es una confirmación.");
prompt("Esto permite que el usuario ingrese un valor.");

let alerta = alert("Esto es una alerta."),
  confirmacion = confirm("Esto es una confirmación."),
  aviso = prompt("Esto permite que el usuario ingrese un valor.");

console.log(alerta);
console.log(confirmacion);
console.log(aviso); */

//Expresiones Regulares
