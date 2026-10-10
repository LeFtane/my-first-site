// An array of objects, like a Python list of dicts
let tasks = [];

const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");

function render() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("done");

    const text = document.createElement("span");
    text.textContent = task.text;
    text.addEventListener("click", () => {
      tasks[index].done = !tasks[index].done;
      render();
    });

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      tasks.splice(index, 1);
      render();
    });

    li.append(text, del);
    list.appendChild(li);
  });
}

function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  tasks.push({ text: text, done: false });
  input.value = "";
  render();
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});