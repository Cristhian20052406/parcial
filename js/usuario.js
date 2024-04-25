const viajes = [
    {
      "duracion": "4 horas",
      "fecha": "2024-05-10",
      "origen": "Arequipa",
      "destino": "Puno",
      "conductor": {
        "nombre": "Juan Pérez"
      },
      "monto": 400.00
    },
    {
      "duracion": "3 horas",
      "fecha": "2024-05-15",
      "origen": "Trujillo",
      "destino": "Chiclayo",
      "conductor": {
        "nombre": "María Rojas"
      },
      "monto": 700.00
    },
    {
      "duracion": "6 horas",
      "fecha": "2024-05-20",
      "origen": "Iquitos",
      "destino": "Tarapoto",
      "conductor": {
        "nombre": "Juan Pérez"
      },
      "monto": 800.00

    },
    {
      "duracion": "5 horas",
      "fecha": "2024-06-02",
      "origen": "Cusco",
      "destino": "Arequipa",
      "conductor": {
        "nombre": "María Rojas"
      },
      "monto": 900.00

    },
    {
      "duracion": "2.5 horas",
      "fecha": "2024-06-05",
      "origen": "Lima",
      "destino": "Ica",
      "conductor": {
        "nombre": "Juan Pérez"
      },
      "monto": 1000.00

    },
    {
      "duracion": "4.5 horas",
      "fecha": "2024-06-12",
      "origen": "Piura",
      "destino": "Chiclayo",
      "conductor": {
        "nombre": "María Rojas"
      },
      "monto": 400.00

    },
    {
      "duracion": "7 horas",
      "fecha": "2024-06-18",
      "origen": "Tacna",
      "destino": "Arequipa",
      "conductor": {
        "nombre": "Juan Pérez"
      },
      "monto": 300.00

    },
    {
      "duracion": "3.5 horas",
      "fecha": "2024-06-25",
      "origen": "Huancayo",
      "destino": "Ayacucho",
      "conductor": {
        "nombre": "María Rojas"
      },
      "monto": 800.00

    },
    {
      "duracion": "2 horas",
      "fecha": "2024-07-01",
      "origen": "Chiclayo",
      "destino": "Trujillo",
      "conductor": {
        "nombre": "Juan Pérez"
      },
      "monto": 900.00

    },
    {
      "duracion": "4 horas",
      "fecha": "2024-07-10",
      "origen": "Lima",
      "destino": "Huaraz",
      "conductor": {
        "nombre": "María Rojas"
      },
      "monto": 350.00

    }
  ];

const viajes2 = [
    {
      "duracion": "4.5 horas",
      "fecha": "2024-08-01",
      "origen": "Chiclayo",
      "destino": "Piura",
      "conductor": {
        "nombre": "Juan Pérez"
      },
      "monto": 400.00

    },
    {
      "duracion": "3 horas",
      "fecha": "2024-08-05",
      "origen": "Tacna",
      "destino": "Moquegua",
      "conductor": {
        "nombre": "María Rojas"
      },
      "monto": 300.00

    },
    {
      "duracion": "6.5 horas",
      "fecha": "2024-08-10",
      "origen": "Iquitos",
      "destino": "Loreto",
      "conductor": {
        "nombre": "Juan Pérez"
      },
      "monto": 700.00

    },
    {
      "duracion": "5 horas",
      "fecha": "2024-08-15",
      "origen": "Trujillo",
      "destino": "Cajamarca",
      "conductor": {
        "nombre": "María Rojas"
      },
      "monto": 900.00
    },
    {
      "duracion": "2.5 horas",
      "fecha": "2024-08-20",
      "origen": "Arequipa",
      "destino": "Moquegua",
      "conductor": {
        "nombre": "Juan Pérez"
      },
      "monto": 400.00
    },
    {
      "duracion": "4 horas",
      "fecha": "2024-08-25",
      "origen": "Cusco",
      "destino": "Puerto Maldonado",
      "conductor": {
        "nombre": "María Rojas"
      },
      "monto": 450.00

    },
    {
      "duracion": "7 horas",
      "fecha": "2024-09-01",
      "origen": "Lima",
      "destino": "Chimbote",
      "conductor": {
        "nombre": "Juan Pérez"
      },
      "monto": 800.00

    },
    {
      "duracion": "3.5 horas",
      "fecha": "2024-09-05",
      "origen": "Piura",
      "destino": "Tumbes",
      "conductor": {
        "nombre": "María Rojas"
      },
      "monto": 600.00
    },
    {
      "duracion": "2 horas",
      "fecha": "2024-09-10",
      "origen": "Huaraz",
      "destino": "Ancash",
      "conductor": {
        "nombre": "Juan Pérez"
      },
      "monto": 900.00
    },
    {
      "duracion": "4.5 horas",
      "fecha": "2024-09-15",
      "origen": "Ica",
      "destino": "Nasca",
      "conductor": {
        "nombre": "María Rojas"
      },
      "monto": 500.00

    }
  ];



const datosUsuarios = [
  {
      "nombre": "Cristhian",
      "apellido": "Paquirachin",
      "telefono": "+51 917020769",
  },
  {
      "nombre": "Camila",
      "apellido": "Artica",
      "telefono": "+51 987654321"
  }
];


