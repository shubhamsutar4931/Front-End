let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const winPattern=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>
{
    turnO=true;
    enableBtn();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        if(turnO)
            {
                box.innerText="O";
                turnO =false;
            }       
         else{
                box.innerText="X";
                turnO =true;
            }
            box.disabled="true";
            checkWinner();   
    });
});
 
const enableBtn=()=>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    }

//Once the winner is declared then no further action 
const disableBtn=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}


const showWinner=(winner)=>
{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBtn();
}
const checkWinner=()=>
{
    for(let pattern of winPattern)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        let posi1Val=boxes[pattern[0]].innerText;
        let posi2Val=boxes[pattern[1]].innerText;
        let posi3Val=boxes[pattern[2]].innerText;

        if(posi1Val !="" && posi2Val !="" && posi3Val !="" )
        {
            if(posi1Val===posi2Val && posi2Val===posi3Val)
            {
                console.log("winner",posi1Val);
                showWinner(posi1Val);
            }
        }
    }
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);