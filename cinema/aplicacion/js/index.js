var data = [71054990, 71051050, 22594301, 22594382];



function abrirapp() {
    window.location.href = "home.html"
}


function verificar() {

    var errorCount = 0;


    var input = document.getElementById('input-tel').value;

    if (input == "") {

        document.getElementById('input-tel').value = "";
        document.getElementById('input-tel').classList.add('error');
        document.getElementById('consola').innerHTML = "<STRONG> ESPACIO EN BLANCO</STRONG>" + "<br>" + "Por favor digitar un numero de telefono antes de presiobar el boton ingresar";
        errorCount++;

    }

    if (errorCount == 0) {

        error = 0
        if (input.length > 7 && input.length < 9) {
            for (var i = 0; i < data.length; i++) {
                if (input == data[i]) {
                    document.getElementById('input-tel').value = "";
                    document.getElementById('consola').innerHTML = "<STRONG>ENTRADA EXITOSA</STRONG>" + "<br>" + "En un momento lo redigiremos"
                    document.getElementById('input-tel').style.display = "none";
                    const atrasarsalida = setTimeout(abrirapp, 1500);



                } else {
                    error++;
                }
                if (error == data.length) {
                    document.getElementById('input-tel').classList.add('error');
                    document.getElementById('consola').innerHTML = "<STRONG>EL NÚMERO NO ESTA REGISTRADO</STRONG>" + "<br>" + "Por favor llamar a servicio al cliente: 22594380";
                    document.getElementById('input-tel').value = "";
                }

            }
        } else {
            document.getElementById('input-tel').classList.add('error');
            document.getElementById('consola').innerHTML = "<STRONG>NÚMERO INCORRECTO</STRONG>" + "<br>" + " porfavor utilice el formato de 9 dgitos, ejemplo:'25002525'"
            document.getElementById('input-tel').value = "";

        }

    }
}







//document.getElementById('consola').innerHTML = "Numero de telefono incorrecto"