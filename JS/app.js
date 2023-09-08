/* 
class habitacion {
    constructor(tipo, caracteristica, precio, cant = 0, disponibilidad) {
        this.tipo = tipo;
        this.caracteristica = caracteristica;
        this.precio = precio;
        this.cant = cant;
        this.disponibilidad = disponibilidad;
    }
}


const habitacion1 = new habitacion('Simple', 'Para uno', 15000, 0, 10);
const habitacion2 = new habitacion('Doble', 'Para tres', 20000, 0, 10);
const habitacion3 = new habitacion('Twin', 'Para dos', 18000, 0, 10);
const habitacion4 = new habitacion('King', 'Para dos', 25000, 0, 10);
const habitacion5 = new habitacion('Familiar', 'Para cuatro', 25000, 0, 10);

const habitacionesDisponibles = [habitacion1, habitacion2, habitacion3, habitacion4, habitacion5];
const habitacionesElegidos = [];

// Funcion de incio --- el usuario debe elegir- No le ecnuentro la funcionalidad para un hotel por ahora 
function eligeOpcion() {
    let opcionAccion = -1;
    opcionAccion = prompt("Que desea saber? \n 1 - Buscar habitacion \n 2 - Ver listado de habitaciones \n 3 - Finalizar");
    while (opcionAccion != '3'){
        while (opcionAccion != "1" && opcionAccion != "2" && opcionAccion != "3") {
            alert("Ingrese una opcion entre 1, 2 y 3");
            opcionAccion = prompt("Que desea saber? \n 1 - Buscar habitacion \n 2 - Ver listado de habitaciones \n 3 - Finalizar");
        }
        if (opcionAccion == '1') {
            busquedaDisponibles();
        }
        else if (opcionAccion=='2'){
            reserva();
        }
        opcionAccion = prompt("Que desea saber? \n 1 - Buscar habitacion \n 2 - Ver listado de habitaciones \n 3 - Finalizar");
    }
}
eligeOpcion();
// Funcion compra --- habitaciones a legir
function compra() {

    let indice = 0;
    let i = 0;
    let listado = "";
    habitacionesDisponibles.forEach((element, i) => {
        count = i + 1;
        listado += count + ". " + element.tipo + " " + element.caracteristica + "-------------- $" + element.precio + "\n";
    });

    let opcion = prompt("Ingrese la habitacion que desea: \n 0 - Finalizar \n" + listado);
    while (opcion != "0") {
        while (opcion < 0) {
            alert("El numero ingresado debe ser mayor a 0");
            opcion = prompt("Ingrese la habitacion que desea: \n " + listado);
        }
        cargahabitaciones(opcion, indice);
        indice++;
        opcion = prompt("Ingrese ela habitacion que desea: \n 0 - Finalizar \n" + listado);
    }
    alert("El total de su reserva es: $" + calculaTotalreserva() + " \nReserva: \n" + muestrahabitaciones());
    alert("Gracias por su visita! 😁")
}

// Funcion calcula total reserva

function calculaTotalreserva() {
    let totalReserva = 0;
    habitacionesElegidos.forEach((element, i) => {
        totalReserva += element.precio;
    });
    return totalReserva;
}

// Funcion visualizar reserva

function muestrahabitaciones() {
    let listadoElegidos = "";
    habitacionesElegidos.forEach((element, i) => {
        listadoElegidos += element.tipo + " " + element.caracteristica + element.cant + "-------------- $" + element.precio + "\n";
    });
    return listadoElegidos;
}

// Funcion ingresar la reserva

function cargahabitaciones(opcion, indice) {
    let cantidad;

    habitacionesElegidos[indice] = habitacionesDisponibles[opcion - 1];
    cantidad = parseInt(prompt("Ingrese la cantidad habitaciones de " + `${habitacionesElegidos[indice].tipo} ${habitacionesElegidos[indice].caracteristica}` + " que desea."));
    habitacionesElegidos[indice].cant += cantidad;
    habitacionesElegidos[indice].precio = habitacionesElegidos[indice].cant * habitacionesDisponibles[opcion - 1].precio;
    habitacionesDisponibles[opcion - 1].disponibilidad = habitacionesDisponibles[opcion - 1].disponibilidad - cantidad;
}
compra();

// Funcion busqueda habitacion disponibles y las visualiza

function busquedaDisponibles() {
    let habitacionBuscada = prompt("Ingrese su busqueda:");
    while (habitacionBuscada.length == 0) {
        alert("Ingrese un producto o parte del mismo.");
        habitacionBuscada = prompt("Ingrese su busqueda:");
    }
    let arrayBusqueda = buscahabitacion(habitacionesDisponibles, habitacionBuscada);
    if (arrayBusqueda.length > 0) {
        let listadoBuscados = "";
        arrayBusqueda.forEach((element) => {
            listadoBuscados += element.nombre + " " + element.caracteristica + "-------------- $" + element.precio + "\n";
        });
        alert("Las habitaaciones disponibles son: \n" + listadoBuscados);
    }
}

function buscahabitacion(habitacionesDisponibles, habitacionBuscada) {
    return habitacionesDisponibles.filter((el) => el.tipo.includes(habitacionBuscada));
}

eligeOpcion();
 */

// Reserva
function a() {
    var ae = 0
    let nombre; 

    if (document.getElementById("1").checked) {
        nombre = document.getElementById("Habitacion_Simple").textContent;
        ae += 100.99 
        console.log(document.getElementById("Habitacion_Simple").textContent);
    }
    if (document.getElementById("2").checked){
        nombre = document.getElementById("Habitacion_Doble").textContent;
        ae += 150.99
    }
    if (document.getElementById("3").checked){
        nombre = document.getElementById("Habitacion_Familiar").textContent;
        ae += 200.99
    }


    if (ae >= 1000)
        ae = ae / 18 * 17

    if (ae >= 500)
        ae = ae * 0.9

    var p = new Date(document.getElementById("c1").value)
    var p2 = new Date(document.getElementById("c2").value)
    var days = (p2 - p) / (1000 * 60 * 60 * 24)
    alert("Su estadia es por " + days + " dias.")
    alert("El total de la reserva es $" + ae * days)

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