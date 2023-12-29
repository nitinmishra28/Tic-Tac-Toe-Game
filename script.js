let box = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset");
let newGamebtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [1,4,7],
    [2,4,6],
    [6,7,8],
    [2,5,8],
];

let resetGame=()=>{
  turnO = true;
  enableBox();
  msgContainer.classList.add("hide");
}

box.forEach((btn)=>{
   btn.addEventListener("click",()=>{
    console.log("Box is clicked");
   if(turnO){
    btn.innerText = "O";
    turnO = false;
   }
   else{
    btn.innerText = "X";
    turnO = true;
   }
   btn.disabled = true;
   checkWinner();
   });
});

const disableBox=()=>{
    for(let boxi of box){
        boxi.disabled = true;
    }
}
const enableBox=()=>{
    for(let boxi of box){
        boxi.disabled = false;
        boxi.innerText = "";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
           let pos1Val = box[pattern[0]].innerText;
          let pos2Val =  box[pattern[1]].innerText;
          let pos3Val =  box[pattern[2]].innerText;

          if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
          }
    }
}

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
