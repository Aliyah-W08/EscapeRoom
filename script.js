import inquirer from 'inquirer';
import { beginningMono, startMono, redDoorMono, blueDoorMono, deathMono, pryLockBoxMono, folderMono, readMapMono, safeRoomMono, commsRoomMono, woodenPlankYes, woodenPlankNo, brokenRadioMono, fixRadio, searchRoom } from './monologue.js';
import { finishGame, barricade, choice, chooseAction, lockboxChoice, pinOnBox, readingMap, playAgainPrompt, chooseMore, chooseNextAction, radioOrFlare } from './inq.js';
//import {Room2Supplies} from './class.js'



//red,blue door choice
console.log(beginningMono())
const display = async () => {
    try {
        startMono();
        let timeLeft = 10;
        const timer = setInterval(() => {
            console.log(`Time left: ${timeLeft} seconds`);
            timeLeft -= 1;
        }, 1000);

        const chosen = await Promise.race([
            choice(),
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    clearInterval(timer);
                    reject(new Error('Time limit exceeded'));
                }, 10000);
            })
        ]);

        clearInterval(timer);

        if (chosen === "Red door") {
            console.log(redDoorMono(), deathMono());

            let playAgain = await playAgainPrompt();
            if (playAgain === "yes") {
                console.log(beginningMono())
                await display();
            } else {
                console.log("Game over.");
                await finishGame();
            }

            return false;
        } else {
            console.log(blueDoorMono());
            return true;
        }
    }
    catch (error) {
        console.log(error.message);
        const playAgain = await playAgainPrompt();
        if (playAgain === "yes") {
            display();
        } else {
            console.log("Game over. Thanks for playing!");
            await finishGame()
        }
    }
};

//bluedoor supplies choices 

const supplies = async () => {
    try {
        console.log("Starting the operation...");
        let timeLeft = 10;
        const timer = setInterval(() => {
            console.log(`Time left: ${timeLeft} seconds`);
            timeLeft -= 1;
            if (timeLeft < 0) {
                clearInterval(timer);
                throw new Error('Time limit exceeded');
            }
        }, 1000);

        const chosenlockbox = await Promise.race([
            lockboxChoice(),
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    clearInterval(timer);
                    reject(new Error('Time limit exceeded'));
                }, 10000);
            })
        ]);

        clearInterval(timer);

        if (chosenlockbox.toLowerCase() === "yes") {
            console.log(pryLockBoxMono());
            console.log(folderMono());
        } else {
            console.log(folderMono());
        }
    } catch (error) {
        console.log(error.message);
        const playAgain = await playAgainPrompt();
        if (playAgain === "yes") {
            display();
        } else {
            console.log("Game over. Thanks for playing!");
            await finishGame();
        }
    }
};


//using pin 
const UsingPin = async () => {
    try {
        let timeLeft = 10;
        const timer = setInterval(() => {
            console.log(`Time left: ${timeLeft} seconds`);
            timeLeft -= 1;
            if (timeLeft < 0) {
                clearInterval(timer);
                throw new Error('Time limit exceeded');
            }
        }, 1000);

        while (true) {
            const UsingPinOnBox = await Promise.race([
                pinOnBox(),
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                        clearInterval(timer);
                        reject(new Error('Time limit exceeded'));
                    }, 10000);
                })
            ]);

            clearInterval(timer);

            if (UsingPinOnBox.toLowerCase() === "box") {
                console.log("The lockbox pops open, you find some food, medicine, and scrap metal.");
                break;
            } else {
                console.log("That is incorrect.");
                console.log("HINT: look around the room where could you use a pin?");
            }
        }
    } catch (error) {
        console.log(error.message);
        const playAgain = await playAgainPrompt();
        if (playAgain === "yes") {
            console.log(beginningMono())
            await display();
        } else {
            console.log("Game over. Thanks for playing!");
            await finishGame();
        }
    }
};

