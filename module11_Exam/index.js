// 1. findMax
function findMax(arr) {
  return Math.max(...arr);
}
console.log("findMax:", findMax([1, 5, 2, 9, 3])); // 9

// 2. countWords
function countWords(str) {
  if (!str.trim()) return 0;
  return str.trim().split(/\s+/).length;
}
console.log("countWords:", countWords("Hello developers welcome")); // 3

// 3. calculateDifference
function calculateDifference(a, b) {
  return a - b;
}
console.log("calculateDifference:", calculateDifference(10, 4)); // 6

// 4. filterEvenNumbers
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log("filterEvenNumbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2,4,6]

// 5. sortArrayDescending
function sortArrayDescending(arr) {
  return [...arr].sort((a, b) => b - a);
}
console.log("sortArrayDescending:", sortArrayDescending([3, 9, 1, 7])); // [9,7,3,1]

// 6. isLeapYear
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("isLeapYear 2020:", isLeapYear(2020)); // true
console.log("isLeapYear 1900:", isLeapYear(1900)); // false
console.log("isLeapYear 2000:", isLeapYear(2000)); // true

// 7. reverseString
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("reverseString:", reverseString("JavaScript")); // "tpircSavaJ"

// 8. sumArray
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log("sumArray:", sumArray([1, 2, 3, 4, 5])); // 15
