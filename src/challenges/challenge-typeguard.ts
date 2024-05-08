// typeof guard challenge
type ValueType = string | number | boolean;
let value2: ValueType;
const random = Math.random();
value2 = random < 0.33 ? "Hello" : random < 0.66 ? 10.3546 : false;
function checkValue(value: ValueType): void {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else if (typeof value === "boolean") {
    console.log(`bolean: ${value}`);
  }
}

checkValue(value2);

// equality narrowing challenge
type Dog = {
  type: "dog";
  breed: string;
  bark: () => void;
};
type Cat = {
  type: "cat";
  breed: string;
  meow: () => void;
};
type Animal2 = Dog | Cat;

// Option 1
// function makeSound(animal: Animal2): void {
//   if (animal.type === "dog") {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// Option 2
function makeSound(animal: Animal2): void {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}
