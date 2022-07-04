let arrUnshift = [1, 2, 3, 4, 5];
const newUnshift = (valueToUnshift, arr) => [valueToUnshift, ...arr];
const resultNew = newUnshift(0, arrUnshift);
console.log(resultNew);

let array = [1, 2, 3, 4, 5];
function letsShift() {
    let newArr = [];
    for (let i = 1; i < array.length; i++) {
        newArr[i-1] = array[i]
    }
    array = newArr;
};
letsShift()
console.log(array);

let arrPop = [1, 2, 3, 4, 5];
function pop(arrPop) {
    let finalArr = arrPop[arrPop.length - 1];
    arrPop.length = arrPop.length - 1;
  
    return finalArr;
  }
pop(arrPop);
console.log(arrPop);

let arrPush = [1, 2, 3, 4, 5];
const newPush = (valueToPush, arr) => [...arr, valueToPush];
const result = newPush(6, arrPush);
console.log(result);

