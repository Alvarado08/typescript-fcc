let cars: { brand: string; year: number } = {
  brand: "Ford",
  year: 2010,
  //color: "blue"
};

let book = { title: "book", cost: 10 };
let pen = { title: "pen", cost: 5 };
let notebook = { title: "notebook" };

let supplies: { readonly title: string; cost?: number }[] = [
  book,
  pen,
  notebook,
];
//supplies[0].title = "New name";
