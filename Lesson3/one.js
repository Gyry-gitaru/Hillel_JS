const numberFirst = parseInt(prompt('Please, enter first number'));
const numberSecond = parseInt(prompt('Please, enter second number'));

const start = numberFirst > numberSecond ? numberSecond : numberFirst;
const end = numberFirst > numberSecond ? numberFirst : numberSecond;

for(i = start; i <= end; i++) {
    alert(i);
}

