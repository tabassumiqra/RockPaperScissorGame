//calculator
function addition(x,y){
    return(x+y);
}
function substraction(x,y){
return(x-y);
}
function mul(x,y){
    return(x*y);
}
function div(x,y){
    return(x/y);
}
function exponent(x,y){
    return(x**y);
}
console.log(addition(5,10));
console.log(substraction(7,3));
console.log(mul(9,445));
console.log(div(81,9));
console.log(exponent(45,9));
const multiplication= (a,b)=>{
    return(a*b);
}
const Name=()=>{
    console.log("iqra tabassum");
}
Name();console.log(Name);
//practice question
const Vowel=(msg)=>{
    let num=0;
    for( val of msg){
if(val=="a"||val=="e"||val=="i"||val=="o"||val=="u"){
    num++;
}
    }
    return(num);
}
console.log(Vowel("iqra tabassum"));