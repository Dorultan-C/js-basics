// objects literal 
console.log('Hello World');
let mortal = {
  name:'Cristian',
  age: 30,
  color: 'brown',
  hopikake: 'bufnita',
  ceapa: null
};

mortal.hopikake = 'triunghi';

console.log(mortal.name);
console.log(mortal.age);

//arrays

let colorCascade = ['red', 'green', 'blue', 'violet'];

console.log(colorCascade[0]);

colorCascade[4] = 'pink';
colorCascade[3] = 'black';


console.log(colorCascade[4]);

console.log(colorCascade);

// functions

function greet(name, lastName) {
  console.log('Hello ' + name + '  ' + lastName )
}

greet('Jhon', 'Smith');