//reading map
const readMap = async () => {
    try {
        readMapMono();
        let timeLeft = 10;
        const timer = setInterval(() => {
            console.log(`Time left: ${timeLeft} seconds`);
            timeLeft -= 1;
            if (timeLeft < 0) {
                clearInterval(timer);
                throw new Error('Time limit exceeded');
            }
        }, 1000);

        clearInterval(timer);

        const chosenUpOrDown = await Promise.race([
            readingMap(),
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    clearInterval(timer);
                    reject(new Error('Time limit exceeded'));
                }, 10000);
            })
        ]);

        if (chosenUpOrDown.toLowerCase() === "up") {
            console.log(commsRoomMono())
        } else if (chosenUpOrDown.toLowerCase() === "down") {
            console.log(safeRoomMono(), deathMono())
            console.log(playAgain)
        }


    } catch (error) {
        console.log(error.message);
        const playAgain = await playAgainPrompt();
        if (playAgain === "yes") {
            console.log(beginningMono())
            await display();
            await supplies ();
            await UsingPin()
        } else {
            console.log("Game over. Thanks for playing!");
            await finishGame();
        }
    }
};

//barricade

const wood = async () => {
    try {
        const collectedWood = await Promise.race([
            barricade(),
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(new Error('Time limit exceeded'));
                }, 10000);
            })
        ]);


        if (collectedWood.toLowerCase() === "yes") {
            console.log(woodenPlankYes());
        }else {
            console.log(woodenPlankNo(), deathMono())
            console.log(playAgain)
        }


    } catch (error) {
        console.log(error.message);
        const playAgain = await playAgainPrompt();
        if (playAgain === "yes") {
            console.log(beginningMono())
            await display()
            await supplies ();
            await UsingPin();
            await readMap()
        } else {
            console.log("Game over. Thanks for playing!");
            await finishGame();

        }
    }
};

//broken radio
const Radio = async () => {
    try {
        console.log("Starting Radio room...");
        let timeLeft = 10;
        let timer = setInterval(() => {
            console.log(`Time left: ${timeLeft} seconds`);
            timeLeft -= 1;
            if (timeLeft < 0) {
                clearInterval(timer);
                throw new Error('Time limit exceeded');
            }
        }, 1000);

        brokenRadioMono();
        const action = await chooseAction();
        if (action.toLowerCase() === "search the room") {
            const supplies = await chooseMore();
            console.log(supplies);
            clearInterval(timer); // Clear the current timer
            timeLeft = 10; // Reset the time left
            timer = setInterval(() => { // Start a new timer
                console.log(`Time left: ${timeLeft} seconds`);
                timeLeft -= 1;
                if (timeLeft < 0) {
                    clearInterval(timer);
                    throw new Error('Time limit exceeded');
                }
            }, 1000);
        } else if (action.toLowerCase() === "fix it") {
            console.log("You need to search the room because you cannot fix the radio with what you have.");

            const nextAction = await chooseNextAction();
            if (nextAction.toLowerCase() === "search the room") {
                const supplies = await chooseMore();
                console.log(supplies);
                clearInterval(timer); // Clear the current timer
                timeLeft = 10; // Reset the time left
                timer = setInterval(() => { // Start a new timer
                    console.log(`Time left: ${timeLeft} seconds`);
                    timeLeft -= 1;
                    if (timeLeft < 0) {
                        clearInterval(timer);
                        throw new Error('Time limit exceeded');
                    }
                }, 1000);
            } else {
                console.log("You need to search the room because you cannot fix the radio with what you have.");
            }
        }
    } catch (error) {
        console.log(error.message);
        const playAgain = await playAgainPrompt();
        if (playAgain === "yes") {
            Radio(); // Restart the game
        } else {
            console.log("Thanks for playing!");
        }
    }
};

//choose to use radio or flare
const flare = async () => {
    try {
        console.log("Starting final room...");
        let timeLeft = 10;
        const timer = setInterval(() => {
            console.log(`Time left for final room: ${timeLeft} seconds`);
            timeLeft -= 1;
            if (timeLeft < 0) {
                clearInterval(timer);
                throw new Error('Time limit exceeded');
            }
        }, 1000);

        const choose = await radioOrFlare();

        clearInterval(timer);

        if (choose === "Radio") {
            console.log(fixRadio());
        } else if (choose === "Flare") {
            console.log(searchRoom());
        }

        console.log("Game over. Thanks for playing!");
    } catch (error) {
        console.log(error.message);
        console.log("Game over. Thanks for playing!");
    }
};

const gameLoop = async () => {
    let playAgain = true;
    while (playAgain) {
        await display();
        await supplies();
        await UsingPin();
        await readMap();
        await wood();
        await Radio();
        await flare();

        // Ask if the player wants to play again
        playAgain = await playAgainPrompt();

    }

    console.log("Game over. Thanks for playing!");
}

gameLoop()


