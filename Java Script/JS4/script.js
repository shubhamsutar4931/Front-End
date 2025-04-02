//arrays
//it is objects
//mutable=it change
// let marks=[92,88,93,85,76];
// console.log(marks);
// console.log(marks.length);//property
// marks[2]=91;
// console.log(marks[2]);

//for loop
// let marks=[92,88,93,85,76];
// for(let i=0;i<marks.length;i++)
// {
//     console.log(marks[i]);
// }

//for out loop
// let marks=[92,87,93,85,76];
//  for(let mark of marks)
//  {
//     console.log(mark);
//  }

// practice  Q1
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks)
// {
//     sum=sum+val;//sum+=val
// }
// let avg=sum/marks.length;
// console.log(`average marks of student is ${avg}`);

// practice Q2
// let marks=[250,640,300,900,50];
// let i=0;
// for(let val of marks)
// {
//     console.log(`value at index ${i} = ${val}`);
//     let off=val/10;
//     marks[i]=marks[i]-off;
//     console.log(`value after offer = ${marks[i]}`);
//     i++;
// }
//or for loop
// for(let i=0;i<marks.length;i++)
// {
//     off=marks[i]/10;
//     marks[i]=marks[i]-off;
//     console.log(`value after offer = ${marks[i]}`);
// }



//array methods
//push-add
// let items=["banana","apple","panner"];
// items.push("rice","mango");

//pop
// let items=["banana","apple","panner"];
// console.log(items);
// let deletedItem=items.pop();
// console.log(items);
// console.log(deletedItem);

//toString
// let items=["banana","apple","panner"];
// console.log(items);
// console.log(items.toString());

//concat
// let items=["banana","apple","panner"];
// let food=["rice","soya","chiken"];
// let material=items.concat(food);
// console.log(material);

//unShift-add start
// let items=["banana","apple","panner"];
// items.unshift("chips");
// console.log(items);

//shift-delete start
// let items=["banana","apple","panner"];
// items.shift();
// console.log(items);

//slice
// let items=["banana","apple","panner","chips","milk"];
// console.log(items.slice(0,3));

//splice
// let items=["banana","apple","panner","chips","milk"];
// items.splice(1,2,"tea");
// console.log(items);

//practice question
let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
company.shift();
console.log(company);

company.splice(1,1,"ola");
console.log(company);

company.push("Amazon");
console.log(company);
