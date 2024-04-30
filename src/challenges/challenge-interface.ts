interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(value: number): number;
}

const comp: Computer = {
  id: 1,
  brand: "Dell",
  ram: 8,
  storage: 500,
  upgradeRam(value) {
    return this.ram * value;
  },
};

console.log(comp.upgradeRam(2));
console.log((comp.storage = 600));
console.log(comp);
