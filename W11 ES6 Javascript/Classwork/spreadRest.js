// const terrestrials = ["fox", "lion", "elephant"];
// const aquatics = ["shark", "whale", "octopus"];

// const allAnimals = [...terrestrials,...aquatics];

// console.log(allAnimals);

function sumAll(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum += number;
  }
  return sum;
}

console.log(sumAll(1, 2)); // expected output: 3
console.log(sumAll(1, 2, 3)); // expected output: 6
console.log(sumAll(1, 2, 3, 4));

// const set = [1, 2];
// const anotherSet = [3, 4];
// const union = [...set, ...anotherSet];
// console.log(union);

// const foo = {
//   bar: 'baz',
//   number: 42,
// };
// const boo = {
//   bar: 'bot',
//   alive: false,
// };

// const fooBoo = {
//   ...foo,
//   ...boo,
// };
// console.log(fooBoo);

// function add(...params) {
//   let sum = 0;
//   for (let i = 0; i < params.length; i++) {
//     const element = params[i];
//     sum += element;
//   }
//   return sum;
// }

// const anotherAdd = (x, y, z) => x + y + z;

// console.log(add(1, 2, 3));
// console.log(add(1));
// console.log(add(1, 2, 3, 4, 5, 6, 7, 8));

// console.log(anotherAdd(...[3, 4, 5]));
