const $usuario = $("#usuario");
const $password = $("#password");

const credenciales = [{
    usuario: "conductor",
    pass: "123456"
},
{
    usuario: "conductor2",
    pass: "234567"
},
{
    usuario: "usuario",
    pass: "345678"
}, 
{
    usuario: "usuario2",
    pass: "456789"
}];


$("#login").on("click", function() {
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    
    let usuarioEncontrado = false;

    for (let i = 0; i < credenciales.length; i++) {
        if (valueUsuario === credenciales[i].usuario) {
            usuarioEncontrado = true;
            if (valuePassword === credenciales[i].pass) {
                localStorage.setItem("sesion", JSON.stringify(credenciales[i]));
                let dashboardUrl;
                if (valueUsuario === "conductor") {
                    dashboardUrl = "dashboardcond.html";
                } else if (valueUsuario === "conductor2") {
                    dashboardUrl = "dashboardcond.html";
                } else if (valueUsuario === "usuario") {
                    dashboardUrl = "dashboardusu.html";
                } else if (valueUsuario === "usuario2"){
                    dashboardUrl = "dashboardusu.html";

                };

                if (dashboardUrl) {
                    location.href = dashboardUrl;
                } else {
                    Swal.fire({
                        title: "ERROR",
                        text: "No se pudo determinar la URL de dashboard",
                        icon: "error"
                    });
                }
            } else {
                Swal.fire({
                    title: "ERROR",
                    text: "Contraseña incorrecta",
                    icon: "error"
                });
            }
            break;
        }
    }

    if (!usuarioEncontrado) {
        Swal.fire({
            title: "ERROR",
            text: "Usuario no encontrado",
            icon: "error"
        });
    }
});