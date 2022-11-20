let input = document.querySelector('#input');

const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');

const numberZero = document.getElementById('number-0');
const numberOne = document.getElementById('number-1');
const numberTwo = document.getElementById('number-2');
const numberThree = document.getElementById('number-3');
const numberFour = document.getElementById('number-4');
const numberFive = document.getElementById('number-5');
const numberSix = document.getElementById('number-6');
const numberSeven = document.getElementById('number-7');
const numberEight = document.getElementById('number-8');
const numberNine = document.getElementById('number-9');
const divideBtn = document.getElementById('divide');
const multiplyBtn = document.getElementById('multiply');
const subtractBtn = document.getElementById('subtract');
const addBtn = document.getElementById('add');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

const OPERATORS = ["x", "÷", "-", "+"];




clearBtn.addEventListener('click', () => {
    input.textContent = ''
})

deleteBtn.addEventListener('click', () => {
    input.textContent = deleteLastElement(input.textContent);
})

numberZero.addEventListener('click', () => {
    input.textContent += 0;
})

numberOne.addEventListener('click', () => {
    input.textContent += 1;
})

numberTwo.addEventListener('click', () => {
    input.textContent += 2;
})

numberThree.addEventListener('click', () => {
    input.textContent += 3;
})

numberFour.addEventListener('click', () => {
    input.textContent += 4;
})

numberFive.addEventListener('click', () => {
    input.textContent += 5;
})

numberSix.addEventListener('click', () => {
    input.textContent += 6;
})

numberSeven.addEventListener('click', () => {
    input.textContent += 7;
})

numberEight.addEventListener('click', () => {
    input.textContent += 8;
})

numberNine.addEventListener('click', () => {
    input.textContent += 9;
})

divideBtn.addEventListener('click', () => {
    if ((!input.textContent == ' ') && !(OPERATORS.includes(input.textContent.slice(-1)[0]))) {
    input.textContent += '÷';
    };
})

multiplyBtn.addEventListener('click', () => {
    if (!input.textContent == ' ' && !(OPERATORS.includes(input.textContent.slice(-1)[0]))) {
    input.textContent += 'x';
    };
})

subtractBtn.addEventListener('click', () => {
    input.textContent += '-';
})

addBtn.addEventListener('click', () => {
    if (!input.textContent == ' ' && !(OPERATORS.includes(input.textContent.slice(-1)[0]))) {
    input.textContent += '+';
    };
})

decimal.addEventListener('click', () => {
    if (!input.textContent == ' ') {
    input.textContent += '.';
    };
})

equals.addEventListener('click', () => {
    input.textContent = stringParser(input.textContent)
})

function stringParser(string) {
    let x = '';
    let y = '';
    let currOperator;
    let operatorUsed = false;
    let lastOperatorIndex = 0;
    let numberToReturn = 0;
    for (let i = 0; i < string.length; i++) {
        if (operatorUsed) { 
            if (OPERATORS.includes(string[i]) && !(string[i] == '-')) {
                x = operate(currOperator, x, y);
                y = ''
                currOperator = string[i]
                lastOperatorIndex = i;
            } else {
                if (isANumber(string[i]) || string[i] == '.') {
                    y += string[i];
                    if (string.length === i+1) {
                        numberToReturn = operate(currOperator, x, y);
                    }
                } else {
                    if ((lastOperatorIndex === i-1) && (string[i] === '-')) {
                        y += string[i]
                    } else{
                    numberToReturn = operate(currOperator, x, y);
                    }
                }
            }
        } else {
            if (isANumber(string[i]) || string[i] == '.') {
                x += string[i];
            } else {
                if (string[i] === "-" && i === 0) {
                    x += string[i]
                } else {
                currOperator = string[i];
                lastOperatorIndex = i;
                operatorUsed = true;
                }
            }
        }
    }
    return roundNumber(numberToReturn);
}

let deleteLastElement = (string) => {
    return string.slice(0, -1)
}

let isANumber = (x) => !isNaN(x);

let roundNumber = (x) => x.toString().length <= 4 ? x : x.toFixed(3);

let add = (x, y) => (+x + +y);
let subtract = (x, y) => (x - y);
let multiply = (x, y) => (x * y);
let divide = (x, y) => (x / y);



function operate(operator, x, y) {
    if (operator == "+") {
        return add(x, y);
    } else if (operator == "-") {
        return subtract(x, y);
    } else if (operator == "x") {
        return multiply(x, y)
    } else {
        if (y == 0) {
            alert("Dividing by zero are we?");
            return ' '
        }
    }
    return divide(x, y);
}