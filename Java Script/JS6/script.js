//DOM is used to Access the elements in html to javascript

// alert("hello!")
// console.log("hello world!");
// window.console.log("hello world!!");
// console.dir(document.body.childNodes[1].innerText="abcd");
// document.body.childNodes[1].innerText="abcd";

//DOM Manupulation
//id
// let headings=document.getElementById("heading");
// console.dir(headings);
//class
// let headings=document.getElementsByClassName("heading1");
// console.dir(headings);
//tag
// let para=document.getElementsByTagName("p");
// console.dir(para);
//query selector
// let fiestEle=document.querySelector("p");
// console.dir(fiestEle);

// let allEle=document.querySelectorAll("p");
// console.dir(allEle);

//properties
//tagname allEle.tagName
// let firstEle=document.querySelector("p");
//  console.dir(firstEle);
//innertext
// let d=document.querySelector ("div");
//  console.dir(d);

//practice que1
// let output=document.querySelector("h2");
// console.dir(output);
// output.innerText=output.innerText+" from RIT college";
// console.log(output.innerText)
//practice que2
// let output=document.querySelectorAll(".box");
// console.dir(output);
// output[0].innerHTML="first";
// output[1].innerHTML="second";
// output[2].innerHTML="third";

// or
// let output=document.querySelectorAll(".box");
// let idx=1;
// for(outputs of output)
// {
// outputs.innerText=`first ${idx}`;
// idx++;
// }
