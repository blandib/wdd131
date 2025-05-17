const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    // Create new elements inside the event listener
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    // Populate elements
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete"); // Optional: Add a class for styling

    // Append delete button to li
    li.append(deleteButton);
    // Append li to the list
    list.append(li);

    // Add event listener to delete the item when button is clicked
    deleteButton.addEventListener("click", function () {
      list.removeChild(li);
      input.focus();
    });

    // Clear input and refocus
    input.value = "";
    input.focus();
  }
});
