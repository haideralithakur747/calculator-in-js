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


}