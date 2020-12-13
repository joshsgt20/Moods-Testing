//Movement animation
const card = document.querySelector(".card");
const card2 = document.querySelector(".card2");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");


//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

const title2 = document.querySelector(".title2");
const sneaker2 = document.querySelector(".sneaker2 img");
const purchase2 = document.querySelector(".purchase2 button");
const description2 = document.querySelector(".info2 h3");
const sizes2 = document.querySelector(".sizes2");

//Moving animation event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`

});

container2.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    card2.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`

});


//Animate In
container.addEventListener('mouseenter', (e) =>{
    card.style.transition = 'none';
//Popout
    title.style.transform = "translateZ(50px)";
    title.style.transition = '0.5s ease';

    sneaker.style.transform = "translateZ(50px) rotatez(-10deg)";
    purchase.style.transform = "translateZ(50px)";
    sizes.style.transform = "translateZ(50px)";
})


//Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = '0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    title.style.transform = "translateZ(0px)";
    title.style.transition = '0.5s ease';

    sneaker.style.transform = "translateZ(0px) rotatez(0deg)";
    purchase.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
} );





////////SECOND SHOE AS A TEST
container2.addEventListener('mouseenter', (e) =>{
    card2.style.transition = 'none';
//Popout
    title2.style.transform = "translateZ(50px)";
    title2.style.transition = '0.5s ease';

    sneaker2.style.transform = "translateZ(50px) rotatez(-10deg)";
    purchase2.style.transform = "translateZ(50px)";
    sizes2.style.transform = "translateZ(50px)";
})


//Animate Out
container2.addEventListener('mouseleave', (e) => {
    card2.style.transition = '0.5s ease';
    card2.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    title2.style.transform = "translateZ(0px)";
    title2.style.transition = '0.5s ease';

    sneaker2.style.transform = "translateZ(0px) rotatez(0deg)";
    purchase2.style.transform = "translateZ(0px)";
    sizes2.style.transform = "translateZ(0px)";
} );