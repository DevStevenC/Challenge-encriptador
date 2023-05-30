function encriptar(){
    
    var frase = document.getElementById("textoEncriptado").value.toLowerCase(); //nos hace minusculas las letas que escribimos

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");    //tome en cuenta las mayusculas y minusculas, linea u oracion y multiples lineas

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";


 }

 function desencriptar(){
    
    var frase = document.getElementById("textoEncriptado").value.toLowerCase(); //nos hace minusculas las letas que escribimos

    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");    //tome en cuenta las mayusculas y minusculas, linea u oracion y multiples lineas

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";

 }
 
 function copiar(){

    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
 }