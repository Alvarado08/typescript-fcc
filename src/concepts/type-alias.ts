// type alias can also be exported
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const John: User = {
  id: 1,
  name: "John",
  isActive: true,
};

function createUser(user: User): User {
  return user;
}

// type alias can be used for union types
type StringOrNumber = number | string;
let value: StringOrNumber;
value = 10;
value = "10";

// type alias can be used for values
type Theme = "light" | "dark";
let theme: Theme = "light";

function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark");
