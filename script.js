// // let newbtn=document.createElement("button");
// // newbtn.innerHTML="Click Me";
// // newbtn.style.color="white";
// // newbtn.style.backgroundColor="red";
// // document.querySelector("body").prepend(newbtn);


// // let para=document.querySelector("p");
// // para.getAttribute("class");
// // para.classList.add("newClass");
// let modebtn=document.querySelector("#btn");
// let mode="light";
// // let mode="light";
// // modebtn.addEventListener("click", () =>{
// //     if(mode==="light"){
// //         mode="dark";
// //         document.querySelector("body").classList.add("dark");
// //         document.querySelector("body").classList.remove("light");
// //     }
// //     else{
// //         mode="light";
        
// //         document.querySelector("body").classList.add("light");
// //         document.querySelector("body").classList.remove("dark");
// //     }
// //     console.log(mode);
// // })
// modebtn.addEventListener("mouseover",() =>{
 
//     document.querySelector("body").classList.add("mouse");
   
   
// })

let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options=["rock", "paper" , "scissors"];
   const randIdx= Math.floor(Math.random() * 3);
   return options[randIdx];

} 

const drawGame = () =>{
    
    msg.innerText="Game draw .Play Again";
    msg.style.backgroundcolor="#081b31";
}
const showWinner=(userWin , userChoice , compChoice)=>{
    if(userWin){

        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You win Congratulations!  Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor="green";
        
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You lose. Computer  ${compChoice} beats  your ${userChoice} `;
       
        msg.style.backgroundColor="Red";
    }
}
const playGame = (userChoice) =>{
    console.log("User Choice =", userChoice);

    const compChoice = genCompChoice();
    console.log("comp Choice = ", compChoice);

    if(userChoice === compChoice)
    {
        drawGame();

    }
    else {
        let userWin=true;
        if(userChoice ==="rock" ){
            userWin = compChoice === "paper"? false :true;
    }
    else if(userChoice==="paper"){
        userWin = compChoice === "scissors"? false :true;

    }
    else if(userChoice==="scissors"){
        userWin = compChoice === "rock"? false :true;
      }
      showWinner(userWin , userChoice , compChoice);

}
};
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);

    });
   


});

































