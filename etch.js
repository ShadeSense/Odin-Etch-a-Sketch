const container = document.querySelector(".container");

for(let i = 0; i < 10000; i++){
    const gridEle = document.createElement("div");
    gridEle.classList.add("grid-element");
    container.appendChild(gridEle);
}

/* Need to change grid-template-column & row in css with js */