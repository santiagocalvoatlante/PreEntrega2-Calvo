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
function computeTotal() {
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
}






