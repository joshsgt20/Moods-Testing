const Menu = document.querySelector('.Menu');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

Menu.addEventListener("click", () => {
    navlinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    })
})

