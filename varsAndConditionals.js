/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between anakin and
    obi wan.
*/ 

let anakinAttack = 25;
let obiwanAttack = 35;

if(anakinAttack > obiwanAttack) {
    console.log("anakin has the better attack")
} else if(anakinAttack < obiwanAttack) {
    console.log("obi wan has the better attack")
} else if (anakinAttack === obiwanAttack) {
    console.log("attacks are the same")
}

let anakinHealth = 100

if(anakinHealth <= 0) {
    console.log("anakins legs are gone.")
} else {
    anakinHealth = anakinHealth - obiwanAttack
    // anakinHealth -= obiwanAttack
    console.log(`Anakins health is down to ${anakinHealth}`)
}

if((anakinHealth = 50) >= 100) {
    anakinHealth = 100 
}  else {
    anakinHealth += 50
}

console.log(anakinHealth)

let(coinLandsHeads === false)

if(coinLandsHeads === true) {
    console.log("the fight continues")
} else if(coinLandsHeads !== true) {
    console.log("Anakin runs away")
}

for(let i =0; i < 5; i++) {
}   if(anakinHealth > 0) {
    anakinHealth -= obiwanAttack;
    console.log (`Anakins health is now ${anakinHealth}.`)
} else {
    console.log("anakin is dead")
}




while(anakinHealth > 0) {
    anakinHealth -= obiwanAttack
    console.log(`Anakins health is now ${anakinsHealth}`)
    
}
