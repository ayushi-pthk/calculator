let display = document.getElementById('display');
let currentOperation = '';
let previousOperation = '';

function append(number) {
	display.value += number;
}

function operate(operator) {
	currentOperation += display.value;
	display.value = '';
	currentOperation += operator;
}

function equals() {
	currentOperation += display.value;
	display.value = eval(currentOperation);
	currentOperation = '';
}

function clr() {
	display.value = '';
	currentOperation = '';
}
function backspace() {
        currentOperation += display.value;
        display.value = display.value.slice(0, -1)
     
}
document.addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		equals();
	} else if (event.key === 'Backspace') {
		clear();
	}
});