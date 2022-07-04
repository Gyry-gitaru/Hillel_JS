const arrLength = parseInt(prompt('Please, enter size your array'));
const array = [];


if (!Number(arrLength)) {
        alert("Enter numbers please");
        window.location.reload();
}

for (let i = 0; i < arrLength; i++) {
    const arr = parseInt(prompt('Please, enter numbers for your array'));
    console.log(typeof arr);
    if (!isNaN(arr)) {
        array.push(arr);
    } else {
        alert ('Please, enter only numbers for your array');
    }
}

alert('Your numbers' + ' ' + array);
console.log(array);


let minIndex = 0;
let minValue = Number.MAX_SAFE_INTEGER;
let maxIndex = 0;
let maxValue = Number.MIN_SAFE_INTEGER;



for (let i = 0; i < arrLength; i++) {
    if (array[i] < minValue) {
        minValue = array[i];
        minIndex = i;
    }

    if (array[i] > maxValue) {
        maxValue = array[i];
        maxIndex = i;
    }
}
array[minIndex] = maxValue;
array[maxIndex] = minValue;
console.log(array);

alert(`Your min number: ${minValue}; max number: ${maxValue}; new array: ${array};`)




