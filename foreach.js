let arr=[10,40,50,70,60];
arr.forEach((val,indx,arr)=>{
console.log(val,indx,arr);
})//only use for array
//practice question
//print square of each element of array
let X=[1,2,3,4,4,5,6,78,9];
X.forEach((val)=>{
    console.log(val**2);
}) 
 
//map function
let newarr=arr.map((val)=>{
    return(val*val);
})
console.log(newarr);
//filter
let num=[1,2,3,45,6,78,92,4];
let newnum= num.filter((val)=>{
    return val%2===0;
})
console.log(newnum);
//reduce
array1=[10,34,23,54,67];
const sum=array1.reduce((res,curr)=>{
    return(res+curr);
})
console.log(sum);
let la=[12,3,4,56,45,54,23];
let large=la.reduce((res,pre)=>{
    return(res>pre? res:pre);
})
console.log(large);
//practice question
let marks=[65,98,78,99,93,96,43,34];
let newmarks= marks.filter((val)=>{
    return(val>90);
})
console.log(newmarks);
