let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
let compScorePara = document.querySelector("#comp");
let userScorePara = document.querySelector("#user");


const gencompchoice = () =>{
    const options = ["rock" , "paper" , "scissors"];
    const val = Math.floor(Math.random() * 3)
    return options[val]
}

const draw = () =>{
    msg.innerText = "it was a draw";
    msg.style.backgroundColor = "#3c096c";
    
}
const showwinner = (flag , userchoice , compchoice)=>{

    if (flag){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win choose ${userchoice} and beat ${compchoice}`;
        msg.style.background = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you loose choose ${userchoice} and he chooses ${compchoice}`;
        msg.style.background = "red";
    }
}
const playgame = (userchoice) =>{
    // console.log(userchoice);
    const compchoice = gencompchoice()
    // console.log(compchoice)
    if (userchoice === compchoice){
        draw();
    }
    else{
        let flag = true;
        if (userchoice === "rock"){
            flag = (compchoice ==="scissors")?true:false;
        }
        else if (userchoice === "paper"){
            flag = (compchoice ==="rock")?true:false;
        }
        else if(userchoice === "scissors"){
            flag = (compchoice === "paper")?true:false;
        }
        showwinner(flag , userchoice , compchoice);
    }
    
}
choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice)
    })
})