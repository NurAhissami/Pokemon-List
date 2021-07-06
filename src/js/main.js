'use strict';

console.log('>> Ready :)');

const inputNumber = document.querySelector('.js-input');
const inputButton = document.querySelector('.js-button');
const trackInfo = document.querySelector('.js-track');
const triedNumber= document.querySelector('.js-tried');
const bodyBack = document.querySelector('.js-body');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

const randomNumber = getRandomNumber(100);
console.log(randomNumber)


function compareNumber (){
   
    const inputValue = parseInt(inputNumber.value);
    console.log(inputValue, randomNumber);

    if (inputValue === randomNumber){

    trackInfo.innerHTML = 'Enhorabuena!! has ganado! =) ¡recarga la página y juega otra vez!';
    inputButton.setAttribute('disabled', false);
    inputButton.classList.add('colordisable')
bodyBack.classList.add('colorback')
trackInfo.classList.add('colortext')
    }
    else if (inputValue > randomNumber && inputValue <= 100){
        trackInfo.innerHTML = 'WOW, ¡te has pasado!'
    }
    else if (inputValue < randomNumber && inputValue >= 0){
        trackInfo.innerHTML = '¡te has quedado corta!'
    }
    else if (inputValue > 100 || inputValue < 0){
        trackInfo.innerHTML = 'escoge un número de 0 a 100 ;)'
    }
}

let counter = 0;

function clickNumber (){
counter += 1;
triedNumber.innerHTML = `Número de intentos: ${counter}`;
}


function clickAndCompare (){
    clickNumber ()
    compareNumber ()

}

inputButton.addEventListener('click', clickAndCompare)