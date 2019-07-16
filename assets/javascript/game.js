// declaring variables
var target = 0;
var current = 0;
var g1val = 0;
var g2val = 0;
var g3val = 0;
var g4val = 0;

// call the number generator at the start of the document for the target and 4 gem values
function gemGenerator (){
    var gGen = Math.floor((Math.random()*12)+1);
    return gGen;
}

// function to randomly generate the target value
function targetGenerator () {
    var tGen = Math.floor((Math.random()*120)+12);
    return tGen;
}

console.log(gemGenerator());
console.log(targetGenerator());
// function to add click value to current
// if statement for if current = or greater than target player loses
// if current = target, the player wins 
// reset function - random generates the gems and target values
//      1) the current gets reset to 0;



