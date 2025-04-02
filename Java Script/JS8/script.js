// const student=
// {
//     fullName:"shubham sutar",
//     age:20,
//     marks:8.0,
//     printMarks:function()
//     {
//         console.log("marks=",this.marks)//student.marks
//     }
// }

// const employee=
// {
//     caltax()
//     {
//         console.log("taxrate is 10%");
//     }
// };

// const karanArjun=
// {
//     salary:50000,
//     caltax()//object and proto has same name then object executed
//     {
//         console.log("taxrate is 20%");
//     }
// };
// const karanArjun1=
// {
//     salary:20000,
// };
// const karanArjun2=
// {
//     salary:40000,
// };
// const karanArju3=
// {
//     salary:30000,
// };

// karanArjun.__proto__=employee;
// karanArjun1.__proto__=employee;
// karanArjun2.__proto__=employee;
// karanArjun3.__proto__=employee;



//Classes

// class toyotaCar
// {
    //constructer
//     constructor(brand,milege)
//     {
//         console.log("creating new object");
//         this.brand=brand;
//         this.milege=milege;
//     }

//     start()
//     {
//         console.log("burrrrr");
//     }

//     end()
//     {
//         console.log("zuuuuu");
//     }
//     setBrand(brand)
//     {
//         this.brand=brand;
//     }
// }

// let fortuner=new toyotaCar("fortuner",21);
// console.log(fortuner);
// fortuner.setBrand("fortuner");
// let ford=new toyotaCar("ford",15);
// console.log(ford)
// ford.setBrand("ford");


//inheritance

// class person
// {
//     constructor ()
//     {
//         this.species="homo species";
//     }
//     eat()
//     {
//         console.log("eat");
//     }
//     sleep()
//     {
//         console.log("sleep");
//     }
// }

// class engineer extends person
// {
//     work()
//     {
//         console.log("solve problems");
//     }
// }
// let abcobj=new engineer();


//Super keyword
// class person
// {
//     constructor (name)
//     {
//         // console.log("enter parent class");
//         // this.species="homo species";
//         this.name=name;
//     }
//     eat()
//     {
//         console.log("eat");
//     }
// }

// class engineer extends person
// {
//     constructor(name)
//     {
//         // console.log("enter child class");
//         super(name);
//         // console.log("exit child class");
//     }
//     work()
//     {
//         super.eat();
//         console.log("solve problems");
//     }
// }
// let abcobj=new engineer("shubham");



// try-catch
let a=3;
b=6;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);
try
{
    console.log("a+c=",a+c);
}
catch(e)
{
    console.log(e);
}
console.log("b-a=",b-a);
console.log("a*b=",a*b);
