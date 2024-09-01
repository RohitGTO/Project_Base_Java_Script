(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // Loop through each button and add an event listener
    buttons.forEach(function(button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num; // get the data-num value from the button
            if (value !== undefined) { // check if value is defined
                screen.value += value; // append value to the screen
            }
        });
    });

    // Add an event listener for the equal button
    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "";
        } else {
            try {
                let answer = eval(screen.value); // calculate the answer
                screen.value = answer;
            } catch (error) {
                screen.value = "Error"; // show error if the calculation fails
            }
        }
    });

    // Add an event listener for the clear button
    clear.addEventListener('click', function (e) {
        screen.value = ""; // clear the screen
    });
})();