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
