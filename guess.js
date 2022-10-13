/*
create a program that guesses a number from 1 to 10
then asks us to guess that number.
if it higher say "too high" and ask again.
if it lower say "too low" and ask again.
if it's the right number say "congratulations" and exit

*/
import readline from "readline-sync"

let userGuessedRight = false
    // guess a number from 1-10
    let NumberChosen = Math.ceil(Math.random() * 10)
    //console.log(NumberChosen)
while(!userGuessedRight) {
    let guess = readline.question("What is your guess?") //ask for a guess of our number.
    if (guess == NumberChosen) { // is it equal
        
            console.log("congratulations")
            userGuessedRight = true // get out
        }
    if (guess > NumberChosen)
        {
            console.log("too high! try again")
            //userGuessedRight = false
        }
    if (guess < NumberChosen)
        {
            console.log("too low! try again")
            //userGuessedRight = false
        }

}

