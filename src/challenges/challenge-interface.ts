// Challenge 1
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(value: number): number;
}

const comp: Computer = {
  id: 1,
  brand: "Dell",
  ram: 8,
  storage: 500,
  upgradeRam(value) {
    return this.ram * value;
  },
};

console.log(comp.upgradeRam(2));
console.log((comp.storage = 600));
console.log(comp);

// Challenge 2
interface Person2 {
  name: string;
}

interface DogOwner2 extends Person2 {
  dogName: string;
}

interface Manager3 extends Person2 {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): Person2 | DogOwner2 | Manager3 {
  const randomNum = Math.random();
  if (randomNum < 0.33) {
    return {
      name: "John",
    };
  } else if (randomNum < 0.66) {
    return {
      name: "Sue",
      dogName: "Scooby",
    };
  } else {
    return {
      name: "Bob",
      managePeople() {
        console.log("Manage people");
      },
      delegateTasks() {
        console.log("Delegate tasks");
      },
    };
  }
}

const employee4: Person2 | DogOwner2 | Manager3 = getEmployee();

// type predicate "is"
// special return that returns a boolean and asserts an argument is of a certain type
function isManager(obj: Person2 | DogOwner2 | Manager3): obj is Manager3 {
  return "managePeople" in obj;
}

if (isManager(employee4)) {
  employee4.managePeople();
}
