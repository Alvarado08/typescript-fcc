let tax: number | string = 10;
tax = "10%";
tax = 10;

let requestStatus: "success" | "error" | "pending" = "pending";
requestStatus = "error";
requestStatus = "pending";
//requestStatus = "random";

const books = ["book1", "book2", "book3"];

let foundBook: string | undefined;

for (let book of books) {
  foundBook = book;
  foundBook = foundBook.toUpperCase();
  break;
}
console.log(foundBook?.length, foundBook);
