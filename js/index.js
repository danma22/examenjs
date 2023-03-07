
'use strict'

// Formulario del login
var login = document.getElementById('login')

// Una vez cargada la página se añade el evento submit al formulario
document.addEventListener('DOMContentLoaded', function(){
    login.addEventListener('submit', validarLogin);

    // Cuando se de clic en el boton cancel del modal, deja de mostrar el modal
    let btnPedir = this.getElementById('cancel');
    btnPedir.addEventListener('click', function(){
        $('#modalReject').modal('hide');
    });
});

// Función para validar la entrada de usuarios
function validarLogin(e){
    e.preventDefault()
    // Campos del formulario
    let user = document.getElementById('user')
    let pass = document.getElementById('pass')

    //Se quitan todos los elementos formatos de error 
    user.classList.remove('is-invalid')
    pass.classList.remove('is-invalid')

    let validar = true
    let sitioDondeIr = ''

    // Se validan los campos de usuario, que no este vacío
    if (user.value.length == 0){
        validar = false
        user.classList.add('is-invalid')
    }

    // Se valida si está vacio la parte de la contraseña
    if (pass.value.length == 0){
        validar = false
        pass.classList.add('is-invalid')
    }else{ 
        // Si no está vacia, se pregunta si los datos de usuario y contraseña coinciden para obtener la pagina hacia donde dirigirse
        if (user.value.length != 0){
            if (user.value == 'jperez' && pass.value == 'mipssw'){
                sitioDondeIr = 'clientes.html'
            }else if(user.value == 'vendedor' && pass.value == 'mipssw-vend'){
                sitioDondeIr = 'vendedor.html'
            }else{
                validar = false
                user.classList.add('is-invalid')
                pass.classList.add('is-invalid')
            }
        }
    }

    // Si hay campos incorrectos, se muestra un modal de error
    if(!validar){
        $('#modalReject').modal('show');
        return
    }

    // En caso de que si coincida, se muestra el sitio de acuerdo al usuario.
    window.location.href = sitioDondeIr
}
