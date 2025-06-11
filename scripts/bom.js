const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Initialize chaptersArray with existing data or an empty array
let chaptersArray = getChapterList() || [];

// Populate existing chapters on load
chaptersArray.forEach(chapter => displayList(chapter));

// Button event listener
button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

// Function to display a chapter with a delete button
function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");

    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");

    li.append(deleteButton);
    list.append(li);

    // Delete functionality
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
}

// Function to update localStorage
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// Function to retrieve chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

// Function to delete a chapter from the array & localStorage
function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
