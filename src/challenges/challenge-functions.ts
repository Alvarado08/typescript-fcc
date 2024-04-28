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

function processData(
  input: string | number,
  obj: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "string") {
    if (obj.reverse) {
      return input.toUpperCase().split("").reverse().join("");
    }
    return input.toUpperCase();
  } else {
    return input * input;
  }
}
console.log(processData("works"));
console.log(processData("hellooo", { reverse: true }));
console.log(processData(10));
