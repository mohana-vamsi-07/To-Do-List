//grab the elements
const todoText = document.getElementsByClassName("todo-text")[0];
const todoBtn = document.getElementsByClassName("todo-btn")[0];
const inputTask = document.getElementsByClassName("input-task")[0];

//function to add tasks
const addTask = (task) => {
  const listItem = document.createElement("li");
  const showItem = inputTask.appendChild(listItem);
  const taskElem = document.createElement("span");

  taskElem.innerHTML = task;
  listItem.appendChild(taskElem);
  listItem.classList.add("list-item");

  //create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "delete";
  listItem.appendChild(deleteBtn);

  //call a function when the button will be clicked
  deleteBtn.addEventListener("click", () => {
    deleteTask(deleteBtn);
  });

  //create an edit button
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "edit";
  //   add a class to identify
  editBtn.classList.add("edit");
  listItem.appendChild(editBtn);

  //call a function when the button will be clicked
  // editBtn.addEventListener("click", () => {
  //   // editTask(arrayItems, listItem);
  // });
};

const deleteTask = (deleteBtn) => {
  const chosenItem = deleteBtn.closest("li");
  inputTask.removeChild(chosenItem);
};

inputTask.addEventListener("click", function (e) {
  const target = e.target.classList.contains("edit"),
    update = e.target.classList.contains("update");
  if (target) {
    let val = e.target.parentElement.firstChild.innerHTML;
    // alert(val);
    e.target.parentElement.innerHTML = `
       <input type="text" name="todo" class="todo-text" value="${val}">
       <input type="submit" value="update" class="todo-btn update">
       `;
  }
  if (update) {
    let updatedValue = e.target.previousElementSibling.value;
    e.target.parentElement.innerHTML = `
    <li class="list-item"><span>${updatedValue}</span><button>delete</button><button class="edit">edit</button></li>
    `;
  }
});

todoBtn.addEventListener("click", () => {
  const task = todoText.value;
  if (task == "") {
    return;
  }
  addTask(task);
  todoText.value = "";
});
