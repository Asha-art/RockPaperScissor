var playerWin = 0;
var computerWin = 0;

var tie = 0;


for(i = 0; i < 5; i++) {


var choice = ['rock', 'paper', 'scissors'];


function getChoice(){
    let rand=Math.random();
         if (rand < 0.34 ){
                return choice[0];
            }else if (rand < 0.67 ){
                return choice[1];
            }else{
                return choice[2];
            }
}
        var computerChoice = getChoice();
        var userChoice = getChoice();

// Display computer choice
console.log("Computer choice: "  + computerChoice );
console.log("Your choice: "+ userChoice);

// Compare user choice vs computer choice
 function compare () {
     if(computerChoice == userChoice){
                tie++;
                return "It is a tie!";
            }

            if(computerChoice == 'rock'){
                if(userChoice == 'scissors'){
                    computerWin++;
                    return "you lose!";
                }else {
                    playerWin++;
                    return " you win!";
                }
            }
            
            if(computerChoice == 'paper'){
                if(userChoice == 'rock'){
                    computerWin++;
                    return "you lose!";
                }else {
                    playerWin++;
                    return "you win!";
                }
            }

            if(computerChoice == 'scissors'){
                if(userChoice == 'paper'){
                    computerWin++;
                    return "you lose!";
                }else {
                    playerWin++;
                    return "you win!";
                }
            }
};
// Run the compare function
var results = compare(userChoice,computerChoice);
// Display results
console.log(results);


}
//console.log('Final Results: '  + computer2 +  ' had ' + computerWin + '. The ' + player1 + ' had ' + playerWin);
console.log("Final Results: Win-"+computerWin+"; "+ "Loss-" + playerWin+";"+ "Tie-"+tie+";");
