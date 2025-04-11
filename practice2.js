
let n=prompt("Enter the size of array");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i]=prompt(`Enter the ${i}th element`);
}
const sum=arr.reduce((prev,res)=>{
return(prev+res);
})
console.log(sum);
const product=arr.reduce((prev,res)=>{
    return(prev*res);
})
console.log(product);