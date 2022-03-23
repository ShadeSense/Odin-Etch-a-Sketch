const container = document.querySelector(".container");
const btnClear = document.querySelector("#btn-clear");
const btnGrid = document.querySelector("#btn-grid");
const btnRainbow = document.querySelector("btn-rainbow");
const btnShade = document.querySelector("btn-shade");

let gridColor = prompt("Please enter any of the following colors: Blue, Black, Red, Orange, Yellow", "Type of Color");

let colorList = ["BLUE", "BLACK", "RED", "ORANGE", "YELLOW"]
let validColor = false;

loop1: while(validColor==false){
    loop2: for(let i = 0; i < 5; i++){
        if(gridColor.toUpperCase()==colorList[i]){
            validColor = true;
            break loop1;
        }
    }
    if(validColor==false){
        gridColor = prompt("Please enter any of the following colors: Blue, Black, Red, Orange, Yellow", "Type of Color");
    }
}


for(let i = 0; i < 10000; i++){
    const gridEle = document.createElement("div");
    gridEle.classList.add("grid-element");
    container.appendChild(gridEle);

    gridEle.addEventListener("mouseover", () => {

        /* Generic color */
        gridEle.style.backgroundColor = gridColor;
        
        /* Clear grid */
        btnClear.addEventListener("click", () => {
            gridEle.style.backgroundColor = "white";
        });

        

        /* Rainbow color grid */

        /* Shaded grid (10% darker on each pass) */

    });
}

/* Toggle grid */
let gridToggle = false;

btnGrid.addEventListener("click", () => {
    const gridEleList = document.querySelectorAll(".grid-element");
    for(let i = 0; i < gridEleList.length; i++){
        if(gridToggle==false){
            gridEleList[i].style.border = "0px";
        }
        else{
            gridEleList[i].style.border = "1px solid black";
        }
    }

    if(gridToggle){
        gridToggle = false;
    }
    else{
        gridToggle = true;
    }
});

/* Need to change grid-template-column & row in css with js */

/* Add prompt for confirmation for buttons */