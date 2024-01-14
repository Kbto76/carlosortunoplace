const nombre = document.getElementById('nombre');
const cc = document.getElementById('cc');
const expira = document.getElementById('expira');
const tarjeta = document.getElementById('tarjeta');
const cvv = document.getElementById('cvv');
const ciudad = document.getElementById('ciudad');
const salaselect = document.getElementById('sala-select');
const Butaca = document.getElementById('Butaca');
const hora1 = document.getElementById('hora1');
const hora2 = document.getElementById('hora2');
const btnpagar = document.getElementById('pagar');
var puntos = 4;
var puntosRecividos = 0;


function verificarPuntos(total) {
    if (total >= 5000) {
        puntosRecividos = total / 5000;
        if (puntosRecividos >= 1) {
            puntos = puntos + puntosRecividos;
            if (puntos >= 5) {
                Swal.fire({
                    title: "<h2 style='color:white'>" + 'FELICIDADES' +
                        " <br>" + 'has acumulado mas de 5 puntoscon tu compras' +
                        " <br>" + 'por pavot revisa la seccion puntos en tu aplicacion' +
                        " <br>" + 'y hacercate al culquier puesto de ventas del cine' +
                        " <br>" + 'para canjear tu premios' +
                        " <br>" + 'Estaremos llevando tus alimentos a la hora acordada ' +
                        " <br>" + 'Esperamos que disfrutes de la película. ' + "<h2>",
                    icon: 'success',
                    background: '#196CB3',
                    iconColor: '#F1E444',
                    imageUrl: 'imgs/logo 2 sin fondo.png',
                    imageWidth: 284,
                    imageHeight: 50,
                    imageAlt: 'logo de la empresa',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: "#6A161C",


                })

            }
        } else {
            noPremio()
        }

    } else {
        noPremio()
    }

};


function noPremio() {
    Swal.fire({
        title: "<h2 style='color:white'>" + 'COMPRA EXITOSA' +
            " <br>" + 'Estaremos llevando tu alimentos ' + " <br>" + ' a la hora acordada ' + " <br>" + 'Esperamos que disfrutes de la película. ' + "<h2>",
        icon: 'success',
        background: '#196CB3',
        iconColor: '#F1E444',
        imageUrl: 'imgs/logo 2 sin fondo.png',
        imageWidth: 284,
        imageHeight: 50,
        imageAlt: 'logo de la empresa',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: "#6A161C",


    })
}


function validar() {
    let error = false;

    if (nombre.value == '') {
        error = true;
        nombre.classList.add('input-error');
    } else {
        nombre.classList.remove('input-error');
    }

    if (cc.value == '') {
        error = true;
        cc.classList.add('input-error');
    } else {
        cc.classList.remove('input-error');
    }

    if (expira.value == '') {
        error = true;
        expira.classList.add('input-error');
    } else {
        expira.classList.remove('input-error');
    }

    if (tarjeta.value == '') {
        error = true;
        tarjeta.classList.add('input-error');
    } else {
        tarjeta.classList.remove('input-error');
    }

    if (cvv.value == '') {
        error = true;
        cvv.classList.add('input-error');
    } else {
        cvv.classList.remove('input-error');
    }

    if (ciudad.value == '') {
        error = true;
        ciudad.classList.add('input-error');
    } else {
        ciudad.classList.remove('input-error');
    }

    if (salaselect.value == '') {
        error = true;
        salaselect.classList.add('input-error');
    } else {
        salaselect.classList.remove('input-error');
    }
    if (Butaca.value == '') {
        error = true;
        Butaca.classList.add('input-error');
    } else {
        Butaca.classList.remove('input-error');
    }

    if (hora1.value == '') {
        error = true;
        hora1.classList.add('input-error');
    } else {
        hora1.classList.remove('input-error');
    }

    if (hora2.value == '') {
        error = true;
        hora2.classList.add('input-error');
    } else {
        hora2.classList.remove('input-error');
    }


    if (error == true) {
        Swal.fire({
            title: "<h5 style='color:white; font-size:18px'>" + 'CASILLAS EN BLANCO' +
                " <br> <br>" + 'Completar casillas marcadas en rojo' + "</h5>",
            icon: 'warning',
            background: '#196CB3',
            iconColor: '#F1E444',
            imageUrl: 'imgs/logo 2 sin fondo.png',
            imageWidth: 284,
            imageHeight: 50,
            imageAlt: 'logo de la empresa',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: "#6A161C",


        })


    } else {
        verificarPuntos();







    }

};