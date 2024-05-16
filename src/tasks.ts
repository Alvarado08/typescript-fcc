//*Handling elements
//check if element is null
// const btn = document.querySelector(".btn");
// btn?.addEventListener;
// if (btn) {
// }

//non-null assertion operator(!) w/ButtonElement generic
// const btn1 = document.querySelector<HTMLButtonElement>(".btn")!;
// btn1.disabled = true;

//type assertion
// const btn2 = document.querySelector(".btn")! as HTMLButtonElement;
// btn2.disabled = true;

const formEl = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".input");
const btnEl = document.querySelector<HTMLButtonElement>(".btn-primary");

const listEl = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  completed: boolean;
};

const tasks: Task[] = loadTasks();
tasks.forEach(renderTask);

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function createTask(e: SubmitEvent) {
  e.preventDefault();
  const taskInput = formInput?.value;
  if (taskInput) {
    const task: Task = {
      description: taskInput,
      completed: false,
    };
    addTask(task);
    renderTask(task);
    updateStorage();
    formInput.value = "";
    return;
  }
  alert("Please enter a task!");
}

function addTask(task: Task): void {
  tasks.push(task);
}

function renderTask(task: Task): void {
  const taskEl = document.createElement("li");
  taskEl.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "p-3",
    "shadow-sm",
    "rounded-md",
    "bg-accent",
    "text-black",
    "w-full",
    "mb-3"
  );
  taskEl.textContent = task.description;
  const taskCheckBox = document.createElement("input");
  taskCheckBox.classList.add("checkbox", "checkbox-primary");
  taskCheckBox.type = "checkbox";
  taskCheckBox.checked = task.completed;
  taskCheckBox.addEventListener("change", () => {
    task.completed = !task.completed;
    updateStorage();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-error");
  deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`;

  const divActions = document.createElement("div");
  divActions.classList.add("flex", "items-center", "gap-3");

  divActions.appendChild(taskCheckBox);
  divActions.appendChild(deleteBtn);
  taskEl.appendChild(divActions);
  listEl?.appendChild(taskEl);

  deleteBtn.addEventListener("click", () => {
    taskEl.remove();
    deleteTask(task);
  });
}

function deleteTask(task: Task): void {
  tasks.splice(tasks.indexOf(task), 1);
  updateStorage();
}

function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

formEl?.addEventListener("submit", createTask);
