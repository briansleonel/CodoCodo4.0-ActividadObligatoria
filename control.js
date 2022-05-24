let formulario = document.getElementById("formulario");

formulario.onsubmit = (e) => validarIngreso(e);

var usuario = document.getElementById("usuario");
var password = document.getElementById("password");

function validarIngreso(e) {
    if (usuario.value === "" && password.value === "") {
        e.preventDefault();
        alert("Debe ingresar su usuario y contraseña");
    } else if (!tieneArroba(usuario.value)) {
        e.preventDefault();
        alert("Su usuario debe incluir '@'");
    } else if(password.value === '') {
        e.preventDefault();
        alert("Debe ingresar su contraseña")
    }
}

function tieneArroba(usuario) {
    let expReg = /@/;
    return expReg.test(usuario);
}
