let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let turnX=true;
let newbtn=document.querySelector(".new");
let msgbox=document.querySelector(".msg");
let msg=document.querySelector("#msg");
const winpatterns= 
[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       if(turnX) 
        {
            box.innerText="X";
            turnX=false;
            box.style.color="green";
        } 
       else
       {
        box.innerText="O";
        turnX=true;
        box.style.color="red";
       }
       box.disabled=true;
       checkwinner();
    });
});

const checkwinner=()=>{
    for(let pattern of  winpatterns) 
    {    
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3)
                {
                    disable();
                    showwinner(pos1);
                    return;
                }
        }
    }
    let isdraw=true;
    boxes.forEach((box)=>{
        if(box.innerText==="")
            {
                isdraw=false;
            }
    });
    if(isdraw)
        {
            showdraw();
        }
};

const showwinner=(winner)=>
{
    msg.innerText=`CONGRATULATIONS!!! 
    WINNER IS ${winner}`;
    msgbox.classList.remove("hide");
};

const showdraw=()=>
{
    msg.innerText="IT'S A DRAW!!!";
    msgbox.classList.remove("hide");
};
    
const reset=()=>
{
     turnX=true;
     enable();
     msgbox.classList.add("hide");
}

const disable=()=>
    {
        for(let box of boxes)
            {
                box.disabled=true;
            }
    }
const enable=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

newbtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);