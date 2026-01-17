const dropdown = document.getElementById("drpdwn-id");
const button = dropdown.querySelector(".drpdwn-button");
const panel = dropdown.querySelector(".drpdwn-panel");

// OPEN
button.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent immediate close
  dropdown.classList.add("open");
});

// CLOSE when clicking ANYWHERE outside the panel
document.addEventListener("click", (e) => {
  if (!dropdown.classList.contains("open")) return;

  // if the click is NOT inside the options panel
  if (!panel.contains(e.target)) {
    closeDropdown();
  }
});

// prevent clicks INSIDE the panel from bubbling
panel.addEventListener("click", (e) => {
  e.stopPropagation();
});

function closeDropdown() {
  dropdown.classList.add("closing");

  setTimeout(() => {
    dropdown.classList.remove("open", "closing");
  }, 300);
}
