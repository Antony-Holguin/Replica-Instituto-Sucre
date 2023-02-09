

document.addEventListener('DOMContentLoaded', function(){
    iniciar();
});
//Variables
var contador = 2;
var botonAtras = document.querySelector('#boton_uno').addEventListener('click', decrementaValor);
var botonAdelante = document.querySelector('#boton_dos').addEventListener('click', incrementarValor);
var imagenCambiante = document.querySelector('.carrusel-Contenedor img');
var seccionCarreas = document.querySelector('.carreras_contenedor carreras');

function iniciar(){
 
}

function incrementarValor(){
    contador++;
    console.log(contador);
    if(contador>4){
        contador=2;
    }
    imagenCambiante.src = `img/${contador}.jpeg`; 
}

function decrementaValor(){
    contador--;
    console.log(contador);
    if(contador<2){
        contador = 4;
    }
    imagenCambiante.src = `img/${contador}.jpeg`;
 
}



