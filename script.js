const nav = document.querySelector('.main-nav');
const menuButton = document.querySelector('.menu-button');
const dropdown = document.querySelector('.nav-dropdown');
const toggle = document.querySelector('.nav-dropdown-toggle');
function closeDropdown() {
  if (!dropdown || !toggle) return;
  dropdown.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
}
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    if (!open) closeDropdown();
  });
}
if (toggle && dropdown) {
  toggle.addEventListener('click', () => {
    const open = dropdown.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) closeDropdown();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { closeDropdown(); toggle.focus(); }
  });
}
