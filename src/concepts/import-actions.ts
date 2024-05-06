// a common workflow or file structure is to define types in a separte file and import them
import aStudent, { greetingTs, person, type Student3 } from "./export-actions";

greetingTs("Jake");
console.log(aStudent);
console.log(person);

const anotherStudent: Student3 = {
  name: "john",
  age: 20,
};
console.log(anotherStudent);
