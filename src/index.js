const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");

let itemCount = 1;

addButton.addEventListener("click", function () {
  const listItem = document.createElement("li");
  listItem.textContent = "List Item " + itemCount;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  listItem.appendChild(deleteButton);
  listContainer.appendChild(listItem);

  itemCount++;
});

listContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    const listItem = event.target.closest("li");
    listItem.remove();
  }
});
