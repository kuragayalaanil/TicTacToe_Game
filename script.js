let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let newbtn = document.querySelector("#new-btn")

let turnO = true; //playerX, playerO
let count = 0

const winningPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText ="O";
            box.style.color = "#05668D"
            turnO = false;
        }
        else{
            box.innerText ="X";
            turnO = true;
        }
        box.disabled = true;
        count++
     
        let isWinner =checkWinner();
            if(count===9 && !isWinner){
            gameDraw();
        }
    });
});

let gameDraw =()=>{
    msg.innerText = `Game was a draw`;
    msgContainer.classList.remove("hide");
    disableBox();
}

let checkWinner =()=>{
    for(let pattern of winningPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}

let disableBox = ()=>{
    for(let box of boxes){
        box.disabled = true
    }
}

let enableBox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText =""
    }
}

let showWinner = (winner)=>{
    msg.innerText = `Contratulations winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBox();
}

let resetGame = ()=>{
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
}


resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click", resetGame)
