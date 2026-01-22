// --- FOOTER LOGIC (if any) ---
console.log("Footer loaded");

// 1. Find all dropdown wrappers on the page
const allDropdowns = document.querySelectorAll('.drpdwn-tunings');

allDropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.drpdwn-button');

    // Toggle this specific dropdown when its button is clicked
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Optional: Close other open dropdowns first
        allDropdowns.forEach(other => {
            if (other !== dropdown) other.classList.remove('active');
        });

        dropdown.classList.toggle('active');
    });
});

// 2. Global click-away logic to close all menus
document.addEventListener('click', () => {
    allDropdowns.forEach(dropdown => dropdown.classList.remove('active'));
});

// BROWSINGPAGE-make mouse scroll sideways
const scrollContainer = document.querySelector('.drpdwn-panel');

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});