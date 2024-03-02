//funciones

noTexto();

function encriptarTexto(){
    let textoOriginal = document.querySelector(".txt_original").value.toLowerCase();
    console.log(textoOriginal)
   if(validarTexto(textoOriginal)){
    conTexto();
        let textoResultado = textoOriginal.replaceAll("e","enter");
        textoResultado = textoResultado.replaceAll("i","imes");
        textoResultado = textoResultado.replaceAll("a","ai");
        textoResultado = textoResultado.replaceAll("o","ober");
        textoResultado = textoResultado.replaceAll("u","ufat");
        document.querySelector(".txt_resultado").innerHTML = textoResultado;
   }
}

function desencriptarTexto(){
    let textoOriginal = document.querySelector(".txt_original").value.toLowerCase();
    console.log(textoOriginal)
   if(validarTexto(textoOriginal)){
    conTexto();
        let textoResultado = textoOriginal.replaceAll("enter","e");
        textoResultado = textoResultado.replaceAll("imes","i");
        textoResultado = textoResultado.replaceAll("ai","a");
        textoResultado = textoResultado.replaceAll("ober","o");
        textoResultado = textoResultado.replaceAll("ufat","u");
        document.querySelector(".txt_resultado").innerHTML = textoResultado;
   }
}

function copiarTexto(){
    document.querySelector(".txt_resultado").select();
    document.execCommand("copy");
}

function validarTexto(texto){
    if (texto.trim().length==0){
        noTexto();
        return false;
    }
    if (texto.match(/[^a-zA-Z0-9\s]/)){
        alert("¡¡¡No se permiten caracteres especiales!!!");
        noTexto();
        return false;
    }
    return true;
}

function conTexto(){
    try {
        document.querySelector("body").removeChild(document.querySelector(".img_muñeca"));
        document.querySelector("body").removeChild(document.querySelector(".div_txterror")); 
    } catch (error) {
        console.log(error);
    }
    if (!(document.querySelector(".txt_resultado") && document.querySelector(".btn_copiar"))) {
        const cajaTexto = document.createElement("textarea");
        cajaTexto.className = "txt_resultado"; 
        document.querySelector("body").appendChild(cajaTexto);
    
        const botonCopiar = document.createElement("button");
        botonCopiar.innerHTML = "Copiar"
        botonCopiar.className = "btn_copiar"
        botonCopiar.addEventListener("click",copiarTexto)
        document.querySelector("body").appendChild(botonCopiar);
    }

}

function noTexto(){
    try {
        document.querySelector("body").removeChild(document.querySelector(".txt_resultado"));
        document.querySelector("body").removeChild(document.querySelector(".btn_copiar"));
    } catch (error) {
        console.log(error);
    }
    if (!(document.querySelector(".img_muñeca") && document.querySelector(".div_txterror"))) {
        const img = document.createElement("img");
        img.src = "/images/muneco.png";
        img.alt = "muñeca";
        img.className="img_muñeca"
        document.querySelector("body").appendChild(img);

        const texto = document.createElement("div");
        texto.className = "div_txterror";
        texto.innerHTML ="<h2>Ningún mensaje fue encontrado</h2><p>Ingresa el texto que desees encriptar o desencriptar.</p>";
        document.querySelector("body").appendChild(texto);
    }
    
}