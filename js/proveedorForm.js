
'use strict'

//Formulario para agregar productos 
var productosForm = document.getElementById('productos')

// Cuando se cargue la página se añade el evento para validar al formulario
document.addEventListener('DOMContentLoaded', function(){
    productosForm.addEventListener('submit', validarPedidos);

    // Evento para hacer que con el boton cancel se cierre el modal
    let btnPedir = this.getElementById('cancel');
    btnPedir.addEventListener('click', function(){
        $('#modalReject').modal('hide');
    });
});


// Método para validar los campos del formulario
function validarPedidos(e){
    e.preventDefault()
    // campos del formulario
    let id = document.getElementById('id');
    let name = document.getElementById('name');
    let desc = document.getElementById('desc');
    let precio = document.getElementById('precio');
    let fechaCap = document.getElementById('fechaCap');
    let notas = document.getElementById('notas');

    let validar = true

    // Condiciones para validar. En general que no este vacio
    if (id.value.length == 0){
        validar = false
    }

    if (name.value.length == 0){
        validar = false
    }

    if (desc.value.length == 0){
        validar = false
    }

    if (precio.value == 0 || precio.value == null){
        validar = false
    }

    if (fechaCap.value ==null){
        validar = false
    }

    if (notas.value.length == 0){
        validar = false
    }

    // En caso de error se muestra uh modal
    if(!validar){
        $('#modalReject').modal('show');
        return
    }

    // En caso contrario se muestra otro modal con los datos de éxito
    $('#modalSuccess').modal('show');
	desc = '<p>ID del producto: ' + id.value + '</p>' + 
           '<p>Nombre del producto: ' + name.value + '</p>' + 
           '<p>Descripción: ' + desc.value + '</p>' + 
           '<p>Precio: ' + precio.value + '</p>' + 
           '<p>Fecha de captura: ' + fechaCap.value + '</p>' +
           '<p>Notas: ' + notas.value + '</p>'
	document.getElementById("modalData").innerHTML = desc
}
