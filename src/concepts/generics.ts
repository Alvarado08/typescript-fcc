// Generics are variables for types
// Allow us to write functions with any data type
// In a way, provides an alternative syntax for types
// We can use it to create/construct reusable components
let numItems: Array<number> = [1, 2, 3];

function genericFunction<T>(value: T): T {
  return value;
}

let someStringValue = genericFunction<string>("Hello");
let someNumberValue = genericFunction<number>(10);

interface genericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: genericInterface<string> = {
  value: "Hello",
  getValue: () => {
    return "Hello Generics";
  },
};

async function someFunc(): Promise<string> {
  return "Fullfilled";
}

function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

function createArray<T>(length: number, value: T): T[] {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray<string>(10, "Hello");
let arrayNumbers = createArray<number>(10, 10);
