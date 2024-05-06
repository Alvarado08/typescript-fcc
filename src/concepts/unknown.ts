// The unknown type is a type-safe counter part of the any type
// It's like saying a variable can be anything, but we need to perform some type-checking before we use it
// "error instanceOf Error" checks if the object is an instance of the Error class
let unknownValue: unknown;
unknownValue = "10";
unknownValue = 10.456;
//unknownValue.toFixed(2);
if (typeof unknownValue === "number") {
  unknownValue.toFixed(2);
}

function runSomeCode() {
  const randomNum = Math.random();
  if (randomNum < 0.5) {
    throw new Error("Instance Error message");
  } else {
    throw "Error";
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}
