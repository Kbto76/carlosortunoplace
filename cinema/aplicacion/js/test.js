/*--mymchoco--*/
document.getElementById('mymchoco').onchange = function(e) {

    const preciomymchoco = 1000;
    document.getElementById('btn-borrar-mymchoco').style.display = 'block';
    a = e.target.value;
    totalmymchoco = a * preciomymchoco;
    document.getElementById('precio-mymchoco').innerHTML = " ¢" + totalmymchoco;
    subtotal = subtotal + totalmymchoco;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivamymchoco = totalmymchoco * .15;
    servmymchoco = totalmymchoco * .10;
    document.getElementById('iva').innerHTML = "¢" + iva;
    document.getElementById('serv').innerHTML = "¢" + serv;
    document.getElementById('iva-escondido').style.display = 'block';
    document.getElementById('serv-escondido').style.display = 'block';
    document.getElementById('total-escondido').style.display = 'block';
    document.getElementById('logo-escondido').style.display = 'none';
    document.getElementById('solo-mac-texto').style.display = 'none';
    total = subtotal + serv + iva;
    document.getElementById('total').innerHTML = "¢" + total;
    document.getElementById('nombre').style.display = 'block';
    document.getElementById('expira').style.display = 'block';
    document.getElementById('tarjeta').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    if (totalmymchoco >= 0) {
        document.getElementById('mymchoco').style.display = 'none';
    }



}

function borrarmymchoco() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalmymchoco;
        iva = iva - ivamymchoco;
        serv = serv - servmymchoco;
        total = total - (totalmymchoco + ivamymchoco + servmymchoco);
        totalmymchoco = 0;
        document.getElementById('precio-mymchoco').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('mymchoco').style.display = 'block';
    }
}