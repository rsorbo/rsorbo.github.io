
const car1 = new Object();
car1.name = "Red";
car1.distance = 0;

const car2 = new Object();
car2.name = "Green";
car2.distance = 0;

var redCar = document.getElementById("red");
var greenCar = document.getElementById("green");
var resetBtn = document.getElementById('reset');
var greenWin = document.getElementById("greenWin");
var redWin =   document.getElementById("redWin");
var tie = document.getElementById("tie");

var move1 = 0;
var move2 = 0;
max = 10;
increment=0;

const distanceToGo = 800;



function LetsGo(){
    document.getElementById('stop').src = "go.png";
    
    if (car1.distance >= distanceToGo)
    {
        console.log ("red car wins")
        redWin.style.visibility = "visible";
        resetBtn.style.visibility = "visible";

    }
    if (car2.distance >= distanceToGo)
    {
        console.log ("green car wins")

        resetBtn.style.visibility = "visible";
        greenWin.style.visibility = "visible";
    }
    
    if (car1.distance == distanceToGo && car2.distance == distanceToGo)
    {
        console.log ("It's a tie!")

        resetBtn.style.visibility = "visible";
        tie.style.visibility = "visible";
    }
    if (car1.distance<distanceToGo && car2.distance<distanceToGo)
    {
        moveRand()
        setTimeout(function(){LetsGo()}, 25);
}
    }

function Reset(){
    document.getElementById('stop').src = "stop.png";
    resetBtn.style.visibility = "hidden";
    greenWin.style.visibility = "hidden";
    redWin.style.visibility = "hidden";
    car1.distance = 0;
    car2.distance = 0;
    redCar.style.left = 0 + "px";
    greenCar.style.left = 0 + "px";
    move1 = 0;
    move2 = 0;
    increment = 0;



}


    function getRandomNumber(max){
        return Math.floor((Math.random() * (max+increment)));
    }
    
    
    function moveRand (){
        console.log ("starting max speeds ", max+increment)
        move1 = getRandomNumber(max);
        move2 = getRandomNumber (max);
    
        console.log ("Red Car starting distance: ", car1.distance)
        console.log ("Green Car starting distance: ", car2.distance)
    
        
            car1.distance = car1.distance + move1;
            car2.distance =  car2.distance + move2;
            redCar.style.left = car1.distance + "px";
            greenCar.style.left = car2.distance + "px";
            
            increment = increment +.01;
        
            move1 = 0;
            move2 = 0;
          }
    