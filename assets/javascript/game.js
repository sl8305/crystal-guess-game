// waits for the doms to be created in order to reference them
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
        //  value is supposed to be between 1 and 12
        var gGen = Math.floor((Math.random()*12)+1);
        return gGen;
    }

    // function to randomly generate the target value
    function targetGenerator () {
        // value is supposed to be between 12 and 120
        var tGen = Math.floor((Math.random()*120)+12);
        return tGen;
    }
    g1val = gemGenerator();
    g2val = gemGenerator();
    g3val = gemGenerator();
    g4val = gemGenerator();
    target = targetGenerator()
    $('#target').html(target);
    $('#score').html(current);
    $('#win').html(wins);
    $('#lost').html(lost);

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

    // function to check the score. 
    function checkScore() {
        // if the current is larger than the target the # lost is incremented
        // the reset function is called and the # of lost games is updated
        if (current > target){
            lost ++;
            // gives user feedback to let them know if they won or lost
            alert("You Lost \n Try again?");

            reset();

            $('#lost').text(lost);

        }else if (current === target){ 
            // if the current is equal to the target the player wins.
            // wins increments and the values are reset.
            wins ++;

            // gives user feedback to let them know if they won or lost
            alert("You Won \n Play again?");

            reset();

            $('#win').text(wins);
        }
    }

    // reset function - resets the gem, the current, and the target values
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

});
