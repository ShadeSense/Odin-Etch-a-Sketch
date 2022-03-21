const container = document.querySelector(".container");
const btnClear = document.querySelector("#btn-clear");

for(let i = 0; i < 10000; i++){
    const gridEle = document.createElement("div");
    gridEle.classList.add("grid-element");
    container.appendChild(gridEle);

    gridEle.addEventListener("mouseover", () => {
        gridEle.style.backgroundColor="red";

        btnClear.addEventListener("click", () => {
            gridEle.style.backgroundColor="white";
        });
    });


}

/* Need to change grid-template-column & row in css with js */

/* Add prompt for confirmation for buttons */