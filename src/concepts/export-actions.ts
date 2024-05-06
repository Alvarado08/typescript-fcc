export function greetingTs(name: string): void {
  console.log(`Hello, ${name}!`);
}

export let person: string = "susan";

export type Student3 = {
  name: string;
  age: number;
};

const aStudent: Student3 = {
  name: "mark",
  age: 20,
};

export default aStudent;
