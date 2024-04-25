let bike: { brand: string; year: number } = {
  brand: "Yamaha",
  year: 2010,
};
//bike.year = "2020";

let laptop: { brand: string; year: number } = {
  brand: "Dell",
  year: 2012,
};
/*let laptop2: { brand: string; year: number } = {
    brand: "Dell",
};
*/

let product1 = { brand: "prod1", price: 20 };
let product2 = { brand: "prod2", price: 40 };
let products: { brand: string; price?: number }[] = [product1, product2];
//products.push({ brand: "prod3",price: "60" });
products.push({ brand: "prod3" });
