// never is a type that represents the type of values that never occur
// you can't assign any value to a variable of type never
// Ts will give a compile error if there are any unhandled cases
// let neverValue: never = 0;

type Theme2 = "light" | "dark";

function checkTheme2(theme: Theme2): void {
  if (theme === "light") {
    console.log("light");
    return;
  }
  if (theme === "dark") {
    console.log("dark");
    return;
  }
  theme;
}

enum Color {
  Red,
  Green,
  Blue,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return "red";
    case Color.Green:
      return "green";
    case Color.Blue:
      return "blue";
    default:
      // at build time
      let unexpectedColor: never = color;
      // at runtime
      throw new Error(`Unexpected color: ${color}`);
  }
}
console.log(getColorName(Color.Red));
//console.log(getColorName(Color.Yellow));
