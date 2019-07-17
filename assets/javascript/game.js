$(document).ready(function() {
    // declaring variables
    var target = 0;
    var current = 0;
    var g1val = 0;
    var g2val = 0;
    var g3val = 0;
    var g4val = 0;
    var wins = 0;
    var lost = 0;

    // call the number generator at the start of the document for 
    // the target and 4 gem values
    function gemGenerator (){
        var gGen = Math.floor((Math.random()*12)+1);
        return gGen;
    }

    // function to randomly generate the target value
    function targetGenerator () {
        var tGen = Math.floor((Math.random()*120)+12);
        return tGen;
    }
    g1val = gemGenerator();
    g2val = gemGenerator();
    g3val = gemGenerator();
    g4val = gemGenerator();
    target = targetGenerator()
    $('#target').html(target);

    // function to add click value to current
    $('#gem1').click(function(){
        current += g1val;
        $('#score').text(current);
        checkScore();
    });

    $('#gem2').click(function(){
        current += g2val;
        $('#score').text(current);
        checkScore();
    });

    $('#gem3').click(function(){
        current += g3val;
        $('#score').text(current);
        checkScore();
    });

    $('#gem4').click(function(){
        current += g4val;
        $('#score').text(current);
        checkScore();
    });

    // if the current is > target the player loses
    function checkScore() {
        if (current > target){
            lost ++;
            reset();
            $('#lost').text(lost);
        }else if (current === target){ // if the current is equal to the target the player wins.
            // wins increments and the values are reset.
            wins ++;
            reset();
            $('#win').text(wins);
        }
    }

    function reset() {
        current = 0;
        g1val = gemGenerator();
        g2val = gemGenerator();
        g3val = gemGenerator();
        g4val = gemGenerator();
        target = targetGenerator();
        $('#target').html(target);
        $('#score').text(current);
    }
    // if statement for if current = or greater than target player loses
    // if current = target, the player wins 
    // reset function - random generates the gems and target values
    //      1) the current gets reset to 0;

});