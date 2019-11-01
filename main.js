
/** Keeps track of current room position.
 * @type {number}*/
let currentRoom = 1;

/**@type {boolean}*/
let gameOver = false;

/**
 * Is run at start and on reset.
 * Clears text-output and sets currentRoom to 1 and gameOver to false.
 */
function startGame(){
    currentRoom = 1;
    gameOver = false;
    document.querySelector('.text-output').innerHTML = '';
    addTextToOutput(rooms[currentRoom].roomText);
}

/**
 * Is run when the user presses Enter button and Sends input to goToRoom function.
 * Clears input field for next input.
 */
function getTextButton(){
    let inText = document.getElementById('inTextId').value; //Get input from html input inTextId.
    document.getElementById('inTextId').value = ''; //Empty input from previous input.
    
    if(gameOver === false){      //lock input if game is over.
        addTextToOutput('<br>'+inText); //Display input.
        goToRoom(inText) //Send input to goToRoom.  
    }
}

/**
 * Add new text to html .text-output div on top of old text.
 * @param {string} inText
 */
function addTextToOutput(inText){
    let oldText = document.querySelector('.text-output').innerHTML;
    let newText = '<p>'+inText+'</p>' + oldText;
    document.querySelector('.text-output').innerHTML = newText;
}

/**
 * Check if userInput is the same as any actionText in doorOptions array.
 * Sets currentRoom to nextRoom from selected doorOptions object.
 * Sends text from new room to addTextToOutput function.
 * @param {string} userInput
 */
function goToRoom(userInput){

    let doorOpened = false;
    for (const door of rooms[currentRoom].doorOptions) {
        //If userInput is the same as actionText then set nextRoom as currentRoom.
        if(door.actionText == userInput){
            currentRoom = door.nextRoom;
            console.log('current room ' + currentRoom);
            addTextToOutput(rooms[currentRoom].roomText);
            doorOpened = true;
            isGameOver();
        }

    }
    //error text if user inputs the wrong value.
    if (!doorOpened) {
        addTextToOutput('That is not possible, try again.');
    }
}
/**
 * Sets gameOver to true if player reaches win or lose rooms.
 */
function isGameOver(){
    if(currentRoom == 0||currentRoom == 6||currentRoom == 7){
        gameOver = true;
    }
}

/*
 *@typedef  {{ roomText: String, doorsToRooms: Array<Number>}} Room
 */

/*
 * Array of room objects containing roomText string
 * and an array of available doorOptions to enter whit actionText string and nextRoom number.
 * @type {Array<Room>}
 */

 /**
  * @typedef {roomText: String}
  */
const rooms = [
    {   //0 You died.
        roomText:
        'You did not make it, you are dead. Game Over.',
    },
    {   //1 start.
        roomText:
        'The world has ended, everything is on fire. You see a door. Do you want to <b>keep running</b> or <b>enter building</b>.',
        doorOptions: [
            {
                actionText: "keep running",
                nextRoom: 0 
            },
            {
                actionText: "enter building",
                nextRoom: 2 
            }
        ]
    },
    {   //2 enter first room , ladder down or next door.
        roomText:
        'You enter the building and the walls fall in and block the way back. You see a ladder leading down, and another door.<br>Climb down the <b>ladder</b> or open the next <b>door</b>.',
        doorOptions: [
            {
                actionText: "ladder",
                nextRoom: 3 
            },
            {
                actionText: "door",
                nextRoom: 4 
            }
        ]
    },
    {   //3 down the ladder , keep going or return.
        roomText:
        'You climb down and you see a dead body, you feel sick. Do you <b>go back up</b> or <b>keep going</b>.',
        doorOptions: [
            {
                actionText: "go back up",
                nextRoom: 2 
            },
            {
                actionText: "keep going",
                nextRoom: 6 
            }
        ]
    },
    {   //4 next door or return.
        roomText:
        'You open the door and see a metal object on the floor and a blocked door. Do you <b>go back</b> or <b>pick up</b> the metal object.',
        doorOptions: [
            {
                actionText: "go back",
                nextRoom: 2 
            },
            {
                actionText: "pick up",
                nextRoom: 5 
            }
        ]
    },
    {   //5 explosive pickup.
        roomText:
        'You pick up the object and you hear a spring move, you have picked up an explosive device and its about to blow. Do you <b>throw</b> the device at the blocked door. Or try to <b>disarm</b> it.',
        doorOptions: [
            {
                actionText: "throw",
                nextRoom: 7 
            },
            {
                actionText: "disarm",
                nextRoom: 0 
            }
        ]
    },
    {   //6 radiation dead.
        roomText:
        'You see green glowing goo on the ground, you feel to weak too walk, its radioactive. You died. Game Over.',
    },
    {   //7 blow up door Freedom win.
        roomText:
        'The explosives blow the door open, you see light coming trough the dust, you have found safe place in The Apocalypse. You Win! Game Over.',
    }
]

//Starts game.
startGame();
