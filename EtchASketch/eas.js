const btn = document.querySelector("#play");
btn.addEventListener('click', makeGrid);

function makeGrid () {
    let widthAndHeight = 960/16;
    for(let j = 0; j < 16; j ++) {
        const container = document.querySelector("#container");
        const eachRow = document.createElement("div");
        eachRow.setAttribute('id', "eachRow" + j);
        eachRow.style.width = "100%";
        eachRow.style.height = widthAndHeight + "px";
        eachRow.style.backgroundColor = "grey";
        /*for (let i = 0; i < 16; i++) {
            const fillRow = document.querySelector(".eachRow" + j);
            const etchPiece = document.createElement("div");
            etchPiece.setAttribute('class', "etchBlock");
            etchPiece.style.width = widthAndHeight + "px";
            etchPiece.style.height =  widthAndHeight + "px"; 
            etchPiece.style.backgroundColor = "grey";
            etchPiece.style.borderColor = "pink";
            etchPiece.style.borderWidth = "10px";
            etchPiece.addEventListener('hover', setBlack(etchPiece));
            fillRow.appendChild(etchPiece);
        }*/
    }
}
function setBlack(etch) {
    etch.style.backgroundColor = "black";
}