// console.log("first");
// console.log("second");

// setTimeout(()=>
// {
//     console.log("hello");
// },2000
// );

// console.log("third");
// console.log("fourth");

//callback
// function sum(a,b)
// {
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback)
// {
//     sumCallback(a,b);
// }

// calculator(3,2,sum);

////callback hell concept
// function getData(dataId,getNextData)
// {
//     setTimeout(()=>
//     {
//         console.log("data",dataId);
//         if(getNextData)
//         {
//             getNextData();
//         }
//     },2000);
// }

//callback hell
// getData(1,()=>
// {
//     getData(2,()=>
//         {
//             getData(3);
//         });
// }
// );


//promices
// let promise= new Promise((resolve,reject)=>
// {
//     console.log("i am promice");
//     // resolve(24);
//     // reject(234);
// })

// function getData(dataId,getNextData)
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//             {
//                 console.log("data",dataId);
//                 resolve("sucess");
//                 if(getNextData)
//                 {
//                     getNextData();
//                 }
//             },5000);
//     });
    
// }

// promice.then()&catch()

// const getPromise=()=>
// {
//     return new Promise((resolve,reject)=>
//         {
//             console.log("i am promice");
//             resolve("success");
//             // reject("rejected");
//         })
// }
// let promise=getPromise();
// promise.then((res)=>
// {
//     console.log("promiced fullfilde",res);
// });

// promise.catch((err)=>
//     {
//         console.log("promiced rejected",err);
//     })



//Async-Await
// async function hello()
// {
//     console.log("hello");
// }

// function api()
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             console.log("weather");
//             resolve("success");
//         },2000);
//     });  
// }
// async function getWhetherData() {
//     await api();
//     await api();
    
// }

// IIFE : Immediately Invoked Function Expression
// syntax:
// (function(){

// })();

(function()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log("weather");
            resolve("success");
        },2000);
    });  
})();