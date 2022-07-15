function submenu(index) {
    const submenu = document.querySelectorAll('.menu-item > .menu')[index];

    if (!submenu) {
        return console.log('Submenu não encontrado!');
    }

    if (submenu.classList.contains('open')) {
        submenu.classList.remove('open');
        submenu.classList.add('close');
    } else {
        submenu.classList.remove('close');
        submenu.classList.add('open');
    }
}

// const btn = document.getElementById('btn');

// btn.addEventListener('click', function () {
//     submenuToggle(1);
// });
