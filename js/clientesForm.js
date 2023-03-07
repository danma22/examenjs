
'use strict'

//Formulario para hacer pedidos 
var pedidos = document.getElementById('pedidos')

// Cuando se cargue la página se añade el evento para validar al formulario
document.addEventListener('DOMContentLoaded', function(){
    pedidos.addEventListener('submit', validarPedidos);

    // Evento para hacer que con el boton cancel se cierre el modal
    let btnPedir = this.getElementById('cancel');
    btnPedir.addEventListener('click', function(){
        $('#modalReject').modal('hide');
    });
});

//( Método para validar los campos del formulario)
function validarPedidos(e){
    e.preventDefault()
    // campos del formulario
    let name = document.getElementById('name');
    let desc = document.getElementById('desc');
    let precio = document.getElementById('precio');
    let fechaEst = document.getElementById('fechaEst');
    let img = document.getElementById('img');

    let validar = true
    // Condiciones para validar. En general que no este vacio
    if (name.value.length == 0){
        validar = false
    }

    if (desc.value.length == 0){
        validar = false
    }

    if (precio.value == 0 || precio.value == null){
        validar = false
    }

    if (fechaEst.value ==null){
        validar = false
    }

    if (img.value.length == 0){
        validar = false
    }

    // En caso de error se muestra uh modal
    if(!validar){
        $('#modalReject').modal('show');
        return
    }

    // En caso contrario se muestra otro modal con los datos de éxito
    $('#modalSuccess').modal('show');
	desc = '<p>Nombre del producto: ' + name.value + '</p>' + 
           '<p>Descripción: ' + desc.value + '</p>' + 
           '<p>Precio: ' + precio.value + '</p>' + 
           '<p>Fecha: ' + fechaEst.value + '</p>' +
           '<p>Imagen: ' + img.value + '</p>'
	document.getElementById("modalData").innerHTML = desc
}
