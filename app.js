function encriptador () {
    const texto = document.getElementById("input__texto").value;
    const textoEncriptado = encriptar(texto);
    document.getElementById("mensaje__desencriptado").textContent = textoEncriptado;

    const imagen = document.getElementById("desencriptado__immagen1");
    imagen.style.display = 'none';
};

function desencriptador(){
    const texto = document.getElementById("input__texto").value;
    const textoDesencriptado = desencriptar(texto);
    document.getElementById("mensaje__desencriptado").textContent = textoDesencriptado;
};

function encriptar(texto) {
    
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptar(texto) {
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    return textoDesencriptado;
}