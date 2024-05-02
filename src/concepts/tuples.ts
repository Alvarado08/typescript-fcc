let person1: [string, number] = ["Helen", 20];

let date: readonly [number, number, number] = [2020, 10, 10];
//if we don't add readonly, we can add items of type numbers to the array
//date.push(2021);

function getPerson(): [string, number] {
  return ["Jill", 20];
}

const aPerson = getPerson();
console.log(aPerson[0]);

// Optional Tuples
const aPerson2: [string, number?] = ["Jill"];
