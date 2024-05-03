export const beginningMono = () => {
    console.log(`
    ███████╗░█████╗░███╗░░░███╗██████╗░██╗███████╗
    ╚════██║██╔══██╗████╗░████║██╔══██╗██║██╔════╝
    ░░███╔═╝██║░░██║██╔████╔██║██████╦╝██║█████╗░░
    ██╔══╝░░██║░░██║██║╚██╔╝██║██╔══██╗██║██╔══╝░░
    ███████╗╚█████╔╝██║░╚═╝░██║██████╦╝██║███████╗
    ╚══════╝░╚════╝░╚═╝░░░░░╚═╝╚═════╝░╚═╝╚══════╝
    
    ░█████╗░██████╗░░█████╗░░█████╗░░█████╗░██╗░░░░░██╗░░░██╗██████╗░░██████╗███████╗
    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║░░░░░╚██╗░██╔╝██╔══██╗██╔════╝██╔════╝
    ███████║██████╔╝██║░░██║██║░░╚═╝██║░░██║██║░░░░░░╚████╔╝░██████╔╝╚█████╗░█████╗░░
    ██╔══██║██╔═══╝░██║░░██║██║░░██╗██║░░██║██║░░░░░░░╚██╔╝░░██╔═══╝░░╚═══██╗██╔══╝░░
    ██║░░██║██║░░░░░╚█████╔╝╚█████╔╝╚█████╔╝███████╗░░░██║░░░██║░░░░░██████╔╝███████╗
    ╚═╝░░╚═╝╚═╝░░░░░░╚════╝░░╚════╝░░╚════╝░╚══════╝░░░╚═╝░░░╚═╝░░░░░╚═════╝░╚══════╝`)}

//Start and death monos
export const startMono = () => {
    console.log("Listen up, folks. The hospital's gone to hell, and we're the last ones left standing.The dead don't stay dead anymore, and they're hungry. \nOur only chance is to work together, think fast, and find a way out before we join the ranks of the walking dead.\nLet's move, time's running out.")
}

export const deathMono = () => {
    console.log("The horde catches you and tears you limb from limb... \nGame Over")
}

//Room 1
export const blueDoorMono = () => {
    console.log("You have chosen to open the blue door. You walk into an old storage room with lines of shelves.\nYou spot a lockbox with a number pad. What do you choose to do?")
}

export const redDoorMono = () => {
    console.log("You go through the emergency exit but alarms start blaring. \nThe horde closes in on your position and you have no where to run...")
}

//Room 2

export const pryLockBoxMono = () => {
    console.log("You try to pry open the lock box with your bare hands. You aren't that strong... \nShould probably search the shelves")
}

export const folderMono = () => {
    console.log("You find an old folder. It has information about the hospital and in it you find a map.\nWhen you pull out the map a post it note falls out with a 5 digit code on it.")
}

export const readMapMono = () => {
    console.log("Reading the map you see that there are 2 options. Go upstairs towards a communications room or downstairs to a possible safe room.")
}

export const safeRoomMono = () => {
    console.log("You've made your way down to the safe room, but to your horror, it has been compromised by zombies, and you have nowhere left to run.")
}

//Room 3

export const commsRoomMono = () => {
    console.log("You go up to the communications room. There are signs that other people have already passed through as it seems its been ransacked...")
}

export const woodenPlankNo = () => {
    console.log("You can't secure the entrace to the comms room and time is running out. Hurry!")
}

export const woodenPlankYes = () => {
    console.log("You use the wooden planks that you found in the storage room to secure the windows and door of the comms room.\nYou're safe from the zombies for now.")
}

//Room 4
//Game end monologues depending on choice

export const brokenRadioMono = () => {
    console.log("You spot a broken radio. Fix it with what you have or search the room further.")
}

export const fixRadio = () => {
    console.log("In the aftermath of outbreak, the survivors huddled around a broken radio, working tirelessly until the static made a clear distress call.\nAcross the airwaves, their call of desperation reached another group of survivors. \nWith bated breath, they awaited their newfound hope, knowing their unity had created a beacon guiding them to salvation amid chaos.")
}

export const searchRoom = () => {
    console.log("You saw a way to the roof on the map and rush to use the flare. \nThe flare shoots up into the sky lighting up the street to reveal hordes of zombies sleeping.\nThe flare worked against you and instead of survivors the zombies are attracted to your positon.\nYour fate is unkown...")
}





