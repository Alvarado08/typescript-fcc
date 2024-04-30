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

// Intersection
type Book = { id: number; name: string; price: number };
// Method 1
type DiscountedBook = Book & { discount: number };

const book1: Book = { id: 1, name: "book1", price: 10 };
const book2: Book = { id: 2, name: "book2", price: 20 };
// Method 2
const discountedBook: DiscountedBook = {
  id: 3,
  name: "book3",
  price: 30,
  discount: 10,
};

// Computed properties
const propName = "age";
type Animal = {
  [propName]: number;
};
const tiger: Animal = { [propName]: 10 };