document.addEventListener("DOMContentLoaded", function() {
    const sesion = localStorage.getItem("sesion");
    if (sesion) {
        const usuario = JSON.parse(sesion);

        const usuarioInfoContainer = document.getElementById("usuario-info");
        let userData;

        // Obtener los datos del usuario según el tipo de usuario
        if (usuario.usuario === "usuario") {
            userData = datosUsuarios.find(user => user.nombre === "Cristhian");
        } else if (usuario.usuario === "usuario2") {
            userData = datosUsuarios.find(user => user.nombre === "Camila");
        }

        if (userData) {
            const usuarioInfoHTML = `
                <div class="col s12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Información del Usuario</span>
                            <p><strong>Usuario:</strong> ${usuario.usuario}</p>
                            <p><strong>Password (Fines Educativos jeje):</strong> ${usuario.pass}</p>
                            <p><strong>Nombre:</strong> ${userData.nombre}</p>
                            <p><strong>Apellido:</strong> ${userData.apellido}</p>
                            <p><strong>Teléfono:</strong> ${userData.telefono}</p>
                        </div>
                    </div>
                </div>
            `;
            usuarioInfoContainer.innerHTML = usuarioInfoHTML;

            if (usuario.usuario === "usuario" || usuario.usuario === "usuario2") {
                const viajesMostrar = usuario.usuario === "usuario" ? viajes : viajes2;

                const viajesContainer = document.getElementById("viajes-container");

                const ultimosViajes = viajesMostrar.slice(-4);

                ultimosViajes.forEach(viaje => {
                    const viajeHTML = `
                        <div class="col s12 m6">
                            <div class="card blue-grey darken-1">
                                <div class="card-content white-text">
                                    <span class="card-title">${viaje.origen} - ${viaje.destino}</span>
                                    <p><strong>Fecha:</strong> ${viaje.fecha}</p>
                                    <p><strong>Duración:</strong> ${viaje.duracion}</p>
                                    <p><strong>Conductor:</strong> ${viaje.conductor.nombre}</p>
                                </div>
                            </div>
                        </div>
                    `;
                    viajesContainer.innerHTML += viajeHTML;
                });

                const verMasButton = `
                    <div class="col s12">
                        <button class="btn" id="ver-mas-btn">Ver más</button>
                    </div>
                `;
                viajesContainer.innerHTML += verMasButton;

                const verMasBtn = document.getElementById("ver-mas-btn");
                verMasBtn.addEventListener("click", function() {
                    viajesContainer.innerHTML = ""; // Limpiar contenido previo
                    viajesMostrar.forEach(viaje => {
                        const viajeHTML = `
                            <div class="col s12 m6">
                                <div class="card blue-grey darken-1">
                                    <div class="card-content white-text">
                                        <span class="card-title">${viaje.origen} - ${viaje.destino}</span>
                                        <p><strong>Fecha:</strong> ${viaje.fecha}</p>
                                        <p><strong>Duración:</strong> ${viaje.duracion}</p>
                                        <p><strong>Conductor:</strong> ${viaje.conductor.nombre}</p>
                                    </div>
                                </div>
                            </div>
                        `;
                        viajesContainer.innerHTML += viajeHTML;
                    });
                });
            }
        } else {
            console.error("No se encontraron datos del usuario.");
        }
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const sesion = localStorage.getItem("sesion");
    if (sesion) {
        const usuario = JSON.parse(sesion);

        const conductorInfoContainer = document.getElementById("conductor-info");
        let conductorData;

        if (usuario.usuario === "conductor") {
            conductorData = conductores.find(conductor => conductor.nombre === "Juan Pérez");
        } else if (usuario.usuario === "conductor2") {
            conductorData = conductores.find(conductor => conductor.nombre === "María Rojas");
        }

        if (conductorData) {
            const conductorInfoHTML = `
                <div class="col s12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Información del Conductor</span>
                            <p><strong>Nombre:</strong> ${conductorData.nombre}</p>
                            <p><strong>Vehículo:</strong> ${conductorData.vehiculo}</p>
                            <p><strong>Experiencia:</strong> ${conductorData.experiencia}</p>
                        </div>
                    </div>
                </div>
            `;
            conductorInfoContainer.innerHTML = conductorInfoHTML;

            const viajesRealizados = [...viajes, ...viajes2]; // Combinar ambos arrays de viajes

            const viajesConductor = viajesRealizados.filter(viaje => viaje.conductor.nombre === conductorData.nombre);

            // Calcular estadísticas de viajes
            const usuariosAbordaron = {};
            let montoTotal = 0;

            viajesConductor.forEach(viaje => {
                if (!usuariosAbordaron[viaje.origen]) {
                    usuariosAbordaron[viaje.origen] = 1;
                } else {
                    usuariosAbordaron[viaje.origen]++;
                }
                montoTotal += viaje.monto;
            });

            const dashboardContainer = document.getElementById("dashboard-container");

            const dashboardHTML = `
                <div class="col s12">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">Dashboard del Conductor</span>
                            <p><strong>Total Viajes Realizados:</strong> ${viajesConductor.length}</p>
                            <p><strong>Monto Total Recaudado:</strong> ${montoTotal} soles</p>
                            <p><strong>Usuarios que Abordaron:</strong></p>
                            <ul>
                                ${Object.entries(usuariosAbordaron).map(([user, count]) => `<li>${user}: ${count} veces</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            dashboardContainer.innerHTML = dashboardHTML;
        } else {
            console.error("No se encontraron datos del conductor.");
        }
    }
});

