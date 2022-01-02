/*
The filter method iterates over an array and returns a new array
with the elements that meet the requirments placed.
*/

const numberList = [1, 3, 5, 7, 9, 11, 13];

const lessThn5 = numberList.filter(num => num < 5);

console.log(lessThn5);