// variables 
const
    headerElements = document.querySelectorAll('.accordion-header'),
    bodyElements = document.querySelectorAll('.accordion-body');

// events

headerElements.forEach(header => {

    // all headers
    header.addEventListener('click', () => {

        // if the header has active class
        // class close All items function
        if (header.parentElement.children[1].classList.contains("active")) {
            closeAllItems()
            header.parentElement.children[1].classList.remove("active")

        }
        
        // if the header doesn't have active class
        // class close All items function
        else {
            closeAllItems()
            header.parentElement.children[1].classList.add("active")
        }
    })
})

// TITLE: close all items
// closes all body elements
function closeAllItems() {
    bodyElements.forEach(body => {
        body.classList.remove("active")
    })
}