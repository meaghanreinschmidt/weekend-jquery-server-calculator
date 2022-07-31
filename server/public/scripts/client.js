$(document).ready(onReady);

function onReady() {
    $('body').on('click', '#calculator-operation', setFirstHalf);
    $('body').on('click', '#calculator-equal', sendOperationToServer);
}

let firstNumber;
let operator;
let secondNumber;

function setFirstHalf() {
    let firstNumber = $('#first-number').val();
    console.log('this is the first number', firstNumber);
    let operator = $(this).data('value');
    console.log('this is the operator', operator);
}

function sendOperationToServer() {
    console.log('in sendOperationToServer');
    let secondNumber = $('#second-number').val();
    console.log('this is the second number', secondNumber);
$.ajax({
    type: 'POST',
    url: '/operation',
    data: {
        firstNumber: $('#first-number').val(),
        operator: $('#calculator-operation').val(),
        secondNumber: $('#second-number').val()
    }
}).then(function (response) {
    console.log(response);
    getOperation();
});
}

function getOperation() {
    $.ajax({
        type: 'GET',
        url: '/operation'
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let operation = response[i];
        $('#solution-container').append(`
            <tr>
                <td>${operation.firstNumber}</td>
                <td>${operation.operator}</td>
                <td>${operation.secondNumber}</td>
            </tr>
        `);
        }
    })
}
