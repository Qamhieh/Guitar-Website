const dropdown = document.getElementById("drpdwn-id");
const button = dropdown.querySelector(".drpdwn-button");

button.addEventListener("click", () => {
  dropdown.classList.add("open");
});
