//Exercise 1: Applying Array.prototype.map
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const doubledNums = nums.map(num => num * 2);
console.log(doubledNums); // Logs: [26, 174, 4, 178, 24, 8, 180, 126]

//Exercise 2: Array destructuring
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping); // 'Pineapple'
console.log(secondTopping); // 'Olives'

//Exercise 3: Destructuring objects
const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  const { make, model } = car;
  console.log(make); // 'Audi'
  console.log(model); // 'q5'

  //Exercise 4: Applying the spread operator on arrays
  const Pizzatoppings = ['Pineapple', 'Olives', 'Anchovies'];
const controversialPizzaToppings = [...pizzaToppings];
console.log(controversialPizzaToppings); // ['Pineapple', 'Olives', 'Anchovies']

//Exercise 5: Applying the spread operator on objects
const Car = {
    make: 'Audi',
    model: 'q5',
  };
  
  const myCar = { ...car, model: 'q7' };
  console.log(car); // { make: 'Audi', model: 'q5' }
  console.log(myCar); // { make: 'Audi', model: 'q7' }

  //Exercise 6: Dynamic keys in objects
  const propertyName = 'username';
const userProfile = {
  [propertyName]: 'john_doe',
};
console.log(userProfile); // { username: 'john_doe' }

//Exercise 7: Import and Export
//Named exports: For exporting multiple items from a file:
export const myNumber = 123;
export const myString = 'Hello';

//Default exports: For exporting a single item from a file:
export default function superCoolFunction() {
  /* ... */
}

//Exercise 8: Default parameters
function describeAnimal(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
  }
  
  describeAnimal(); // Logs: 'The cat is white.'
  describeAnimal('dog', 'black'); // Logs: 'The dog is black.'
  
  //Exercise 9: Ternary operator
  let pizza = 'tasty';
pizza === 'tasty' ? console.log('yum') : console.log('yuck');

//Exercise 10: Boolean gates
// Language setting
const localLangConfig = null;  // Change as needed
const LANG = localLangConfig || 'en';
console.log('Language setting:', LANG); // Logs: 'en'

// Website theme setting
const userSavedTheme = null;  // Change as needed
const USER_THEME = userSavedTheme || 'light';
console.log('User theme setting:', USER_THEME); // Logs: 'light'

//Exercise 11: Optional chaining
const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.age; // Optional chaining applied
  console.log(cat); // Logs: undefined
  

  
