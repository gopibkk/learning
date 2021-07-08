
// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43
// }

// const {age, ...rest} = user;
// console.log(age, rest);


// let someArray = [1, 2, 3, 4, 5, 6, 7, 8];

// const [x, y, ...rest1] = someArray;

// console.log(rest1);



// var obj1 = { a: 1, b: 2 } ;// declares an object that has 2 properties a and b
// var obj2 = { a: 2, c: 3, d: 4} ;// declares an object that has 3 properties a, c and d
// var obj3 = Object.assign(obj1, obj2);
// const cobj3 = {...obj1, ...obj2}
// console.log (obj3);

// console.log(cobj3);

// const books = ["fiction", ["horror", "literary"], "science"];

// const [fiction, [horror, literary],science] = books;

// console.log(fiction);
// console.log(horror);
// console.log(literary);
// console.log(science);

// // Section 2: Object Destructuring

// const Student = {
//   firstName: "Joe",
//   university: "MIT",
//   studentInfo: {
//     studentid: 555,
//   },
// };

// const { firstName } = Student;
// const { university } = Student;
// const { studentInfo : {studentid} } = Student;
// console.log(firstName);

// console.log(university);
// console.log(studentid);


// // Different way to access elements from an array
// const food = ['pizza', 'burger', 'fries', 'ice cream'];
// const [pizza, , , iceCream] = food;
// console.log(pizza);
// console.log(iceCream);

// Different way to access elements from an object
const person = {
  name: 'Anthony',
  hobbies: ['reading', 'video games'],
  age: 99,
  education: {
    highSchool: {
      name: 'hogwarts',
      graduated: true,
    },
    college: {
      name: 'MIT',
      graduated: true,
    }
  }
};

const {name, ...rest} = person;
console.log(name);
console.log(rest);

// const { age } = person;
// const { name: myName } = person;
// console.log(age);

// console.log(myName);

// const { education: { highSchool: { name: highSchoolName } } } = person;
// console.log(highSchoolName);

// const sayHello = ({ name }) => console.log(`Hello from ${name}`);
// sayHello(person);


// // json.stringify(person)
