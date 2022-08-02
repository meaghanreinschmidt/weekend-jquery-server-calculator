$(document).ready(onReady);

function onReady() {
    $('body').on('click', '#calculator-operation', setFirstPart);
    $('body').on('click', '#calculator-equal', sendOperationToServer);
    $('body').on('click', '#clear-button', clearInputFields);
}

let firstNumber;
let operator;
let secondNumber;

// function to set the first number and operator in the equation
function setFirstPart() {
    firstNumber = $('#first-number').val();
    console.log('this is the first number', firstNumber);
    operator = $(this).data('value');
    console.log('this is the operator', operator);
}

// function to send the second number and full equation to server 
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

// function to get elements of operation 
function getOperation() {
    $.ajax({
        type: 'GET',
        url: '/operation'
    }).then(function (response) {
        $('#operation-table').empty();
        for (let i = 0; i < response.length; i++) {
            let operation = response[i];
        $('#operation-table').append(`
            <tr>
                <td>${operation.firstNumber}</td>
                <td>${operation.operator}</td>
                <td>${operation.secondNumber}</td>
                <td> = </td>
                <td>${operation.result}</td>
            </tr>
        `);
        $('#solution-table').empty();
        $('#solution-table').append(`
            <tr>
                <td>${operation.result}</td>
            </tr>
        `)
        
        }
    })
}

function clearInputFields() {
    $('#first-number').val('');
    $('#second-number').val('');
}
