var subtotal = 0;
var iva = 0;
var serv = 0;
var total = 0;

function guardar() {
    puntos = JSON.parse(localStorage.getItem("puntos"));
    document.getElementById('puntos-acumu').innerHTML = "Pts acumulados: " + puntos;





}





function verPuntos() {

    document.getElementById('cincomil').style.display = 'block';
    document.getElementById('diez').style.display = 'block';
    document.getElementById('quince').style.display = 'block';
    document.getElementById('puntos-acumu').style.display = 'block';
    document.getElementById('premio-dispo').style.display = 'block';
    document.getElementById('premio-img').style.display = 'block';

}

/*--Coke--*/
document.getElementById('coke').onchange = function(e) {

    const precioCoke = 1000;
    document.getElementById('btn-borrar-coke').style.display = 'block';
    a = e.target.value;
    totalCoke = a * precioCoke;
    document.getElementById('precio-coke').innerHTML = " ¢" + totalCoke;
    subtotal = subtotal + totalCoke;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivaCoke = totalCoke * .15;
    servCoke = totalCoke * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';





    if (totalCoke >= 0) {
        document.getElementById('coke').style.display = 'none';
        document.getElementById('click-borrar-Coke').style.display = 'block';


    }



}

function borrarCoke() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalCoke;
        iva = iva - ivaCoke;
        serv = serv - servCoke;
        total = total - (totalCoke + ivaCoke + servCoke);
        totalCoke = 0;
        document.getElementById('precio-coke').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('coke').style.display = 'block';
        document.getElementById('click-borrar-Coke').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/
/*--manzana--*/
document.getElementById('manzana').onchange = function(e) {

    const preciomanzana = 1500;
    document.getElementById('btn-borrar-manzana').style.display = 'block';
    a = e.target.value;
    totalmanzana = a * preciomanzana;
    document.getElementById('precio-manzana').innerHTML = " ¢" + totalmanzana;
    subtotal = subtotal + totalmanzana;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivamanzana = totalmanzana * .15;
    servmanzana = totalmanzana * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalmanzana >= 0) {
        document.getElementById('manzana').style.display = 'none';
        document.getElementById('click-borrar-manzana').style.display = 'block';

    }



}

function borrarmanzana() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalmanzana;
        iva = iva - ivamanzana;
        serv = serv - servmanzana;
        total = total - (totalmanzana + ivamanzana + servmanzana);
        totalmanzana = 0;
        document.getElementById('precio-manzana').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('manzana').style.display = 'block';
        document.getElementById('click-borrar-manzana').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/
/*--almendras--*/
document.getElementById('almendras').onchange = function(e) {

    const precioalmendras = 2000;
    document.getElementById('btn-borrar-almendras').style.display = 'block';
    a = e.target.value;
    totalalmendras = a * precioalmendras;
    document.getElementById('precio-almendras').innerHTML = " ¢" + totalalmendras;
    subtotal = subtotal + totalalmendras;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivaalmendras = totalalmendras * .15;
    servalmendras = totalalmendras * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalalmendras >= 0) {
        document.getElementById('almendras').style.display = 'none';
        document.getElementById('click-borrar-almendras').style.display = 'block';

    }



}

function borraralmendras() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalalmendras;
        iva = iva - ivaalmendras;
        serv = serv - servalmendras;
        total = total - (totalalmendras + ivaalmendras + servalmendras);
        totalalmendras = 0;
        document.getElementById('precio-almendras').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('almendras').style.display = 'block';
        document.getElementById('click-borrar-almendras').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/

/*--mymchoco--*/
document.getElementById('mymchoco').onchange = function(e) {

    const preciomymchoco = 2000;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalmymchoco >= 0) {
        document.getElementById('mymchoco').style.display = 'none';
        document.getElementById('click-borrar-mymchoco').style.display = 'block';

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
        document.getElementById('click-borrar-mymchoco').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/

/*--nuggets--*/
document.getElementById('nuggets').onchange = function(e) {

    const precionuggets = 2000;
    document.getElementById('btn-borrar-nuggets').style.display = 'block';
    a = e.target.value;
    totalnuggets = a * precionuggets;
    document.getElementById('precio-nuggets').innerHTML = " ¢" + totalnuggets;
    subtotal = subtotal + totalnuggets;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivanuggets = totalnuggets * .15;
    servnuggets = totalnuggets * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalnuggets >= 0) {
        document.getElementById('nuggets').style.display = 'none';
        document.getElementById('click-borrar-nuggets').style.display = 'block';

    }



}

