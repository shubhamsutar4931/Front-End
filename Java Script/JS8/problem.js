//problem1
// class user
// {
//     constructor(name,email)
//     {
//         this.name=name;
//         this.email=email;
//     }
//     viewData()
//     {
//         console.log(`name is ${this.name} & email is ${this.email}`);
//     }
// }
// let u1=new user("shubham","shubham@123");

//problem2

Data="secreate info";
class user
{
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
    viewData()
    {
        // Data="secreate info";
    }
}
class admin extends user
{
    constructor(name,email)
    {
        super(name,email);
    }
    editdata()
    {
        Data="info changed";
    }
}

let u1=new admin("shubham","shubham@123");
let admin1=new admin("shubham","shubham@123");