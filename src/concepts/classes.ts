class Kindle {
  public readonly title: string;
  public author: string;
  private checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  public checkOut() {
    this.checkedOut = this.toggleChekedOutStatus();
  }
  public isCheckedOut() {
    return this.checkedOut;
  }
  private toggleChekedOutStatus() {
    return !this.checkedOut;
  }
}

let kindle1 = new Kindle("The Last Wish", "Andrzej Sapkowski");
kindle1.checkOut();
console.log(kindle1.isCheckedOut());

// Shortcut: adding modifiers in the constructor
class Kindle2 {
  constructor(
    readonly title: string,
    public author: string,
    private ibnm: number
  ) {}
  public getIbnm() {
    return this.ibnm;
  }
}

let kindle2 = new Kindle2("The Last Wish", "Andrzej Sapkowski", 123456);
console.log(kindle2.getIbnm());

// Getters and Setters
class Book2 {
  private checkedOut: boolean = false;
  constructor(readonly title: string, public author: string) {}
  get info() {
    return `${this.title} by ${this.author}`;
  }
  private set checkOut(value: boolean) {
    this.checkedOut = value;
  }
  get checkOut() {
    return this.checkedOut;
  }
  public get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author}`;
  }
}

// With Interface
interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person3 implements IPerson {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const hipster = new Person3("Mark", 20);
hipster.greet();
