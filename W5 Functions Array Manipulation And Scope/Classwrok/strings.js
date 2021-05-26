const myName = 'Gopinath';

console.log(myName.length);
console.log(myName[0]);

for (let i = 0; i < myName.length; i++) {
  const char = myName[i];
  console.log(char);
}

console.log(myName.indexOf('a'));
console.log(myName.indexOf('z'));

console.log(myName.slice(0, 4));

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

console.log(myName.replace('nath', 'Nathan'));

const sentence = myName + ' is cool!';
console.log(sentence);
const anotherSentence = `${myName} is really really cool`;
console.log(anotherSentence);
