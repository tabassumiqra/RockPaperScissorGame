// for-of loop
let str="IqraTabassum";
let lenght=0;
for(let val of str){
    lenght+=1;
    console.log("i=",val);
}
console.log(lenght);
//create and object and use in for-in loop
let student={
 Name:"Rahul Kumar",
Age:20,
cgpa:8.8,
isspass:true,
};
for( let i in student){
    console.log(i,student[i]);//return keys

}
// print all even number 0 to 100
let number=0;
console.log("Even Numbers");
while(number<=100){
    if(number%2==0){
        console.log(number);
    }
    number++;
}
//guess game number
let n=25;
let x=prompt("Guess a number");
while(x != n){
   x=prompt("enter right number");

}
console.log("Congratulations You enter Right Number");