function borrarnuggets() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalnuggets;
        iva = iva - ivanuggets;
        serv = serv - servnuggets;
        total = total - (totalnuggets + ivanuggets + servnuggets);
        totalnuggets = 0;
        document.getElementById('precio-nuggets').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('nuggets').style.display = 'block';
        document.getElementById('click-borrar-nuggets').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/

/*--pina--*/
document.getElementById('pina').onchange = function(e) {

    const preciopina = 1500;
    document.getElementById('btn-borrar-pina').style.display = 'block';
    a = e.target.value;
    totalpina = a * preciopina;
    document.getElementById('precio-pina').innerHTML = " ¢" + totalpina;
    subtotal = subtotal + totalpina;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivapina = totalpina * .15;
    servpina = totalpina * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalpina >= 0) {
        document.getElementById('pina').style.display = 'none';
        document.getElementById('click-borrar-pina').style.display = 'block';

    }



}

function borrarpina() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalpina;
        iva = iva - ivapina;
        serv = serv - servpina;
        total = total - (totalpina + ivapina + servpina);
        totalpina = 0;
        document.getElementById('precio-pina').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('pina').style.display = 'block';
        document.getElementById('click-borrar-pina').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/

/*--papas--*/
document.getElementById('papas').onchange = function(e) {

    const preciopapas = 1000;
    document.getElementById('btn-borrar-papas').style.display = 'block';
    a = e.target.value;
    totalpapas = a * preciopapas;
    document.getElementById('precio-papas').innerHTML = " ¢" + totalpapas;
    subtotal = subtotal + totalpapas;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivapapas = totalpapas * .15;
    servpapas = totalpapas * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalpapas >= 0) {
        document.getElementById('papas').style.display = 'none';
        document.getElementById('click-borrar-papas').style.display = 'block';

    }



}

function borrarpapas() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalpapas;
        iva = iva - ivapapas;
        serv = serv - servpapas;
        total = total - (totalpapas + ivapapas + servpapas);
        totalpapas = 0;
        document.getElementById('precio-papas').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('papas').style.display = 'block';
        document.getElementById('click-borrar-papas').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/

/*--popcaramel--*/
document.getElementById('popcaramel').onchange = function(e) {

    const preciopopcaramel = 3000;
    document.getElementById('btn-borrar-popcaramel').style.display = 'block';
    a = e.target.value;
    totalpopcaramel = a * preciopopcaramel;
    document.getElementById('precio-popcaramel').innerHTML = " ¢" + totalpopcaramel;
    subtotal = subtotal + totalpopcaramel;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivapopcaramel = totalpopcaramel * .15;
    servpopcaramel = totalpopcaramel * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalpopcaramel >= 0) {
        document.getElementById('popcaramel').style.display = 'none';
        document.getElementById('click-borrar-popcaramel').style.display = 'block';

    }



}

function borrarpopcaramel() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalpopcaramel;
        iva = iva - ivapopcaramel;
        serv = serv - servpopcaramel;
        total = total - (totalpopcaramel + ivapopcaramel + servpopcaramel);
        totalpopcaramel = 0;
        document.getElementById('precio-popcaramel').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('popcaramel').style.display = 'block';
        document.getElementById('click-borrar-popcaramel').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/

/*--pop--*/
document.getElementById('pop').onchange = function(e) {

    const preciopop = 2000;
    document.getElementById('btn-borrar-pop').style.display = 'block';
    a = e.target.value;
    totalpop = a * preciopop;
    document.getElementById('precio-pop').innerHTML = " ¢" + totalpop;
    subtotal = subtotal + totalpop;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivapop = totalpop * .15;
    servpop = totalpop * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalpop >= 0) {
        document.getElementById('pop').style.display = 'none';
        document.getElementById('click-borrar-pop').style.display = 'block';

    }



}

function borrarpop() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalpop;
        iva = iva - ivapop;
        serv = serv - servpop;
        total = total - (totalpop + ivapop + servpop);
        totalpop = 0;
        document.getElementById('precio-pop').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('pop').style.display = 'block';
        document.getElementById('click-borrar-pop').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/

