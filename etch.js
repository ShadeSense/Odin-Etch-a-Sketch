const container = document.querySelector(".container");

/* Buttons */
const btnClear = document.querySelector("#btn-clear");
const btnGrid = document.querySelector("#btn-grid");
const btnRainbow = document.querySelector("#btn-rainbow");
const btnShade = document.querySelector("#btn-shade");

/* Slider */
const sliderValue = document.querySelector(".slider-value");
const gridSize = document.querySelector("#grid-slider");
sliderValue.textContent = "100";
gridSize.value = 7; //default size

let gridSizeList = [2, 4, 8, 16, 32, 64, 100];

let validColor = false;
let colorList = ["BLUE", "BLACK", "RED", "ORANGE", "YELLOW"];
let gridColor = prompt("Please enter any of the following colors: Blue, Black, Red, Orange, Yellow", "Type of Color");

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

alert("Move the slider at the bottom to create the grid!");

/* Grid making */
gridSize.addEventListener("change", () => {
    const gridEleList = document.querySelectorAll(".grid-element");
    for(let i = 0; i< gridEleList.length; i++){
        gridEleList[i].parentNode.removeChild(gridEleList[i]);
    }

    let row = gridSizeList[gridSize.value], column =gridSizeList[gridSize.value];
    let gridNum = Math.pow(gridSizeList[gridSize.value], 2); //default num for grid making
    console.log(gridNum.toString());
    container.setAttribute('style', 'grid-template-rows: repeat(' + row + ', auto)');
    container.setAttribute('style', 'grid-template-columns: repeat(' + column + ', auto)');

    for(let i = 0; i < gridNum; i++){
        const gridEle = document.createElement("div");
        gridEle.classList.add("grid-element");
        container.appendChild(gridEle);
        gridEle.style.filter = "brightness(100%)";

        gridEle.addEventListener("mouseover", () => {
            gridEle.style.backgroundColor = gridColor; // Generic color
        });
    }
});

/* Clear grid */
btnClear.addEventListener("click", () => {
    const gridEleList = document.querySelectorAll(".grid-element");
    for(let i = 0; i < gridEleList.length; i++){
        gridEleList[i].style.backgroundColor = "white";
        gridEleList[i].style.filter = "brightness(100%)";
    }
});

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

/* Rainbow color grid */
/*  Info for generating random color
    cite: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
*/
function randomColor(){
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

let validRainbow = false;

btnRainbow.addEventListener("click", () => {
    if(validRainbow){
        rainbowToggle(validRainbow);
        validRainbow = false;
    }
    else{
        rainbowToggle(validRainbow);
        validRainbow = true;
    }
});

function rainbowToggle(validRainbow){
    const gridEleList = document.querySelectorAll(".grid-element");

    if(validRainbow){
        for(let i = 0; i < gridEleList.length; i++){
            gridEleList[i].addEventListener("mouseover", () => {
                gridEleList[i].style.backgroundColor = gridColor;
            })
        }
    }
    else{
        for(let i = 0; i < gridEleList.length; i++){
            gridEleList[i].addEventListener("mouseover", () => {
                gridEleList[i].style.backgroundColor = randomColor();
            })
        }
    }
}

/* Shaded grid (10% darker on each pass) */
let validShade = false;

btnShade.addEventListener("click", () => {
    if(validShade){
        shadeToggle(validShade);
        validShade = false;
    }
    else{
        shadeToggle(validShade);
        validShade = true;
    }
})

function shadeToggle(){
    const gridEleList = document.querySelectorAll(".grid-element");
    if(validShade){
        for(let i = 0; i < gridEleList.length; i++){
            let cloneEle = gridEleList[i].cloneNode(true);
            gridEleList[i].parentElement.replaceChild(cloneEle, gridEleList[i]);
            cloneEle.addEventListener("mouseover", () => {

                /* Generic color */
                cloneEle.style.backgroundColor = gridColor;
            });
        }
    }
    else{
        for(let i = 0; i < gridEleList.length; i++){
            let enterBrightness = brightnessShading(gridEleList[i]);
            let leaveBrightness = () => {
                gridEleList[i].addEventListener("mouseenter", brightnessShading(gridEleList[i]));
            }
            gridEleList[i].addEventListener("mouseenter", enterBrightness, true);
            gridEleList[i].addEventListener("mouseleave", leaveBrightness, true);
        }
    }
}

function brightnessShading(gridEleList){
    if(gridEleList.style.backgroundColor != "white" && gridEleList.style.backgroundColor != ""){
        let tempStr = gridEleList.style.filter;
        let brightVal = tempStr.match(/\d/g);
        brightVal = [].concat.apply([], brightVal);
        brightVal = parseInt(brightVal.join("")) - 10;
        gridEleList.style.filter = "brightness(" + brightVal + "%)";
    }
}

/* Changing grid with slider */
gridSize.addEventListener("change", () => {
    sliderValue.textContent = gridSizeList[gridSize.value];
})