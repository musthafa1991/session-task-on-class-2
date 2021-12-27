
// const double =(n)=>[n,n*2];
// const[z1,z2]=double(4);

// console.log(z1,z2);

const student ={
    lastname:"musthafa",
    firstname:"mohamed",
    age:30
};
// function welcomemsg({firstname,lastname}){
//     return `hello, ${firstname},${lastname}`;
// }
// console.log(welcomemsg(student));


// function welcomemsg(student){
//     const{firstname,lastname}=student;
//     return `"hello, ${firstname},${lastname}`;
// }
// console.log(welcomemsg(student));

const welcomemsg=({firstname,lastname})=>`hello, ${firstname},${lastname}`;
console.log(welcomemsg(student));



//MRF -MAP-REDUCE-FILTER
// const arr = [10,70,40,80];
// const doub=num=>num*2;
// console.log(arr.map(doub));

// console.log(arr.map((num)=>num*2));



// MAP fucntion
//1. map always returns an array
//2.no of Input elements== no of output elements
//3.returns a copy of the  array.
//transform array of object->array of elements->map


// const pets =["cats","dogs","parrots","fish","cow","pegion"];
// console.log(pets.map((pet)=>pet.length))


//filter function
//1.filter returns always an array
//2.no of input elements >= no of output elements
//3.ouput array length <= input array length
4//returns a copy of the array


// console.log(arr.filter((num)=>num<50));

// const marks =[80,50,90,100,30,20,70];

// const ispass=(mark)=>mark>=40;

// console.log(marks.filter(ispass));

// console.log(marks.filter(mark=>mark>=40));


// const scores=[
//     {
//         marks:32,
//         name:"Yvette Merritt"
//     },
//     {
//         marks:57,
//         name:"Lillian Ellis"
//     },
//     {
//         marks:22,
//         name:"Mccall Carter"
//     },
//     {
//         marks:21,
//         name:"Pate collier"
//     },
//     {
//         marks:91,
//         name:"Debra Beard"},
//     {
//         marks:75,
//         name:"Nettie Hancock"
//     },
//     {
//         marks:20,
//         name:"Hatfield Hodge"
//     }
// ];

// task 1

// const names=scores.map((nam)=>nam.name);
// console.log(names);

// task 2

// const passed=scores.filter((nam)=>nam.marks>=40);
// console.log(passed);

// task 3
// const failed=scores.filter((detail)=>detail.marks<40);
// const failednames=failed.map((nam)=>nam.name);
// console.log(failednames);



// const pets =["cats","dogs","parrots","fish","cow","pegion"];
// console.log(pets.map((pet)=>pet.length))

//dot chaining 

// const failednames=scores.filter((detail)=>detail.marks<40).map((nam)=>nam.name);
// console.log(failednames);


// const failednames=scores
// .filter((detail)=>detail.marks<40)
// .map((nam)=>nam.name)
// .map(ame=>`hello, ${ame}`);
// console.log(failednames);

// const getname =(score)=>score.name;
// const ispass = (score)=>score.marks<40;
// const welcomemesg=(name)=>`hello, ${name}`;

// const failednames=scores.filter(ispass).map(getname).map(welcomemesg);
// console.log(failednames);


 
// function quote(failednames){
//     return `hello,${name}`
// }
// console.log(quote(failednames));

//reduce
// array od numbers to number
// array of any to any data types



// const nums=[80,60,20,100];

// nums.reduce(function,initialvalue)

// const total=(nums.reduce((sum,curr)=>sum+curr,0) );
// console.log(total);
const scores=[
    {
        marks:32,
        name:"Yvette Merritt"
    },
    {
        marks:57,
        name:"Lillian Ellis"
    },
    {
        marks:22,
        name:"Mccall Carter"
    },
    {
        marks:21,
        name:"Pate collier"
    },
    {
        marks:91,
        name:"Debra Beard"},
    {
        marks:75,
        name:"Nettie Hancock"
    },
    {
        marks:20,
        name:"Hatfield Hodge"
    }
];


//task  qstn 1
// find the average marks in the class

let length =scores.length;


const average=scores.reduce((sum,mark)=>sum+mark.marks,0)/length;
console.log(average.toFixed(3));


// const averag=scores.reduce((sum,mark)=>sum+mark.marks,0)
// .map((total)=>total/lenght);
// console.log(averag.toFixed(3));




// const average=total.map((total)=>total/scores.length);
// console.log(average);


// qstn 2
// find the toppers name


// let topperdetial=scores.filter((detail)=>Math.max(detail.marks,topperdetial.map((el)=>el.marks))


// const topper=scores.reduce((high,mark)=>high<mark.marks,0);
// console.log(topper);


// const passed=scores.filter((nam)=>nam.marks>=40);
// console.log(passed);

// const topper=scores.filter((max=0,mark)=>Math);
// console.log(topper);

const max=scores.reduce((high,mark)=>Math.max(high,mark.marks),0);
console.log(max);





//ternary operator
// let a=5>4 ?"Awesome":"Cool"
// console.log(a);

// let b=2>4 ?"Awesome":"Cool"
// console.log(b);

//3 operand->ternary operator-operator operates on the operand

//Binary operator- 2 operand
// 5>3  < , > ,<=,>=,== === != --> Relation orerators
// + , - , *, / , %  --> mathematical operators
// && ||  -> logical operators
//

// uniary Operators - 1 operand
// ++ --     increment and decrement operators
// !
// typeof






// let details={
//     name: "musthafa",
//     age:30,
//     degree:"BE-mech"
// }
