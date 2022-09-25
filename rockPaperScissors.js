function rockPaperScissors(playerTurn) {

    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';


    if (playerTurn === 'r' || playerTurn === 'Rock') {
        playerTurn = rock;
    } else if (playerTurn === 'p' || playerTurn === 'Paper') {
        playerTurn = paper;
    } else if (playerTurn === 's' || playerTurn === 'Scissors') {
        playerTurn = scissors;
    } else {
        console.log('Invalid Input. Try Agin...');
    }

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

    switch (computerRandomNumber) {
        case 1:
            computerRandomNumber = rock;
            break;
        case 2:
            computerRandomNumber = paper;
            break;
        case 3:
            computerRandomNumber = scissors;
            break;
    }
    let computerTurn = computerRandomNumber;
    console.log(`The computer choose ${computerTurn}`);

    if ((playerTurn === rock && computerTurn === scissors) || (playerTurn === paper && computerTurn === rock) || (playerTurn === scissors && computerTurn === paper)) {
        console.log('You win!');
    } else if ((playerTurn === scissors && computerTurn === rock) || (playerTurn === rock && computerTurn === paper) || (playerTurn === paper && computerTurn === scissors)) {
        console.log('You lose!');
    } else {
        console.log('This game was a draw!');
    }

}

rockPaperScissors('s')