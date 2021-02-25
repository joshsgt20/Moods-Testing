//Select the elements

const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Classes banes
const CHECK ="fa-check-circle";
const UNCHECK ="fa-circle-circle";
const LINE_THROUGH ="linethrough";


//Show the date
const options = {weekday : "long", month: "short", day: "numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);


//add to do function

function addToDo(toDo){
    const item =`<li class="item"><i class="fa-circle-thin co" job="complete" id="0"></i><p class="text"> ${toDo} </p><i class="fa fa-trash-o -de" job="delete" id="0"</i></li>`


    const position ="beforeend";

    list.insertAdjacentHTML(position, item);
}

//Add an item wehen user presses enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
 
        //If input isn't empty
        if(toDo){
            
        }
    }
})