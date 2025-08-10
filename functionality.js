let firstnumber= null
let secondnumber= null
let operator= null
let displayvalue= "";

function buttonClick(value) {
    switch(value) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            displayvalue += value;
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            firstnumber = displayvalue;
            operator = value;
            displayvalue = "";
            break;
        case '=':
            secondnumber = displayvalue;
            calculate();
            break;
        case 'C':
            clear();
            break;
    }
    updateValue();
}
   function updateValue() {
    const display = document.querySelector('.display');
    display.textContent = displayvalue;
    display.style.color = "green";


}
function calculate() {
    let result;
    const num1 = parseFloat(firstnumber);
    const num2 = parseFloat(secondnumber);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
            case 'C':
                clear();
            default:
                result= num1;
                break;
    }
    displayvalue = result.toString();
    updateValue();
}
function clear() {
    firstnumber = null;
    secondnumber = null;
    operator = null;
    displayvalue = "";
    updateValue();
}