let numeroRandom = 0;
function btnComenzar() {
  numeroRandom = Math.round(Math.random() * (10 - 1) + 1);
  console.log(numeroRandom);
  return numeroRandom;
}

function btnEnviar() {
  let valor = parseInt(document.getElementById("input").value);
  console.log(valor);
  console.log(numeroRandom);
  if (valor === numeroRandom) {
    alert("Adivinaste el número!");
  } else if (valor < numeroRandom) {
    alert("Tu número es menor");
  } else {
    alert("Tu número es mayor");
  }
}
