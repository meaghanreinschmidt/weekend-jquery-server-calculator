// Fancy calculator functions -->

// $(document).ready(onReady);

// function onReady() {
//     console.log('jquery is loaded!');
//     $('body').on('click', '#calculator-button', appendNumbers);
//     $('body').on('click', '#calculator-operation', appendOperations);
//     $('body').on('click', '#calculator-equal', equalButton);
//     $('body').on('click', '#clear-button', clearButton);
// }

// let blankInput;
// let buttonClick;
// let newInput;

// let firstNumber;
// let operator;
// let secondNumber;

// // Function to append numbers into calculator display
// function appendNumbers() {
//     // Start with empty input field 
//     blankInput = $('.display-box').val();
//     // Target value of button clicks 
//     buttonClick = $(this).data('value');
//     // console.log('button clicked:', buttonClick);
//     newInput = (blankInput + buttonClick);
//     // Append button value to input field 
//     $('.display-box').val(newInput);
// }

// // Function to append mathmatical operations into calculator display
// function appendOperations() {
//     // Start with empty input field 
//     blankInput = $('.display-box').val();
//     // Target value of button clicks 
//     buttonClick = $(this).data('value');
//     // console.log('button clicked:', buttonClick);
//     newInput = (blankInput + buttonClick);
//     // Append button value to input field 
//     $('.display-box').val(newInput);
// }


// function equalButton() {
//     console.log('in equalButton');
//     // $.ajax GET?
// }

// // Function to clear calculator display
// function clearButton() {
//     console.log('in clearButton');
//     $('.display-box').val('');
// }