/*--queso--*/
document.getElementById('queso').onchange = function(e) {

    const precioqueso = 1000;
    document.getElementById('btn-borrar-queso').style.display = 'block';
    a = e.target.value;
    totalqueso = a * precioqueso;
    document.getElementById('precio-queso').innerHTML = " ¢" + totalqueso;
    subtotal = subtotal + totalqueso;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivaqueso = totalqueso * .15;
    servqueso = totalqueso * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalqueso >= 0) {
        document.getElementById('queso').style.display = 'none';
        document.getElementById('click-borrar-queso').style.display = 'block';

    }



}

function borrarqueso() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalqueso;
        iva = iva - ivaqueso;
        serv = serv - servqueso;
        total = total - (totalqueso + ivaqueso + servqueso);
        totalqueso = 0;
        document.getElementById('precio-queso').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('queso').style.display = 'block';
        document.getElementById('click-borrar-queso').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/

/*--shakechoco--*/
document.getElementById('shakechoco').onchange = function(e) {

    const precioshakechoco = 3000;
    document.getElementById('btn-borrar-shakechoco').style.display = 'block';
    a = e.target.value;
    totalshakechoco = a * precioshakechoco;
    document.getElementById('precio-shakechoco').innerHTML = " ¢" + totalshakechoco;
    subtotal = subtotal + totalshakechoco;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivashakechoco = totalshakechoco * .15;
    servshakechoco = totalshakechoco * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalshakechoco >= 0) {
        document.getElementById('shakechoco').style.display = 'none';
        document.getElementById('click-borrar-shakechoco').style.display = 'block';

    }



}

function borrarshakechoco() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalshakechoco;
        iva = iva - ivashakechoco;
        serv = serv - servshakechoco;
        total = total - (totalshakechoco + ivashakechoco + servshakechoco);
        totalshakechoco = 0;
        document.getElementById('precio-shakechoco').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('shakechoco').style.display = 'block';
        document.getElementById('click-borrar-shakechoco').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/

/*--shakefresa--*/
document.getElementById('shakefresa').onchange = function(e) {

    const precioshakefresa = 3000;
    document.getElementById('btn-borrar-shakefresa').style.display = 'block';
    a = e.target.value;
    totalshakefresa = a * precioshakefresa;
    document.getElementById('precio-shakefresa').innerHTML = " ¢" + totalshakefresa;
    subtotal = subtotal + totalshakefresa;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivashakefresa = totalshakefresa * .15;
    servshakefresa = totalshakefresa * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalshakefresa >= 0) {
        document.getElementById('shakefresa').style.display = 'none';
        document.getElementById('click-borrar-shakefresa').style.display = 'block';

    }



}

function borrarshakefresa() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalshakefresa;
        iva = iva - ivashakefresa;
        serv = serv - servshakefresa;
        total = total - (totalshakefresa + ivashakefresa + servshakefresa);
        totalshakefresa = 0;
        document.getElementById('precio-shakefresa').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('shakefresa').style.display = 'block';
        document.getElementById('click-borrar-shakefresa').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/

/*--sundaychoco--*/
document.getElementById('sundaychoco').onchange = function(e) {

    const preciosundaychoco = 1000;
    document.getElementById('btn-borrar-sundaychoco').style.display = 'block';
    a = e.target.value;
    totalsundaychoco = a * preciosundaychoco;
    document.getElementById('precio-sundaychoco').innerHTML = " ¢" + totalsundaychoco;
    subtotal = subtotal + totalsundaychoco;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivasundaychoco = totalsundaychoco * .15;
    servsundaychoco = totalsundaychoco * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalsundaychoco >= 0) {
        document.getElementById('sundaychoco').style.display = 'none';
        document.getElementById('click-borrar-sundaychoco').style.display = 'block';

    }



}

function borrarsundaychoco() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalsundaychoco;
        iva = iva - ivasundaychoco;
        serv = serv - servsundaychoco;
        total = total - (totalsundaychoco + ivasundaychoco + servsundaychoco);
        totalsundaychoco = 0;
        document.getElementById('precio-sundaychoco').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('sundaychoco').style.display = 'block';
        document.getElementById('click-borrar-sundaychoco').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/

