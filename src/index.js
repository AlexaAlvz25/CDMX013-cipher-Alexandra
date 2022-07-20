import cipher from './cipher.js';

const vistaPrincipal = document.querySelector('#cipher_vista');
const vistaCifrado = document.querySelector('#codificador');
const vistaDescifrado = document.querySelector('#decodificador');

const botonCambioCifrado = document.querySelector('.cipher_tarjeta');
const botonCambioDescifrado = document.querySelector('.cipher_tarjeta2');

botonCambioCifrado.addEventListener('click', function() {
    vistaPrincipal.style.display = 'none'
    vistaCifrado.style.display = 'block';
})

botonCambioDescifrado.addEventListener('click', function() {
    vistaPrincipal.style.display = 'none'
    vistaDescifrado.style.display = 'block';
})

//Vinculamos la función al boton CIFRAR e incluimos los argumentos que va a leer
const botonCifrado = document.querySelector('#cifrado');

botonCifrado.addEventListener("click", function() {
    //Declaramos de donde se extraen los valores para la funcion
    const numIndex = document.querySelector('#numIndex').value;
    const texto = document.querySelector('#texto').value;
    const mostrarResultadoFinal = document.querySelector('#resultado-final');
    mostrarResultadoFinal.append(cipher.encode(numIndex, texto));

});


//Vinculamos la función al boton CIFRAR e incluimos los argumentos que va a leer
const botonDescifrado = document.querySelector('#cifrado2');

botonDescifrado.addEventListener("click", function() {
    //Declaramos de donde se extraen los valores para la funcion
    const numIndex = document.querySelector('#numIndex2').value;
    const texto = document.querySelector('#texto2').value;
    const mostrarResultadoFinal2 = document.querySelector('#resultado-final2');
    mostrarResultadoFinal2.append(cipher.decode(numIndex, texto));
});
