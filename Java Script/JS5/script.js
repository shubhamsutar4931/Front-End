//fun parameters =like local variables of fun

// function myFunction()
// {
//     console.log("My name is shubham");
//     console.log("i am in ashta");
// }
// myFunction();

// function myFunction(msg) //parameter
// {
//     console.log(msg);
// }
// myFunction("My name is shubham");//argument

//2 no sum
// function sum(a,b)
// {
//     console.log("sum=",a+b);
// }
// sum(10,20);
//or
// function sum(a,b)
// {
//     s=a+b;
//     console.log("before return");
//     return s;
// }
// let val=sum(21,33);
// console.log(val);

//sum function
// function sum(a,b)
// {
//     return a+b;
// }

//sum using arrow function
// const arrowSum=(a,b)=>
// {
//     console.log(a+b);
// }

//practice que
// function countVowels(str)
// {
//     let count=0;
//     for(const char of str)
//     {
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//         {
//                   count++;
//         }
//     }
//     console.log(count);
// }

// practice que
// const countVowels=(str)=>
// {
//     let count=0;
//     for(const char of str)
//     {
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//         {
//                   count++;
//         }
//     }
//     console.log(count);   
// }

//for each-higher order fun

// let arr=[1,2,3,4];
// arr.forEach(function printVal(val)
// {
//     console.log(val);
// });

//or
// let arr=["g","h","k"];
// arr.forEach((val,idx)=>
// {
//     console.log(val.toUpperCase(),idx);
// });

//que
// let arr=[1,2,3,4];
// arr.forEach(function square(arr)
// {
//     console.log(arr*arr);
// });

//array methods 
//map
// let num=[21,32,43,54];
// let newArr=num.map((val)=>
// {
//     return val*2;
// });
// console.log(newArr);

//filter
// let num=[1,2,3,4,5,6,7,8];
// let newFilter=num.filter((val)=>
// {
//     return val%2===0;
// });
// console.log(newFilter);

//reduce-output single value
// let num=[1,2,3,4,5];
// let output=num.reduce((res,cur)=>
// {
//     return res+cur;
// });
// console.log(output);

//que1
// let num=[91,84,95,74,81,99];
// let newFilter=num.filter((val)=>
// {
//     return val>=90;
// });
// console.log(newFilter);

//que2
let size=prompt("number of n");
let arr=[];
for(let i=1;i<=size;i++){
    arr[i-1]=i;
}
let newArr=arr.reduce((pre,cur)=>
{
     return pre+cur;
});
let newArr1=arr.reduce((pre,cur)=>
{
     return pre*cur;
});
console.log(arr);
console.log(newArr);
console.log(newArr1);

