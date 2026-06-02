const formulario = document.getElementById("formBusqueda");

formulario.addEventListener("submit", function (event) { //en cuanto submit, la funcion event va a...
    event.preventDefault(); //Esto es para que no se recargue la pag
    const texto = document.getElementById("busqueda").value;
    console.log("Busqueda: ", texto);
});

const collapses = document.querySelectorAll(".collapse");

collapses.forEach(collapse => { //por cada collapse...

    const boton = document.querySelector(
        `[href="#${collapse.id}"]`
    );

    collapse.addEventListener("show.bs.collapse", function () { //aqui cuando la abre 
        boton.textContent = "Ocultar"; //en cuanto la abre cambia a "Ocultar"
    });

    collapse.addEventListener("hide.bs.collapse", function () { //aqui cuando la cierra
        boton.textContent = "Leer más";
    });

});
//Para cada sinopsis busca la clase collapse, cuando se abre la sinopsis el texto cambia a ocultar y cuando se cierra cambia a Leer más