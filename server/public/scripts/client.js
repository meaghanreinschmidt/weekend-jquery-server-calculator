$(document).ready(onReady);

function onReady() {
    $('body').on('click', '#calculator-operation', setFirstHalf)
    $('body').on('click', '#calculator-equal', setSecondHalf)
}

let firstNumber;
let operator;
let secondNumber;

let operationHistory = [];

function setFirstHalf() {
    let firstNumber = $('#first-number').val();
    console.log('this is the first number', firstNumber);
    operator = $(this).data('value');
    console.log('this is the operator', operator);
}

function setSecondHalf() {
    let firstNumber = $('#first-number').val();
    let secondNumber = $('#second-number').val();
    console.log('this is the second number', secondNumber);
    let operation = {
        firstNumber: firstNumber,
        operator: operator,
        secondNumber: secondNumber
    };
    console.log(operation);
    operationHistory.push(operation);
    console.log(operationHistory);
    $('#first-number').val();
    $('#second-number').val();
}