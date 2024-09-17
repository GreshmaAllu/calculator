document.addEventListener('DOMContentLoaded', function () {
    const outputScreen = document.getElementById('output-screen');

    function display(value) {
        outputScreen.value += value;
    }

    function calculate() {
        try {
            outputScreen.value = eval(outputScreen.value);
        } catch (err) {
            alert('Invalid Input');
            outputScreen.value = '';
        }
    }

    function clearScreen() {
        outputScreen.value = '';
    }

    function deleteLast() {
        outputScreen.value = outputScreen.value.slice(0, -1);
    }


    document.querySelectorAll('.calculator button').forEach(button => {
        button.addEventListener('click', function () {
            const value = this.innerText;

            if (value === 'Cl') {
                clearScreen();
            } else if (value === 'DEL') {
                deleteLast();
            } else if (value === '=') {
                calculate();
            } else {
                display(value);
            }
        });
    });
});

