let leftBut = document.querySelector("#teamone-shoot-button");
let rightBut = document.querySelector("#teamtwo-shoot-button");
let resetBut =document.querySelector("#reset-button");

let leftShot = document.querySelector("#teamone-numshots");
let rightShot = document.querySelector("#teamtwo-numshots");
let resetCount = document.querySelector("#num-resets")

let leftGoal = document.querySelector("#teamone-numgoals");
let rightGoal = document.querySelector("#teamtwo-numgoals");


let leftPoint = Number(leftGoal.innerHTML);
let rightPoint= Number(rightGoal.innerHTML);

let leftValue = Number(leftShot.innerHTML);
let rightValue = Number(rightShot.innerHTML);
let resetValue = Number(resetCount.innerHTML)



leftBut.addEventListener("click", function() {
    console.log ("left button clicked");
    leftValue +=1;
    leftShot.innerHTML= leftValue; 
   
    let ranNum= Math.floor((Math.random() * 10) + 1);
    console.log(ranNum)

    if (ranNum % 2 === 0) {
        leftPoint +=1;
        leftGoal.innerHTML = leftPoint;
    }
})

rightBut.addEventListener("click", function() {
    console.log ("right button clicked");
    rightValue +=1;
    rightShot.innerHTML= rightValue  
   
    let ranNum= Math.floor((Math.random() * 10) + 1);
    console.log(ranNum)

    if (ranNum % 2 === 0) {
        rightPoint +=1;
        rightGoal.innerHTML = rightPoint;
    }
})
resetBut.addEventListener("click", function(){
    console.log ("reset button clicked");
 

    if (leftGoal.innerHTML < rightGoal.innerHTML){
        alert("Team 2 Wins!!")
    } else {
        alert("Team 1 Wins!!")
    }
       resetValue +=1;
    resetCount.innerHTML= resetValue; 
    leftPoint= 0;
    leftGoal.innerHTML=leftPoint
    leftValue= 0;
    leftShot.innerHTML=leftValue
    rightPoint= 0;
    rightGoal.innerHTML=rightPoint
    rightValue= 0;
    rightShot.innerHTML=rightValue
})