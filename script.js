const displayField = document.getElementById('display-field');
const numBtn = document.querySelectorAll(".btn-num");
const buttonOpr = document.querySelectorAll(".btn-opr");
const clear = document.getElementById("clear");
const equalBtn = document.getElementById("equal-btn");



document.addEventListener('DOMContentLoaded', function() {
    numBtn.forEach(button => {
        button.addEventListener('click', () => {
            displayField.value += button.textContent;
        });
    });


    buttonOpr.forEach(button => {
        button.addEventListener('click', () => {
            displayField.value += button.textContent;
        });
    });
    
    
    equalBtn.addEventListener('click', () => {
        const result =  eval(displayField.value.replace(/[^0-9+/*-.]/g, ""));
        displayField.value = eval(result);
    });
});

