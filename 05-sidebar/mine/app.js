const sidebarBtnEl = document.querySelector('button.sidebar-toggle');
const sideBarEl = document.querySelector('aside.sidebar');
const closeXBtnEl = document.querySelector('button.close-btn');

let toggleSidebar = () => {
    sideBarEl.classList.toggle('show-sidebar');
}

sidebarBtnEl.addEventListener('click', toggleSidebar);
closeXBtnEl.addEventListener('click', toggleSidebar);