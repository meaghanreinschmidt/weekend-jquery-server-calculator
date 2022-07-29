$(document).ready(onReady);

function onReady() {
    console.log('jquery is loaded!');
    $('body').on('click', '#calculator-button', appendToInput);
    $('body').on('click', '#calculator-operation', appendOperation);
    $('body').on('click', '#calculator-equal', equalButton);
    $('body').on('click', '#clear-button', clearButton);
}

let blankInput;
let buttonClick;
let newInput;

function appendToInput() {
    // Start with empty input field 
    blankInput = $('.display-box').val();
    // Target value of button clicks 
    buttonClick = $(this).data('value');
    // console.log('button clicked:', buttonClick);
    newInput = (blankInput + buttonClick);
    // Append button value to input field 
    $('.display-box').val(newInput);
}

function appendOperation() {
    console.log('in appendOperation');
}

function equalButton() {
    console.log('in equalButton');
}

function clearButton() {
    console.log('in clearButton');
}