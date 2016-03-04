// GO!
var textBox = document.querySelector(".answer-box");

textBox.innerHTML += "<button id='newButton'>Hide Nav</button>";

var button = document.querySelector("#newButton");
var navBar = document.querySelector(".nav-menu");

button.addEventListener ("click", function() {


    if(navBar.classList.contains("nav-menu")) {
        navBar.classList.remove("nav-menu");
        navBar.classList.add("nav-menu-hidden");
        button.textContent = "Show Nav";
    } else {
        navBar.classList.remove("nav-menu-hidden");
        navBar.classList.add("nav-menu");
        button.textContent = "Hide Nav";
    }

});

var answerBox = document.querySelectorAll(".answer-box");

answerBox[1].innerHTML = "<input>" + answerBox[1].innerHTML;

var inputBox = document.querySelector("input");
var thisList = document.querySelector(".guest-list");

inputBox.addEventListener ('keyup', function (e) {

    if (e.keyCode === 13) {
         thisList.innerHTML += "<li>" + inputBox.value +"</li>"
    }
});


var inputBox = document.querySelectorAll("input");
var thisList = document.querySelectorAll(".guest-list");
var ul = document.querySelectorAll(".guest-list");
inputBox[1].addEventListener ('keyup', function (e) {

    
    if (e.keyCode === 13) {
         thisList[1].innerHTML += "<li>" + inputBox[1].value 
                            + "<button>X</button>" +"</li>"
         inputBox[1].value = '';
         console.log(inputBox[1].value);
    }
});

ul[1].addEventListener('click', function(e) {

    e.target.parentElement.parentElement.removeChild(e.target.parentElement);

})

