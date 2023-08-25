/* let cantSimple = 0;
let cantDoble = 0;
let cantTwin = 0;
let cantKing = 0;
let cantFamiliar = 0;

let precioSimple = 15000;
let precioDoble = 20000;
let precioTwin = 18000;
let precioKing = 25000;
let precioFamiliar = 25000;

let totalReserva = 0;

let disponiblesSimple = 10;
let disponiblesDoble = 10;
let disponiblesTwin = 10;
let disponiblesKing = 10;
let disponiblesFamiliar = 10;


function eligeTipoHabitacion(tipo) {
    let cantidad = -1;
    switch (tipo) {
        case "1":
           
            cantidad = parseInt (prompt("Ingrese la cantidad de habitaciones 'simples' que desea."));
            if (cantidad <= disponiblesSimple) {
                disponiblesSimple = disponiblesSimple - cantidad;
                cantSimple = cantidad + cantSimple;
                totalReserva += precioSimple * cantidad;
            }
            else {
                alert("Solo hay " + disponiblesSimple + " habitaciones simples displonibles este momento")
            }
            break;
        case "2":

            cantidad = parseInt (prompt("Ingrese la cantidad de habitaciones 'doble' que desea."));
            if (cantidad <= disponiblesDoble) {
                disponiblesDoble = disponiblesDoble - cantidad;
                cantDoble += cantidad;
                totalReserva += precioDoble * cantidad;
            } else {
                alert("Solo hay " + disponiblesDoble + " habitaciones doble displonibles este momento")
            }

            break;
        case "3":

            cantidad = parseInt (prompt("Ingrese la cantidad de habitaciones 'twin' que desea."));
            if (cantidad <= disponiblesTwin) {
                disponiblesTwin = disponiblesTwin - cantidad;
                cantTwin += cantidad;
                totalReserva += precioTwin * cantidad;
            }
            else {
                alert("Solo hay " + disponiblesTwin + " habitaciones twin displonibles este momento")
            }
            break;

        case "4":
            cantidad = parseInt (prompt("Ingrese la cantidad de habitaciones 'king' que desea."));
            if (cantidad <= disponiblesKing) {
                disponiblesKing = disponiblesKing - cantidad;
                cantKing += cantidad;
                totalReserva += precioKing * cantidad;
            }
            else {
                alert("Solo hay " + disponiblesKing + " habitaciones King displonibles este momento")
            }
            break;
        case "5":
            cantidad = parseInt (prompt("Ingrese la cantidad de habitaciones 'familiar' que desea."));
            if (cantidad <= disponiblesFamiliar) {
                disponiblesFamiliar -= cantidad;
                cantFamiliar += cantidad;
                totalReserva += precioFamiliar * cantidad;
            }
            else {
                alert("Solo hay " + disponiblesFamiliar + " habitaciones familiar displonibles este momento")
            }
            break;
        default:
            alert("Opción no valida");
            break;
    }
}

function calculaTotalReserva() {
    let tipo = prompt("Ingrese la habitación que desea: \n 1 - Simple ------------------ $" + precioSimple + "\n 2 - Doble --------------- $" + precioDoble + " \n 3 - Twin --------------- $" + precioTwin + "\n 4 - King -------------- $" + precioKing + " \n 5 - Familiar -------- $" + precioFamiliar + " \n 0 - Finalizar");
    while (tipo != "0") {
        eligeTipoHabitacion(tipo);
        tipo = prompt("Ingrese la habitación que desea: \n 1 - Simple ------------------ $" + precioSimple + "\n 2 - Doble --------------- $" + precioDoble + " \n 3 - Twin --------------- $" + precioTwin + "\n 4 - King -------------- $" + precioKing + " \n 5 - Familiar -------- $" + precioFamiliar + " \n 0 - Finalizar \n\n Total de su compra: $" + totalReserva);
    }
    alert("El total de su reserva es: $" + totalReserva + " \nHabitaciones ingresadas: \n Simple: " + cantSimple + "\n Doble: " + cantDoble + "\n Twin: " + cantTwin + "\n King: " + cantKing + "\n Familiar: " + cantFamiliar + "\n\nDisfrute de su estadia!");
}

calculaTotalReserva();
 */

/* <!--variables--> */




/* <!--Reservas--> */

/* function computeTotal() {
    var checkin = new Date(document.getElementById("checkinDate").value)
    var checkout = new Date(document.getElementById('checkoutDate').value)

    var duracion = (checkout - checkin) / (24 * 60 * 60 * 1000)


    var precio = 0
    if (document.getElementById('simple').checked == true)
        precio += 15000.00
    if (document.getElementById('doble').checked == true)
        precio += 20000.00
    if (document.getElementById('twin').checked == true)
        precio += 18000.00

    alert("El total de su reserva es $" + precio * duracion)
} */

/* class habitacionesElegido {
    constructor(tipo, caracteristica, precio, total = 0, cant = 0) {
        this.tipo = tipo;
        this.caracteristica = caracteristica;
        this.precio = precio;
        this.total = total;
        this.cant = cant;
    }
}
 */

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

