document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');
    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === 'clear') {
                expression = '';
            } else if (button.id === 'backspace') {
                expression = expression.slice(0, -1);
            } else if (button.id === 'equals') {
                try {
                    expression = eval(expression);
                } catch {
                    expression = 'Error';
                }
            } else {
                expression += button.textContent;
            }
            display.value = expression;
        });
    });
});
