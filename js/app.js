function cambiarTitulo() {
  //traer un elemento del html
  //let tituloh1 = document.querySelector('#titulo')
  let tituloh1 = document.getElementById("titulo");
  console.log(tituloh1.innerHTML);
  tituloh1.innerHTML = "Un nuevo titulo.";
  tituloh1.className = "display-2 text-danger";
}

function verMas() {
  //buscar el botón
  let btnVerMas = document.getElementById("btnVerMas");
  // crear y agregar un elemento al DOM
  // paso 1: Buscar el elemento padre
  let articulos = document.getElementsByTagName("article");
  console.log(articulos[1]);
  if (btnVerMas.innerHTML === "Ver mas...") {
    btnVerMas.innerHTML = "Ocultar";
    btnVerMas.className = "btn btn-outline-danger";
    // paso 2: Crear el elemento hijo
    let parrafo = document.createElement("p");
    parrafo.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure veniam velit beatae cupiditate, vel nostrum temporibus nobis, repellendus numquam, veritatis maxime eius alias laborum unde mollitia corporis enim tempore illo perspiciatis voluptatem delectus. Labore aliquam quibusdam iste quod reprehenderit asperiores velit consectetur soluta obcaecati necessitatibus eveniet, ab odio alias laboriosam beatae illo numquam, repellendus ipsa, tempore ipsum doloremque assumenda ducimus maxime molestias! Beatae sunt odio provident repellendus, commodi assumenda rem ullam illum facere quidem esse recusandae aperiam accusantium cupiditate nisi exercitationem hic tempore laboriosam pariatur obcaecati ipsum. Deserunt, voluptatum enim? Impedit, magni molestiae. Necessitatibus amet recusandae quidem ipsam? Nihil!";
    parrafo.className = "lead";
    // paso 3: Agregar el nuevo elemento hijo en su padre
    articulos[1].appendChild(parrafo);
  }else{
      console.log('ahora cambiar el texto del botón por ver mas...');
    //Volver el boton a su estado original "ver mas..."
    btnVerMas.innerHTML = 'Ver mas...'
    btnVerMas.className = 'btn btn-outline-primary';
    console.log(articulos[1].hasChildNodes()); //hasChildNodes pregunta si el nodo padre tiene hijos. La respuesta es true o false.
    console.log(articulos[1].children.length)
    //Eliminar el nodo hijo (parrafo)
    if(articulos[1].hasChildNodes() && articulos[1].children.length >2){
        //eliminar el parrafo
        articulos[1].removeChild(articulos[1].children[2])
    }
    }

}
