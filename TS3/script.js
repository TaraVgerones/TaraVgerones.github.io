const display = document.querySelector('#display-input');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        let buttonValue = item.id; // Get the button ID (which is the value)
        
        if (buttonValue === 'clear') {
            display.value = ''; // Clear the display
        } else if (buttonValue === 'backspace') {
            display.value = display.value.slice(0, -1); // Remove last character
        } else if (buttonValue === 'equal') {
            try {
                display.value = eval(display.value); // Evaluate the expression
            } catch (error) {
                display.value = 'Error';
                setTimeout(() => (display.value = ''), 2000);
            }
        } else if (buttonValue === 'decimal') {
            if (!display.value.includes('.')) {
                display.value += '.'; // Add decimal only if not present
            }
        } else {
            display.value += buttonValue; // Append number/operator to display
        }
    };
});
