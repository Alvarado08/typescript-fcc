// Interface allows to setup the shape of an object (only objects)
interface Magazine {
  readonly isbn: number;
  title: string;
  price: number;
  genre?: string;
  printTitle(): void;
  printPrice(message: string): string;
  // Alternative way to define methods: as a property
  // Not be confused with arrow function. It's just the syntax
  printSomething: (value: number) => number;
}

const deepWork: Magazine = {
  isbn: 1234,
  title: "Deep Work",
  price: 10,
  // Setup option 1
  printTitle() {
    console.log(this.title);
  },
  // Setup option 2
  //   printTitle: () => {
  //     console.log(deepWork.title);
  //   },
  printPrice(message) {
    return `${message} ${this.price}`;
  },
  // Setup option 1
  //   printSomething: function (value) {
  //     return value;
  //   },
  // Setup option 2
  //   printSomething: (value) => value,
  printSomething: (value) => {
    // Unlike function declarations, arrow functions capture the global scope
    console.log(deepWork.title);
    return value;
  },
  // Setup option 3
  // Define it exactly like in the interface
  //   printSomething(value) {
  //     return value;
  //   },
};

deepWork.printTitle();
deepWork.printPrice("The price is: ");

// Interface merging
interface Person {
  name: string;
  getDetails(): string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "John",
  age: 27,
  getDetails() {
    return `${this.name} is ${this.age} years old`;
  },
};
console.log(person.getDetails());

// Interface extending
interface Employee2 extends Person {
  id: number;
}

const employee3: Employee2 = {
  id: 1,
  name: "Sue",
  age: 27,
  getDetails() {
    return `${this.name} id is ${this.id}`;
  },
};

interface DogOwner {
  dogName: string;
  getDogName(): void;
}

interface Manager2 extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager2 = {
  name: "Bob",
  age: 30,
  dogName: "Scooby",
  getDetails() {
    return `${this.name} is ${this.age} years old`;
  },
  getDogName() {
    console.log(this.dogName);
  },
  managePeople() {
    console.log("Manages 20 people");
  },
};
