let element= document.querySelector("h2");
console.log(element.innerText="apna college" );
 console.log(element.innerHTML="<h2>Hello JavaScript from Apna College</h2>")
let node=document.querySelectorAll(".box");
console.dir(node);
console.log(node);
let idx=1;
for( vals of node){
    vals.innerText=`this is ${idx} div`;
    idx++;
}
let div=document.querySelector("#DIV");
console.log(div);
let x= div.getAttribute("id")
console.log(x)
let para=document.querySelector("p");
console.log(para.getAttribute("class"));//know the name of attribute is given in htmml file 
//set the value of attributes
para.setAttribute("class","newpara");
console.log(para.getAttribute("class"));
 console.log(para.style);
 console.log(div.style);
 div.style.backgroundColor="purple";