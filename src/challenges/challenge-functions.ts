const namess = ["Josh", "Mary", "Peter"];
function checkIncludes(name: string): boolean {
  return namess.includes(name);
}
console.log(checkIncludes("Josh"));
console.log(checkIncludes("John"));

function processInput(input: string | number): void {
  console.log(typeof input === "string" ? input.toUpperCase() : input * 2);
}

processInput("hello");
