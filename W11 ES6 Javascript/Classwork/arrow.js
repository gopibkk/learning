function add(x, y) {
  return x + y;
}

console.log(add(1, 2));

const anotherAdd = (x, y) => {
  return x + y;
}

console.log(anotherAdd(1, 2));

const finalAdd = (x, y) => x + y;

console.log(finalAdd(1, 2));

const sayHello = name => 'Hello ' + name;

console.log(sayHello('ant'));

//When there is no parameter for fat arrows, can we omit the parenthesis instead of () =>  ? This link was helpful, but I don't know if its correct.  https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/es6%20&%20beyond/fig1.png

const bye = () => 'bye';
console.log(bye());



