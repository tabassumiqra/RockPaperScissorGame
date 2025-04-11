let userscore = 0;
let computerscore = 0;
let userchoice = '';
const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
//comp is used to generate the computer choice
let comp = () => {
    let arr = ["rock", "paper", "scissor"];
    let idx = Math.floor(Math.random() * 3);
    return arr[idx];
}
//play function used to show you win or not
        let play = (choices) => {
            console.log("userchoice:", choices);
            console.log("computer choice:", comp());
            if (choices === comp()) {
                document.getElementById("msg").innerText = "Game Was Draw";
    
             }
                else if (choices === "paper" && comp() === "scissor") {
                    document.getElementById("msg").innerText = "You Lose";
                 }
                    else if (choices === "rock" && comp() === "paper") {   document.getElementById("msg").innerText = "You Lose"; 
                       
                    }
                    else if (choices === "scissor" && comp() === "rock") { document.getElementById("msg").innerText = "You Lose"; 
            
                    }
                    
                    else {
                        document.getElementById("msg").innerText = "You Win";
                        return( "You Win");
                    }
    
                   
                }
                // update the values
                let update=()=>{
                    if(document.getElementById("msg").innerText==="You Win"){
                        const para=document.getElementById("you");
                            let currentvalue=parseInt(para.textContent);
                            para.textContent=currentvalue+1;}
                        
                        else if(document.getElementById("msg").innerText==="You Lose"){

                            const ara=document.getElementById("cmp");
                            let cue=parseInt(ara.textContent);
                            ara.textContent=cue+1;
                                
                        }
                    }
                    // to chenge the mode
                let cc=()=>{
                    if(document.body.style.backgroundColor === "white"){
                        document.body.style.backgroundColor = "gray";
                

                    }
                    else{
                        document.body.style.backgroundColor = "white";
                    }
                }
                   