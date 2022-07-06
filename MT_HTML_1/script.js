let nombre, correo, mensaje;

let form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
e.preventDefault()
LeerDatos()
})

function LeerDatos() {
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.querySelector('textarea').value
    ValidarData (nombre,correo,mensaje)
    GuardarLocalStorage(nombre,correo,mensaje)
}

function ValidarData(nombre,correo,mensaje){
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){
        swal("Error pendeje!", "Ooops sape!", "error")
    }
}

function GuardarLocalStorage(nombre,correo,mensaje) {
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Correo',correo)
    localStorage.setItem('Mensaje',mensaje)
    ListarData()
}

function ListarData() {
    let nombreUs = localStorage.getItem('Nombre');
    let correoUs = localStorage.getItem('Correo');
    let mensajeUs = localStorage.getItem('Mensaje')
}
