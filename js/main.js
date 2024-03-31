
// menu-icon
let menu = document.querySelector('.menu-icon')

menu.addEventListener('click', () => {
    menu.classList.toggle('move')
    if (document.getElementById('nav-menu-icon').style.display == "block") {
        document.getElementById('nav-menu-icon').style.display = "none"
    }
    else {
        document.getElementById('nav-menu-icon').style.display = "block"
    }
})

function col0() {
    var body = document.body;
    body.className = "root0";
}
function col() {
    var body = document.body;
    body.className = "root1";
}

function col2() {
    var body = document.body;
    body.className = "root2";
}
function col3() {
    var body = document.body;
    body.className = "root3";
}

// header
let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active', window.scrollY > 0)
})


let theme1 = document.getElementById('theme1')
theme1.addEventListener('click', () => {
    if (document.getElementById('theme').style.display == 'none') {
        document.getElementById('theme').style.display = 'flex'
    }
    else {
        document.getElementById('theme').style.display = 'none'
    }
})
