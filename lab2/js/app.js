var dato1 = document.getElementById("dato1");
var dato2 = document.getElementById("dato2");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplica = document.getElementById("multiplicacion");
var divide = document.getElementById("divicion");
var resul = document.getElementById("resul");
var resultado;


suma.addEventListener("click",sumar);
resta.addEventListener("click",restar);
multiplica.addEventListener("click",multiplicar);
divide.addEventListener("click",dividir);



function sumar(){

    resultado = Number(dato1.value) + Number(dato2.value);
    resul.innerHTML= resultado;
    dato1.value="";
    dato2.value="";
    dati1.focus();
}

function restar(){

    resultado = Number(dato1.value) - Number(dato2.value);
    resul.innerHTML= resultado;
    dato1.value="";
    dato2.value="";
    dati1.focus();
}

function multiplicar(){

    resultado = Number(dato1.value) * Number(dato2.value);
    resul.innerHTML= resultado;
    dato1.value="";
    dato2.value="";
    dati1.focus();
}
function dividir(){

    resultado = Number(dato1.value) / Number(dato2.value);
    resul.innerHTML= resultado.toFixed;
    dato1.value="";
    dato2.value="";
    dati1.focus();



}
