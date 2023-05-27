const textArea = document.querySelector(".textoencriptar");
const mensaje = document.querySelector(".textocopiar");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    textocopiar.value = textoEncriptado
    /*textArea.value = "";*/
    textocopiar.style.backgroundImage = "none";

}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada= stringEncriptada.toLowerCase()

    for(i = 0 ; i < matrizCodigo.length; i++){

        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
return stringEncriptada;
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(mensaje.value)
    textocopiar.value = textoEncriptado
   
    textocopiar.style.backgroundImage = "none";
   

}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptada= stringDesencriptada.toLowerCase()

    for(let i = 0 ; i < matrizCodigo.length; i++){

        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
return stringDesencriptada;
}


function btnCopiar(){
        navigator.clipboard.writeText(textocopiar.value)
   
    
    }

    function check(e) {
        tecla = (document.all) ? e.keyCode : e.which;
    
        //Tecla de retroceso para borrar, siempre la permite
        if (tecla == 8) {
            return true;
        }
    
        // Patrón de entrada, en este caso solo acepta numeros y letras
        patron = /[a-z0-9]/;
        tecla_final = String.fromCharCode(tecla);
        return patron.test(tecla_final);
    }







    
