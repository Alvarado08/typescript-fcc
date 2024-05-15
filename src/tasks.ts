//check if element is null
const btn = document.querySelector(".btn");
btn?.addEventListener;
if (btn) {
}

//non-null assertion operator(!) w/ButtonElement generic
const btn1 = document.querySelector<HTMLButtonElement>(".btn")!;
btn1.disabled = true;

//type assertion
const btn2 = document.querySelector(".btn")! as HTMLButtonElement;
btn2.disabled = true;
