// let output=document.querySelector("div");
// console.log(output);

// let id=output.getAttribute("id");
// console.log(id);

// let name=output.getAttribute("name");
// console.log(name);


// let para=document.querySelector("p");
// console.log(para.setAttribute("class","123"));

//node.style
// let div=document.querySelector("div");
// console.log(div);
// div.style.backgroundColor="green";
// div.innerText="hello";
// div.style.fontSize="40px"

//insert elements
let newbu=document.createElement("button");
newbu.innerText="click me!";
console.log(newbu);
let div=document.querySelector("div");
div.append(newbu);
// div.prepend(newbu);
// div.before(newbu);
// div.after(newbu);
// div.remove()


//que1
// let newbu=document.createElement("button");
// newbu.innerText="click me!";
// newbu.style.backgroundColor="red";
// newbu.style.color="white";
// console.log(newbu)

// let body=document.querySelector("body");
// body.append(newbu)

// .que2
// let para=document.querySelector("p");
// console.log(para.setAttribute("class","para1"));
// console.log(para.classList);
// para.classList.add("anotherclass");
// console.log(para.classList);
// para.classList.remove("anotherclass");
// console.log(para.classList);