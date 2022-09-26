
//1 - What to wear

function whatToWear (temperature) {

    if (temperature >= 20) {
        return "Dress"
    }
    if (temperature < 20 && temperature > 10) {
        return "Light blouse"
    }
    if (temperature <= 10) {
        return "Coat"
    }
}
console.log(whatToWear(45));

//dice game

function diceGame(numOfRolls) {
amountOfSix = 0

for(let i = 0; i < numOfRolls; i++) {
let randomNumber = Math.floor(Math.random() * 6) + 1;

if (randomNumber === 6)
    console.log("You just hit 6")
    else
    console.log("You hit "+randomNumber+" try again");

// part 2

if (randomNumber === 6) {
    amountOfSix++
    if(amountOfSix === numOfRolls)
        console.log("JACKPOT");
}
}
}
diceGame(2)

