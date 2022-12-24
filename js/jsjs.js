function mostrar(mensaje){

    document.querySelector("#resultado").innerHTML=mensaje;
}

function actualizarPantalla(){
    
    document.querySelector("#vacio").style.display="none";
    document.querySelector("#imagenSinMensaje").style.display="none";
    document.querySelector("#sinMensaje").style.display="none";
    document.querySelector("#descpripcionSinMensaje").style.display="none";
    document.querySelector("#resultado").style.display="inline-block";
    document.querySelector("#copiar").style.display="inline-block";
    
}

function encriptarMensaje(){
    let mensaje = document.querySelector("#texto").value;
    
    if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length){
        let textoEncriptado = mensaje
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat");
        

        actualizarPantalla();
        mostrar(textoEncriptado);
        document.querySelector('#texto').value='';
    }

    else alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
}

function desencriptarMensaje(){
    let mensaje = document.querySelector("#texto").value;
    if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length){
        let texto = mensaje
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("ufat", "u");

        
        mostrar(texto);
    }

    else alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
    
}

function copiarTexto(){

    let texto = document.querySelector("#resultado");
    texto.select();
    texto.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(texto.value);
}

let encriptar = document.querySelector("#encriptar");
let desencriptar = document.querySelector("#desencriptar");
let copiar = document.querySelector("#copiar");


copiar.onclick = copiarTexto;
encriptar.onclick = encriptarMensaje;
desencriptar.onclick = desencriptarMensaje;

