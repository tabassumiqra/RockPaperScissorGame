/*const product={
    name:"Parker jotter Standard CT Ball Pen",
    colour:"Black",
    rating:4,
    offer:"5%",
 price:270,
};
console.log(product);
//practice2
const profile={
    Name:"Iqra Tabassum",
    post:105,
    followers:569,
    following:4,
    user:"@iqra tabassum",
    bio:"Microsoft employee,Ex-Google,DRDO",
    isFollowing:true,
};

console.log(profile);
let age=9;
let result=age>=18?"adult":"not adult";
console.log(result);
alert("Hello");
let Name=prompt("enter a value");
if(Name%5==0)
    console.log("Number is divisible by 5:",Name);
else
console.log("Number is not divisible by 5:",Name);*/
/*console.log("is null");
let g=prompt("enter your number");
if(g<=100&&g>=90){
    console.log("A");
}
else if(g<=89&&g>=80){
    console.log("B");
}
else if(g<=79&&g>=70){
    console.log("C");
}
else if(g<=69&&g>=60){
    console.log("D");
}
else{
    console.log("F");
}
console.log("yellow");
//take user input name and save @ and print lenght
let s= prompt("enter yoyr full name");
let s1='@';
let x=s1.concat(s.concat(s.length)) ;
console.log(`Username:${x}`);*/
let btn1=document.querySelector("#btn1");
let body=document.querySelector("body");
let modclr="light";
btn1.addEventListener("click",()=>{
    if(modclr==="light"){
        modclr="dark"
body.style.backgroundColor="black";
body.style.color="white"
    }
    else{
modclr="light";
        body.style.backgroundColor="white";
    body.style.color="black";
    }
})