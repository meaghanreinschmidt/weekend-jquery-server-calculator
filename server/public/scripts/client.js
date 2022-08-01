$(document).ready(onReady);

function onReady() {
    $('body').on('click', '#calculator-operation', setFirstPart);
    $('body').on('click', '#calculator-equal', sendOperationToServer);
    $('body').on('click', '#clear-button', clearInputFields);
}

let firstNumber;
let operator;
let secondNumber;

function setFirstPart() {
    firstNumber = $('#first-number').val();
    console.log('this is the first number', firstNumber);
    operator = $(this).data('value');
    console.log('this is the operator', operator);
}

function sendOperationToServer() {
    console.log('in sendOperationToServer');
    secondNumber = $('#second-number').val();
    console.log('this is the second number', secondNumber);
$.ajax({
    type: 'POST',
    url: '/operation',
    data: {
        firstNumber: firstNumber,
        operator: operator,
        secondNumber: secondNumber
    }
}).then(function (response) {
    console.log(response);
    getOperation();
});
    $('#first-number').val('');
    $('#second-number').val('');
}

function getOperation() {
    $.ajax({
        type: 'GET',
        url: '/operation'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let operation = response[i];
        $('#operation-history').append(`
            <tr>
                <td>${operation.firstNumber}</td>
                <td> ${operation.operator} </td>
                <td>${operation.secondNumber}</td>
                <td> = </td>
                <td>${operation.result}</td>
            </tr>
        `);
        $('#solution').empty();
        $('#solution').append(`
            <tr>
                <td>Solution: ${operation.result}</td>
            </tr>
        `)
        
        }
    })
}

function clearInputFields() {
    $('#first-number').val('');
    $('#second-number').val('');
}
