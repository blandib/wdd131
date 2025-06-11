products = [
    {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
]
function populateProductSelect() {
    const selectElement = document.getElementById("productSelect");
    products.forEach(products => {
        let option = document.createElement("option");
        option.value = products.name;
        option.textContent = products.name;
        selectElement.appendChild(option);
    });
}populateProductSelect();
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the current count from localStorage (or initialize it to 0)
    let reviewCount = localStorage.getItem("reviewCount") ? parseInt(localStorage.getItem("reviewCount")) : 0;

    // Increment the count
    reviewCount++;

    // Store the updated count in localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Display the count somewhere on the page (assuming an element with id="reviewCounter" exists)
    document.getElementById("reviewCounter").textContent = `Total Reviews Submitted: ${reviewCount}`;
});
