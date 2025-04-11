let str="hello this is iqra tabassum";
s2="i am btech student";
console.log(str);
console.log(str.length);
str[0];
//templet litreals
let sentence =`This is template literals`;
console.log(sentence);
let obj={
    Product:"Pen",
    cost:10,
    type:"blue",
};
console.log("this is",obj.Product,"cost is",obj.cost);
console.log(`this a ${obj.Product} cost is ${obj.cost}`);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());// strat and end space removed
//slicing method
console.log(str.slice(1,5));
//add two stings
console.log(str.concat(s2));
console.log(str.replace("h","y"));
console.log(str.charAt(2));