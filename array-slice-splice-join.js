const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//const part = numbers.slice(0, 5);

// const removed = numbers.splice(1, 4)
const removed = numbers.splice(1, 4, 99)
// console.log(removed);
// console.log(numbers);

const together =numbers.join("Ami")
console.log(together);