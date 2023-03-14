// header language selection drop down menu

// selectors
const dropDownEl = document.querySelector('#drop-down')
const dropDownTargetEl = document.querySelector('#drop-down-target')


// event listeners
dropDownEl.addEventListener('click', dropDown)


// functions

// gives/takes element a unique class to make them appear/disappear on click.
function dropDown(e) {
    if (e.target.parentElement.id == 'drop-down' || e.target.id == 'close-button' || e.target.parentElement.parentElement.id == 'drop-down') {
        dropDownTargetEl.classList.toggle('active')
    }
}

// Start Header SearchBOx

// Selectors
let SearchBox = document.getElementById("search-box");
let SearchIcon = document.getElementById("SearchIcon");
// Onclick Function
SearchIcon.onclick = function(){
    SearchBox.classList.toggle("active")
}