// variables 
const
    headerElements = document.querySelectorAll('.accordion-header'),
    bodyElements = document.querySelectorAll('.accordion-body'),
    headerIcon = document.querySelectorAll('.header-icon');

// events

headerElements.forEach(header => {

    // all headers
    header.addEventListener('click', () => {
        
        // if the header has active class
        // calls close All items function
        if (header.parentElement.children[1].classList.contains("active")) {
            closeAllItems()
            header.parentElement.children[1].classList.remove("active")
            header.children[1].classList.remove("rotate")
        }

        // if the header doesn't have active class
        // calls close All items function
        else {
            closeAllItems()
            header.parentElement.children[1].classList.add("active")
            header.children[1].classList.add("rotate")
        }
    })
})

// TITLE: close all items
// closes all body elements
function closeAllItems() {
    bodyElements.forEach(body => {
        body.classList.remove("active")
    })
    headerIcon.forEach(icon =>{
        icon.classList.remove("rotate")
    })
}