import inquirer from 'inquirer';

/*export const playAgainPrompt = async () => {
    const answer = await inquirer.prompt({
        type: 'input',
        name: 'playAgain',
        message: 'Do you want to play again? (Yes/No)',
    });
    return answer.playAgain.trim().toLowerCase();
};*/


export const playAgainPrompt = async () => {
    const {answer} = await inquirer.prompt({
        name: 'answer',
        type: ' input',
        message: 'Do you want to play again? (Yes/No)',
    });
    return answer.toLowerCase();
};





export const choice = async () => {
    let { result } = await inquirer.prompt({
        name: "result",
        type: "list",
        message: "Choose to open the red door or the blue door",
        choices: ["Red door", "Blue door"]
    })

    return result
}

export const lockboxChoice = async () => {
    let { result1 } = await inquirer.prompt({
        name: "result1",
        type: "list",
        message: "You see a lockbox with a number pad, do you try to pry it open?",
        choices: ["Yes", "No"]
    })
    return result1
}

export const pinOnBox = async () => {
    let { choice } = await inquirer.prompt({
        name: "choice",
        type: "input",
        message: "Where would you like to use the pin?"
    })
    return choice
}

export const readingMap = async () => {
    let { chosen } = await inquirer.prompt({
        name: "chosen",
        type: "list",
        message: "Up or Down...?",
        choices: ["Up", "Down"]
    })
    return chosen
}

export const barricade = async () => {
    let { chosen1 } = await inquirer.prompt({
        name: "chosen1",
        type: "input",
        message: "Did you collect the wood from the Storage Room?"
    })
    return chosen1
}

export const chooseMore = async () => {
    let { chosen2 } = await inquirer.prompt({
        name: "chosen2",
        type: "checkbox",
        message: "As you search the room, you see a variety of supplies you can use to fix the radio. \n You only have space for 2, which do you choose?",
        choices: [
            { name: "Wires" },
            { name: "Ductape" },
            { name: "Batteries" }
        ]
    })
    return chosen2
}


export const chooseAction = async () => {
    let { chosen3 } = await inquirer.prompt({
        name: "chosen3",
        type: "list",
        message: "Do you choose to fix it or search the room? ",
        choices: ["fix it", "search the room"]
    })
    return chosen3
}

export const chooseNextAction = async () => {
    let { chosen4 } = await inquirer.prompt({
        name: "chosen4",
        type: "list",
        message: "Do you want to search the room now?",
        choices: ["Fix it", "Search the room"]
    });
    return chosen4;
};

export const radioOrFlare = async () => {
    let{chosen5} = await inquirer.prompt({
        name:"chosen5",
        type:"list",
        message:"You need to contact survivors. Which do you use?",
        choices:["Radio" , "Flare"]
    })
    return chosen5
}

export const finishGame = async () => {
    let {chosen6} = await inquirer.prompt({
        name:"chosen6",
        type:"input",
        message:"Hope you enjoyed this game. It was created by Aliyah, Danilo and Hassan. Thanks for playing :)"
    })
    return chosen6
}