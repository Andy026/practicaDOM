class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }
  //metodos
  mostrarGeneracion() {
    if (this.anioNacimiento > 1930 && this.anioNacimiento < 1948) {
      return alert(`Perteneces a la Generación Silenciosa.
                        <br>Tu rasgo caracteristico es la austeridad.`);
    } else if (this.anioNacimiento > 1949 && this.anioNacimiento < 1968) {
      return alert(`Perteneces a la Generación Baby Boom.
                        <br>Tu rasgo caracteristico es la ambición.`);
    } else if (this.anioNacimiento > 1969 && this.anioNacimiento < 1980) {
      return alert(`Perteneces a la Generación X.
                        <br>Tu rasgo caracteristico es la obsesión por el éxito.`);
    } else if (this.anioNacimiento > 1981 && this.anioNacimiento < 1993) {
      return alert(`Perteneces a la Generación Y (Millennials).
                        <br>Tu rasgo caracteristico es la frustración.`);
    } else if (this.anioNacimiento > 1994 && this.anioNacimiento < 2010) {
      return alert(`Perteneces a la Generación Z
                        <br>Tu rasgo caracteristico es la irreverencia.`);
    }
  }

  esMayordeEdad() {
    if (this.edad >= 18) return alert("Eres mayor de edad.");
  }

  mostrarDatos(input) {
    console.log(input.value);
    alert(`
        Nombre: ${this.nombre}
        <br>Edad: ${this.edad}
        <br>DNI: ${this.dni}
        <br>Sexo: ${this.sexo}
        <br>Peso: ${this.peso}
        <br>Altura: ${this.altura}
        <br>Año de Nacimiento: ${this.anioNacimiento}
        <br>`);
  }
}

function validarCampoRequerido(input) {
  //console.log(input)
  console.log(input.value);
  if (input.value.trim().length > 0 && input.value.trim().length >= 3) {
    console.log("el dato es correcto");
    input.className = "form-control is-valid";
  } else {
    console.log("el dato es erroneo");
    input.className = "form-control is-invalid";
  }
}

function validarNumeros(input) {
  console.log(input.value);
  //validar con expresiones regulares
  let patron = /^[0-9]{1,8}$/;
  if (patron.test(input.value)) {
    input.className = "form-control is-valid";
  } else {
    input.className = "form-control is-invalid";
  }
}

let nombre = document.querySelector("#nombre");
let edad = document.querySelector("#edad");
let dni = document.querySelector("#dni");
let sexo = document.querySelector("#sexo");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let anioNacimiento = document.querySelector("#anioNacimiento");
let mayordeEdad = document.querySelector('#mayordeEdad');
let mostrarGen = document.querySelector('#mostrarGen');

mostrarGen.addEventListener('submit', () => {mostrarGeneracion});
mayordeEdad.addEventListener('submit', () => {esMayordeEdad});

nombre.addEventListener("blur", () => {
  validarCampoRequerido(nombre);
});
edad.addEventListener("blur", () => {
  validarNumeros(edad);
});
dni.addEventListener("blur", () => {
  validarNumeros(dni);
});
sexo.addEventListener("blur", () => {
  validarCampoRequerido(sexo);
});
peso.addEventListener("blur", () => {
  validarNumeros(peso);
});
altura.addEventListener("blur", () => {
  validarNumeros(altura);
});
anioNacimiento.addEventListener("blur", () => {
  validarNumeros(anioNacimiento);
});