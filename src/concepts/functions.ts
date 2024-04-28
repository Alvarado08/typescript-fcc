function sayHi(name: string) {
  return `Hi ${name}!`;
}

function sum(a: number, b: number): number {
  return a + b;
}
const sum1 = sum(1, 2);

// Optional Parameters
function calculateDiscount(price: number, discount?: number): number {
  return price - (discount || 0);
}

// Default Parameters
function calculateTotal(price: number, tax: number = 10): number {
  return price - tax;
}

// Rest Parameters
function calculateSum(message: string, ...numbers: number[]): string {
  let total = numbers.reduce((a, b) => a + b, 0);
  return `${message} ${total}`;
}

let result = calculateSum("sum: ", 1, 2, 3, 4, 5);
console.log(result);

// Void
function sayHello(): void {
  console.log("Hello, Typescript!");
  // return "Hello, Typescript!";
}

// Object Parameters
// Destructuring id
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}
const employee = createEmployee({ id: 1 });
const employee2 = createEmployee({ id: 2 });

// Object Parameters alternative
// Naming object
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name}`);
}
const newStudent = {
  id: 1,
  name: "John",
  //email: "j@j.com",
};
createStudent(newStudent);

// Excess Property Check gotcha
//! If an inline object is passed as an argument, any properties that are not defined in the object will be complained about
//? However, if a referenced object is passed as an argument, the properties that are not defined in the object will not be complained about i.e. line 51-55
// createStudent({ id: 1, name: "John", age: 20 });
