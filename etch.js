const container = document.querySelector(".container");

for(let i = 0; i < 256; i++){
    console.log("created");
    const gridEle = document.createElement("div");
    gridEle.classList.add("grid-element");
    container.appendChild(gridEle);
    console.log("created");
}