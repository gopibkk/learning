const add = (x, y = 5) => {
  return x + y;
}

console.log(add(1));
console.log(add(1, 2));

const mul = (x, y ) => {
  if(!y) y =1;
  return x * y;}

console.log(mul(1));
console.log(mul(1, 2));