/*--sundaycara--*/
document.getElementById('sundaycara').onchange = function(e) {

    const preciosundaycara = 1000;
    document.getElementById('btn-borrar-sundaycara').style.display = 'block';
    a = e.target.value;
    totalsundaycara = a * preciosundaycara;
    document.getElementById('precio-sundaycara').innerHTML = " ¢" + totalsundaycara;
    subtotal = subtotal + totalsundaycara;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivasundaycara = totalsundaycara * .15;
    servsundaycara = totalsundaycara * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalsundaycara >= 0) {
        document.getElementById('sundaycara').style.display = 'none';
        document.getElementById('click-borrar-sundaycara').style.display = 'block';

    }



}

function borrarsundaycara() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalsundaycara;
        iva = iva - ivasundaycara;
        serv = serv - servsundaycara;
        total = total - (totalsundaycara + ivasundaycara + servsundaycara);
        totalsundaycara = 0;
        document.getElementById('precio-sundaycara').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('sundaycara').style.display = 'block';
        document.getElementById('click-borrar-sundaycara').style.display = 'none';
    }
}
/*----------------------------------------------------------------------*/

/*--sundayfresa--*/
document.getElementById('sundayfresa').onchange = function(e) {

    const preciosundayfresa = 1000;
    document.getElementById('btn-borrar-sundayfresa').style.display = 'block';
    a = e.target.value;
    totalsundayfresa = a * preciosundayfresa;
    document.getElementById('precio-sundayfresa').innerHTML = " ¢" + totalsundayfresa;
    subtotal = subtotal + totalsundayfresa;
    document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
    document.getElementById('sub-escondido').style.display = 'block';
    iva = subtotal * .15;
    serv = subtotal * .10;
    ivasundayfresa = totalsundayfresa * .15;
    servsundayfresa = totalsundayfresa * .10;
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
    document.getElementById('fac-titulo').style.display = 'block';
    document.getElementById('ciudad').style.display = 'block';
    document.getElementById('sala-select').style.display = 'block';
    document.getElementById('Butaca').style.display = 'block';
    document.getElementById('hora1').style.display = 'block';
    document.getElementById('hora2').style.display = 'block';
    document.getElementById('cvv').style.display = 'block';
    document.getElementById('cc').style.display = 'block';
    document.getElementById('pagar').style.display = 'block';
    document.getElementById('fac-titulo').style.display = 'block';
    if (totalsundayfresa >= 0) {
        document.getElementById('sundayfresa').style.display = 'none';
        document.getElementById('click-borrar-sundayfresa').style.display = 'block';

    }



}

function borrarsundayfresa() {
    if (subtotal > 0 && iva > 0 && serv > 0) {
        subtotal = subtotal - totalsundayfresa;
        iva = iva - ivasundayfresa;
        serv = serv - servsundayfresa;
        total = total - (totalsundayfresa + ivasundayfresa + servsundayfresa);
        totalsundayfresa = 0;
        document.getElementById('precio-sundayfresa').innerHTML = "";
        document.getElementById('subtotal').innerHTML = " ¢" + subtotal;
        document.getElementById('iva').innerHTML = " ¢" + iva;
        document.getElementById('serv').innerHTML = "¢" + serv;
        document.getElementById('total').innerHTML = "¢" + total;
        document.getElementById('sundayfresa').style.display = 'block';
        document.getElementById('click-borrar-sundayfresa').style.display = 'none';
    }
}


/*----------------------------------------------------------------------*/


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
var puntos = 0;
var puntosRecividos = 0;


function verificarPuntos() {
    if (total >= 5000) {
        puntosRecividos = total / 5000;
        if (puntosRecividos >= 1) {
            puntos = puntos + puntosRecividos;
            document.getElementById('puntos-acumu').innerHTML = "Pts acumulados: " + puntos;
            localStorage.setItem("puntos", JSON.stringify(puntos));
            document.getElementById('tarjeta').value = "";
            if (puntos >= 5) {
                Swal.fire({
                    title: "<h2 style='color:white'>" + "<span style='color:red'>" + 'FELICIDADES' + "</span>" +
                        " <br>" + 'Has acumulado mas de 5 puntos con tus compras, por favor revisa la sección de puntos en tu aplicación y acercarte al cualquier punto de venta del cine, para canjear tu premio' +
                        " <br>" + " <br>" + 'Estaremos llevando tus alimentos a la hora acordada, Esperamos que disfrutes de la película. ' + "<h2>",
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

            } else {
                noPremio()
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