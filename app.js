let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset_btn");
let newgameBtn=document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msg-Container");
let msg=document.querySelector("#msg");
let msgDraw=document.querySelector("#msgDraw");

let turn0 = true; //playerX, player0
let count=0;
// 2d arrays 

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetGame=() =>{
       turn0=true;
       enabledBox();
       msgContainer.classList.add("hide");
    };

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            
            turn0=true;
        }
      
        box.disabled= true;
        count++;
        
       let isWinner=checkWinner();
     if(count===9 && !isWinner){
        gameDraw();
    }
    });
   

});
    const gameDraw= ()=> {
        msg.innerText="No Winner: The Game Draws";
        msgContainer.classList.remove("hide");
        disabledBox();
    };
    const disabledBox=()=>{
        for(let box of boxes){
            box.disabled=true;
        }
    };

    const enabledBox=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    };
    const showWinner= (winner) =>{
        msg.innerText=`Congratulations Winner is ${winner}`
        msgContainer.classList.remove("hide");
        disabledBox();
    };

    const checkWinner= () =>{
        for( let pattern of winPatterns) {
          //  console.log(pattern[0],pattern[1],pattern[2]);
            // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
            let pos1Val=boxes[pattern[0]].innerText;
            let pos2Val=boxes[pattern[1]].innerText;
            let pos3Val=boxes[pattern[2]].innerText;
            if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
                if(pos1Val==pos2Val && pos2Val==pos3Val){
                    console.log("Winner",pos1Val);
                    
                    showWinner(pos1Val);
                }
            }
        }
    };
    newgameBtn.addEventListener("click", resetGame);
    resetBtn.addEventListener("click", resetGame);

    