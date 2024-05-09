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

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

function processValue<T extends string | number>(value: T): T {
  return value;
}

type Student5 = {
  name: string;
  age: number;
};

type Product = {
  name: string;
  price: number;
};

const student5: Student5 = {
  name: "Josh",
  age: 20,
};

const product: Product = {
  name: "Book",
  price: 10,
};

function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName(student5);
printName(product);

interface StoreData<T = any> {
  data: T[];
}

const storeNums: StoreData<number> = {
  data: [1, 2, 3],
};

const storeSomething: StoreData = {
  data: ["Hello", false],
};
