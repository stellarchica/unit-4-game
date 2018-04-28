// $(document).ready(function(){ 
    var randomNumber;
    var win = 0;
    var lose = 0;
    var totalScore = 0;
    // global variables
    
    // previously...
    // for (var i = 0; i < 1; i++){

// initalize game
var resetAndStartGame = function () {

    randomNumber = Math.floor(Math.random() * 70) + 30;
    // console.log(randomNumber);
    // works outside of for loop

    $("#result").html('Number to reach: ' + randomNumber);

    // should display random number for player to try to reach
    // works


    for (var i = 0; i < 4; i++){
        var random = Math.floor(Math.random() * 11) + 1;
        // console.log(random);
        // should this be a different variable? controlling somethin else?

        // this is where it breaks
        // var crystals is not valid ...
        // better way to catch each crystal? better to do individually?
        var crystals = ['crystalOne',
            'crystalTwo',
            'crystalThree',
            'crystalFour'];

            // crystals.html(random);
            // console.log(crystals);

        $(".crystalOne").append(crystalOne);
        // no errors, but undefined?

        $(".crystalTwo").append(crystalTwo);

        $(".crystalThree").append(crystalThree);

        $(".crystalFour").append(crystalFour);

        // $(".crystal#").empty();

    }

    $("#totalScore").html("Your total score is: " + totalScore);
}

resetAndStartGame();

// var reset = function () {

// }

// not defined and error message
$(".crystals").on('click', "crystalOne", function () {
    var crystalOne = parseInt($(this).attr('random'));
    totalScore += crystalOne;
    // should display the value per click on the crystals, in console log
    // changes each time as game resets
    // repeat for each crystal? should be condensed. lesser coding is better
    var crystalTwo= parseInt($(this).attr('random'));
    totalScore += crystalTwo;

    var crystalThree = parseInt($(this).attr('random'));
    totalScore += crystalThree;

    var crystalFour = parseInt($(this).attr('random'));
    totalScore += crystalFour;

    $("#totalScore").html("Your total score is: " + totalScore);

    // console.log(totalScore);
    // not a number

    if (totalScore > randomNumber){
        lose++;

        $("#lose").html("You lose: " + lose);

        totalScore = 0;

        resetAndStartGame();
    }
    else if (counter === randomNumber){
        win++;

        $("#win").html("You win: " + win);

        totalScore = 0;

        resetAndStartGame();

        
    };

    });

// };

// USE CONSOLE LOG TO MAKE SURE WORKING
// fix code by comparing to logic

// user clicks on crystal
    // need to make onclick
// corresponding crystal adds value to user number on click
    // set random values for each of the crystals (can also be ahead of event coding)
        // will need to change per game
        // cannot be the same number every game
// user repeats process until one of two events
    // user number either matches random number
        // then winning message is displayed
        // tally added to win counter
    // user number passes random number
        // then losing message is displayed
        // tally added to lose counter
        
// game will reset & change values automatically?
    // bonus points for this, plus if without clicking reload button
    // would have to create as a for loop?