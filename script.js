var tie=0;
var win=0;
var loss=0;
var RPS=["R", "P", "S"];
//math floor and random is randomly selecting a value within var RPS
var compPick= RPS[Math.floor(Math.random()*RPS.length)];
console.log(compPick);

function playGame(){
   var playerPick=prompt("Please pick R, P, or S");
   if (playerPick===compPick){
    tie++
    alert("It's a tie! ties: " + tie + " wins: " + win + " losses: " + loss);
    playGame();
   }
   else if (playerPick=="R"&& compPick=="P"){
    loss++
    alert("You lose :,( ties: " + tie + " wins: " + win + " losses: " + loss);
    playGame();
   }
   else if (playerPick=="R"&& compPick=="S"){
    win++;
    confirm("You win! ties: " + tie + " wins: " + win + " losses: " + loss);
    playGame();
   }
   else if (playerPick=="S"&& compPick=="R"){
    loss++
    alert("You lose :,( ties: " + tie + " wins: " + win + " losses: " + loss);
    playGame();
   }
   else if (playerPick=="S"&& compPick=="P"){
    win++;
    confirm("You win! ties: " + tie + " wins: " + win + " losses: " + loss);
    playGame();
   }
   else if (playerPick=="P"&& compPick=="S"){
    loss++
    alert("You lose :,( ties: " + tie + " wins: " + win + " losses: " + loss);
    playGame();
   }
   else if (playerPick=="P"&& compPick=="R"){
    win++;
    confirm("You win! ties: " + tie + " wins: " + win + " losses: " + loss);
    playGame();
   }
}

playGame();

