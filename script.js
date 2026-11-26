

const serviceMenuToggle = document.querySelector('.nav-dropdown-toggle');
if (serviceMenuToggle) { serviceMenuToggle.addEventListener('click', () => { const dropdown = serviceMenuToggle.closest('.nav-dropdown'); const open = dropdown.classList.toggle('is-open'); serviceMenuToggle.setAttribute('aria-expanded', String(open)); }); }
