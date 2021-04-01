const btn = document.querySelector("#play");
btn.addEventListener('click', makeGrid);

function makeGrid () {
    let widthAndHeight = 960/16;
    for (let i = 0; i < 16; i++) {
        const container = document.querySelector("#container");
        const etchPiece = document.createElement("div");
        etchPiece.setAttribute('class', "etchBlock");
        etchPiece.style.width = widthAndHeight + "px";
        etchPiece.style.height =  "960px"; 
        etchPiece.style.backgroundColor = "grey";
        etchPiece.style.borderColor = "pink";
        etchPiece.style.borderWidth = "10px";
        etchPiece.addEventListener('hover', setBlack(etchPiece));
        container.appendChild(etchPiece);
    }
}
function setBlack(etch) {
    etch.style.backgroundColor = "black";
}