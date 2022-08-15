function createBoard()
{
    let board=document.querySelector("#board");
    board.innerHTML='';
    let sz=board.clientHeight/size;
    for(let i=0;i<size*size;i++)
    {
        let newGrid=document.createElement("div");
        newGrid.classList.add("box");
        newGrid.style.height=`${sz}px`;
        newGrid.style.width=`${sz}px`;
        newGrid.addEventListener("mousedown",paint);
        newGrid.addEventListener("mouseover",paint);
        newGrid.addEventListener("mouseup",()=>mouseDown=false);
        board.appendChild(newGrid);
    }
}
function changeSize()
{
    size=prompt("Enter new size (<=50)");
    if(size>50)size=50;
    size=size||16;
    createBoard();
}
let mouseDown=false;
function paint(e)
{
    if(e.type==="mouseover"&&!mouseDown)return;
    if(e.type==="mousedown")mouseDown=true;
    this.classList.add("painted");
}
let size=16;
createBoard();
let changeSizeButton=document.querySelector("button#change-size");
changeSizeButton.addEventListener("click",changeSize);
let clearButton=document.querySelector("#clear");
clearButton.addEventListener("click",()=>
{
    let boxes=document.querySelectorAll(".box");
    boxes.forEach((box)=>box.classList.remove("painted"));
});