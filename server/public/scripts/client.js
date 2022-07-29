$(document).ready(onReady);

function onReady() {
    console.log('jquery is loaded!');
    $('body').on('click', '#calculator-button', setNumbers);
    $('body').on('click', '#calculator-operation', setOperation);
    $('body').on('click', '#calculator-equal', equalButton);
    $('body').on('click', '#clear-button', clearButton);
}

function setNumbers() {
    console.log('in setNumbers');
}

function setOperation() {
    console.log('in setOperation');
}

function equalButton() {
    console.log('in equalButton');
}

function clearButton() {
    console.log('in clearButton');
}