$(document).ready(function(){ 
    var randomNumber = [Math.floor(Math.random() * 100)];

    $('#randomNumber').text(randomNumber);

    var jewelOneValue = [Math.floor(Math.random()* 10)];
    var jewelTwoValue = [Math.floor(Math.random()* 10)];
    var jewelThreeValue = [Math.floor(Math.random()* 10)];
    var jewelFourValue = [Math.floor(Math.random()* 10)];

    var winsCounter = 0;
    var lossesCounter = 0;
    var userNumber = 0;

    $('#numberWins').text(winsCounter);
    $('#numberLosses').text(lossesCounter);

    function reset(){
        randomNumber=Math.floor(Math.random()*101+19);
        console.log(randomNumber)
        $('#randomNumber').text(randomNumber);
        jewelOneValue = [Math.floor(Math.random()* 10)];
        jewelTwoValue = [Math.floor(Math.random()* 10)];
        jewelThreeValue = [Math.floor(Math.random()* 10)];
        jewelFourValue = [Math.floor(Math.random()* 10)];
        userNumber= 0;
        // create a variable for total number?
        $('#totalNumber').text(userNumber);
        }

        // convert into if-then statements?
    function success(){
        alert("You won!");
            wins++; 
            $('#numberWins').text(winsCounter);
            reset();
        }

    function failure(){
        alert ("You lose!");
            losses++;
            $('#numberLosses').text(lossesCounter);
            reset()
        }

    $('#jewel-one').on ('click', function(){
        userNumber = userNumber + jewelOneValue;
        console.log("New userNumber= " + userNumber);
        $('#finalTotal').text(userNumber); 
            //sets win/lose conditions
            if (userNumber == randomNumber){
            success();
            }
            else if ( userNumber > randomNumber){
            failure();
            }   
    })  
    $('#jewel-two').on ('click', function(){
        userNumber = userNumber + jewelTwoValue;
        console.log("New userNumber= " + userNumber);
        $('#finalTotal').text(userNumber); 
            if (userNumber == randomNumber){
            success();
            }
            else if ( userNumber > randomNumber){
            failure();
            } 
    })  
    $('#jewel-three').on ('click', function(){
        userNumber = userNumber + jewelThreeValue;
        console.log("New userNumber= " + userNumber);
        $('#finalTotal').text(userNumber);
    //sets win/lose conditions
            if (userNumber == randomNumber){
            success();
            }
            else if ( userNumber > randomNumber){
            failure();
            } 
    })  
    $('#jewel-four').on ('click', function(){
        userNumber = userNumber + jewelFourValue;
        console.log("New userNumber= " + userNumber);
        $('#finalTotal').text(userNumber); 
        
            if (userNumber == randomNumber){
            success();
            }
            else if ( userNumber > randomNumber){
            failure();
            }
    });   
}); 

// USE CONSOLE LOG TO MAKE SURE SHIT IS WORKING
// fix code by comparing to logic

// logic has to select random number for random number and jewel values
// user clicks on crystal
    // need to make onclick or as an event
// corresponding crystal adds value to user number on click
    // set random values for each of the crystals
        // will need to change per game
        // cannot be the same number e ery game
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
// research updateDisplay