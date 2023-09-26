const div_habitaciones = document.getElementById("div_habitaciones");

// llamado a llenar main
fetch('https://raw.githubusercontent.com/santiagocalvoatlante/Simulador-Reserva-Calvo/main/json/data.json')
    .then((resp) => resp.json())
    .then((data) => {
        const { habitaciones } = data;
        console.log(habitaciones);
        llenarMain(habitaciones);
    })

// Llenado de productos
const llenarMain = (arr) => {
    setTimeout(() => {  //para simular retraso desde la BD
        arr.forEach((elem) => {
            const { imagen, precio, nombre, id, id_nombre } = elem
            div_habitaciones.innerHTML += `
            <input type="checkbox" id="${id}">  <h4 id="${id_nombre}"> ${nombre}</h4> $${precio}/noche
            <img src=${imagen}
            width="300" /> <br>
            `;
        })
    }, 1000);
}

// Reserva
function a() {
    let precio = 0
    let nombre ="";
    let p = new Date(document.getElementById("c1").value)
    let p2 = new Date(document.getElementById("c2").value)
    let days = (p2 - p) / (1000 * 60 * 60 * 24)

    if (document.getElementById("1").checked) {
        nombre += document.getElementById("Habitacion_Simple").textContent;
        precio += 100.99
        console.log(document.getElementById("Habitacion_Simple").textContent);
    }
    if (document.getElementById("2").checked) {
        nombre += document.getElementById("Habitacion_Doble").textContent;
        precio += 150.99
    }
    
    if (document.getElementById("3").checked) {
        nombre += document.getElementById("Habitacion_Familiar").textContent;
        precio += 200.99
    }

    //impuestos 
    if (precio >= 1000)
        precio = precio / 18 * 17
    if (precio >= 500)
        precio = precio * 0.9

    Swal.fire({
        title: "Reserva para "+nombre+ " de "+days+" dias desde "+p.toLocaleDateString()+ " hasta "+p2.toLocaleDateString(),
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        denyButtonText: `No confirmar`,
      }).then((result) => {
        /* condicionales avanzados */
        result.isConfirmed ?  Swal.fire("El total de la reserva es $" + (precio * days).toFixed(2)) : Swal.fire('Los cambios no fueron guardados')
      })

   // Swal.fire("Su estadia es por " + days + " dias. El total de la reserva es $" + precio * days)

    leeDatosReserva(nombre);

}

document.getElementById("botonReserva").addEventListener("click", a);

function guardarReservaLocalStorage(reserva) {
    let reservaLS;
    reservaLS = obtenerReservasLocalStorage();
    //El curso seleccionado se agrega al Array
    reservaLS.push(reserva);
    localStorage.setItem('reserva', JSON.stringify(reservaLS));
}

//comprobar que hayan elementos en el LS
function obtenerReservasLocalStorage() {
    let reservaLS;
    //comprobamos si no hay naad o es nulo, creamos el array vacío
    if (localStorage.getItem('reserva') === null) {
        reservaLS = [];
    } else {
        reservaLS = JSON.parse(localStorage.getItem('reserva'));
    }
    return reservaLS;
}
function leeDatosReserva(nombre) {
    const infoReserva = {

        nombre: nombre,


    }

    guardarReservaLocalStorage(infoReserva);
}