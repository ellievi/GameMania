function submenuToggle(index) {
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

function submitform(event) {
    //prevent event
    event.preventDefault()
 
    //convert event to object FormData
    const formData = new FormData(event.target);
    //Join keys and values in object
    const formProps = Object.fromEntries(formData);
    //show data
    console.log(formProps)

    //prevent reload page
    return false;
}

// pre/nxt btn function
const productsContainer = document.querySelectorAll('.container-produtos');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

productsContainer.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidht = containerDimensions.width;

    nxtBtn[i].addEventListener('click',() => {
        item.scrollLeft += containerWidht;
    })
    
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidht;
    })
})



// console.log(productsContainer.length);