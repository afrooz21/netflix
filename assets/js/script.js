// variables 
const
    headerElements = document.querySelectorAll('.accordion-header');

// events

headerElements.forEach(header => {
    // all headers
    header.addEventListener('click', () => {
        if (header.parentElement.children[1].getAttribute("data-is-open") == "false") {
            header.parentElement.children[1].setAttribute("data-is-open", "true")
            header.parentElement.children[1].classList.add("active")
        } else {
            header.parentElement.children[1].classList.remove("active")
            header.parentElement.children[1].setAttribute("data-is-open", "false")
        }
    })
})