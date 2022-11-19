let input = document.querySelector('#input');
// const numberOne = document.getElementById('number-1');
// const numberTwo = document.getElementById('number-2');

const clear = document.getElementById('clearBtn');
// const buttons = document.querySelectorAll('.all-buttons > .button')

clear.addEventListener('click', () => {
    input.textContent = ''
})

numberOne.addEventListener('click', () => {
    input.textContent += 1;
})

numberTwo.addEventListener('click', () => {
    input.textContent += 2;
})
function start() {
    console.log(buttons);
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttonsHandler(button);
            console.log("fuck");
        });
    });
};

let add = (x, y) => (x + y);
let subtract = (x, y) => (x - y);
let multiply = (x, y) => (x * y);
let divide = (x, y) => (x / y);

function operate(operator, x, y) {
    operator == "+" ? add(x, y) : operator == "-" ? subtract(x, y)
    : operator == "*" ? multiply(x, y) : y === 0 ? null : divide(x, y)
}

start();