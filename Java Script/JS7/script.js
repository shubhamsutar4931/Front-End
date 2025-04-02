// priority of which html and js to handle event is JS
// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>
// {
//     console.log("button was clicked");
//     let a=23;
//     a++;
//     console.log(a);
// }

// let box=document.querySelector("div");
// box.onmouseover=()=>
// {
//     console.log("you are in box");
// }

//event object
// let btn1=document.querySelector("#btn1");
// btn1.onclick=(evt)=>
// {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }

// EVENT listeners-it is used for multiple events on same node where simple method it is overriden
// addEventListener
// let btn1=document.querySelector("#btn1");
// btn1.addEventListener("click",(/*evt*/)=>{
//     console.log("buton was clicked");
    // console.log(evt);
    // console.log(evt.type);
    // console.log(evt.target);
// });

// btn1.addEventListener("click",()=>{
//     console.log("buton was clicked second time");
// });

// btn1.addEventListener("click",()=>{
//     console.log("buton was clicked third time");
// });

// const handler4=()=>{
//     console.log("buton was clicked fourth time");
// };
// btn1.addEventListener("click",handler4);
// let box=document.querySelector("div");

// removeEventListener
// btn1.removeEventListener("click",handler4);


//ques

let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currNode="light"
modebtn.addEventListener("click",()=>
{
    // console.log("you are trying to change mode");
    if(currNode==="light")
    {
        currNode="dark";
         //using JS
        // document.querySelector("body").style.backgroundColor="black";
        
        //using CSS
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else
    {
        currNode="light";
        //using JS
        // document.querySelector("body").style.backgroundColor="white";
        
        //using CSS
        body.classList.add("light");
    }
    console.log(currNode);
   });
  