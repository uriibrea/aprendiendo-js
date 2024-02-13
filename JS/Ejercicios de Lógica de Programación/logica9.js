/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

//Ejercio 27

class Pelicula {
  constructor({
    IDIMDB,
    titulo,
    director,
    anioEstreno,
    origen,
    generos,
    calificacion,
  }) {
    this.IDIMDB = IDIMDB;
    this.titulo = titulo;
    this.director = director;
    this.anioEstreno = anioEstreno;
    this.origen = origen;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIDIMDB();
    this.validarTitulo();
    this.validarDirector();
    this.validarAnioEstreno();
    this.validarOrigen();
    this.validarGeneros();
    this.validarCalificacion();
  }

  //Variable estática

  static generosAceptados = [
    "Action",
    "Adult",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film Noir",
    "Game-Show",
    "History",
    "Horror",
    "Musical",
    "Music",
    "Mystery",
    "News",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Talk-Show",
    "Thriller",
    "War",
    "Western",
  ];

  //Método estático

  static devolverGenerosAceptados() {
    return console.info(
      `Los géneros aceptados son ${Pelicula.generosAceptados.join(", ")}.`
    );
  }

  //Métodos

  validarString(propiedad, valor) {
    if (typeof valor !== "string")
      return console.warn(
        `El valor "${valor}" de la propiedad "${propiedad}" no es una cadena de texto.`
      );

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `El valor "${valor}" de la propiedad "${propiedad}" excede el número de caracteres permitidos (${longitud}).`
      );

    return true;
  }

  validarNumber(propiedad, valor) {
    if (typeof valor !== "number")
      return console.warn(
        `El valor "${valor}" de la propiedad "${propiedad}" no es un número.`
      );

    return true;
  }

  validarArray(propiedad, valor) {
    if (!valor)
      return console.warn(
        `El arreglo de la propiedad "${propiedad}" no ha sido ingresado.`
      );

    if (!(valor instanceof Array))
      return console.error(
        `El valor "${valor}" de la propiedad "${propiedad}" no es un arreglo.`
      );

    if (valor.length === 0)
      return console.error(
        `El arreglo de la propiedad "${propiedad}" está vacío.`
      );

    for (const value of valor) {
      const expReg = /^[a-záéíóúüñ\s-]+$/gi;

      if (!expReg.test(value)) {
        return console.error(
          `El valor "${value}" de la propiedad "${propiedad}" no está compuesto por letras.`
        );
      }
    }

    return true;
  }

  //Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  validarIDIMDB() {
    if (this.validarString("IDIMDB", this.IDIMDB)) {
      if (/^[a-z]{2}\d{7}$/.test(this.IDIMDB) === false) {
        console.error(
          `El ID ${this.IDIMDB} no es válido. Asegurate de que tenga 9 caracteres, que los primeros 2 sean letras y que los 7 restantes sean números.`
        );
      }
    }
  }

  //Valida que el título no rebase los 100 caracteres.
  validarTitulo() {
    if (this.validarString("Título", this.titulo))
      this.validarLongitudCadena("Título", this.titulo, 100);
  }

  //Valida que el director no rebase los 50 caracteres.
  validarDirector() {
    if (this.validarString("Director", this.director))
      this.validarLongitudCadena("Director", this.director, 50);
  }

  //Valida que el año de estreno sea un número entero de 4 dígitos.
  validarAnioEstreno() {
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();

    this.validarNumber("Año de estreno", this.anioEstreno);

    if (!/^[0-9]{4}$/.test(this.anioEstreno))
      return console.error(
        `El año de estreno ${this.anioEstreno} no es válido. Asegurate de que sea un año entero de 4 dígitos.`
      );

    if (this.anioEstreno > anioActual) {
      return console.error(
        `El año de estreno ${this.anioEstreno} no es válido. Asegurate de que sea un año anterior al actual.`
      );
    }
  }

  //Valida que el país o países sea introducidos en forma de arreglo.
  validarOrigen() {
    this.validarArray("Origen", this.origen);
  }

  //Valida que los géneros sean introducidos en forma de arreglo.
  //Valida que los géneros introducidos esten dentro de los géneros aceptados*.
  //Crea un método estático que devuelva los géneros aceptados*.
  validarGeneros() {
    this.validarArray("Generos", this.generos);

    for (const genero of this.generos) {
      if (!Pelicula.generosAceptados.includes(genero)) {
        console.error(
          `El género "${genero}" no se encuentra en la lista de géneros aceptados.`
        );
        console.info(Pelicula.devolverGenerosAceptados());
      }
    }
  }

  //Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
  validarCalificacion() {
    if (this.validarNumber("Calificación", this.calificacion)) {
      if (!/^(10(\.0)?|[0-9](\.\d)?)$/.test(this.calificacion)) {
        return console.error(
          `La calificación "${this.calificacion}" no es válida. Asegurate de que sea un número entre 0 y 10 pudiendo ser decimal de una posición.`
        );
      }
    }
  }

  //Crea un método que devuelva toda la ficha técnica de la película.
  devolverFichaTecnica() {
    return console.info(
      `Ficha técnica\nTítulo: "${this.titulo}"\nDirector: "${
        this.director
      }"\nAño de estreno: "${this.anioEstreno}"\nPaís: "${this.origen.join(
        "-"
      )}"\nGéneros: "${this.generos.join(", ")}"\nCalificación: "${
        this.calificacion
      }"\nIMDB ID: "${this.IDIMDB}"`
    );
  }
}

//Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

const peliculasInfo = [
  {
    IDIMDB: "tt0137523",
    titulo: "Fight Club",
    director: "David Fincher",
    anioEstreno: 1999,
    origen: ["Estados Unidos", "Alemania"],
    generos: ["Comedy", "Thriller"],
    calificacion: 8.8,
  },
  {
    IDIMDB: "tt2543164",
    titulo: "Arrival",
    director: "Denis Villeneuve",
    anioEstreno: 2016,
    origen: ["Estados Unidos"],
    generos: ["Sci-Fi", "Drama", "Mystery"],
    calificacion: 7.9,
  },
  {
    IDIMDB: "tt0816692",
    titulo: "Interstellar",
    director: "Christopher Nolan",
    anioEstreno: 2014,
    origen: ["Estados Unidos", "Reino Unido", "Canadá"],
    generos: ["Sci-Fi", "Drama", "Adventure"],
    calificacion: 8.6,
  },
];

const peliculas = [];

peliculasInfo.forEach((peli) => {
  const nuevaPelicula = new Pelicula(peli);
  peliculas.push(nuevaPelicula);
});

const [fightClub, arrival, interstellar] = peliculas;