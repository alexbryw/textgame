
/**
 * Keeps track of current room position.
 * @type {number}
 **/
let currentRoom = 1;

/**
 * Keeps track of if game is over.
 * @type {boolean}
*/
let gameOver = false;


/**
 * HTML element for text input used in eventListener.
 * @type {HTMLElement}
 */
const inputTextElement = document.getElementById('inTextId');
//Listens for Enter key presses and triggers the Enter button.
inputTextElement.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById('button-input').click();
    }
})

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
        addTextToOutput('That does not work, try again.');
    }
}
/**
 * Sets gameOver to true if player reaches win or lose rooms.
 */
function isGameOver(){
    if(currentRoom == 0||currentRoom == 6||currentRoom == 7||currentRoom == 9){
        gameOver = true;
    }
}

/**
 * An object Room containing a string roomText and an array of Door objects.
 * @typedef  {{ roomText: String, doorOptions: Array<Door> }} Room
 */

/**
 * An object Door containing a string actionText and a number in nextRoom.
 * @typedef {{ actionText: String, nextRoom: Number }} Door
 */

 /**
  * An array of Room objects.
  * @type {Array<Room>}
  */
const rooms = [
    {   //0 You died.
        roomText:
        'You did not make it, you are dead. Game Over.',
        doorOptions: [
            {
                actionText: "",
                nextRoom: 0 
            }
        ]
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
        'You are in the entrance hall, the way out is blocked. You see a ladder leading down, and another door.<br>Climb down the <b>ladder</b> or open the next <b>door</b>.',
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
        'You climb down and you see a dead body, you feel sick. The body has a note in its hand, it reads "PIN code: 5498." Do you <b>go back up</b> or <b>keep going</b>.',
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
        'You open the door and see a metal object on the floor, a blocked door and a vault door whit a keypad. Do you <b>go back</b> or <b>pick up</b> the metal object or go to the <b>vault</b> door.',
        doorOptions: [
            {
                actionText: "go back",
                nextRoom: 2 
            },
            {
                actionText: "pick up",
                nextRoom: 5 
            },
            {
                actionText: "vault",
                nextRoom: 8 
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
        'You see green glowing goo on the ground, it’s radioactive. You feel too weak too walk, you collapse but try to crawl back. There are now two bodies by the ladder. You died. Game Over.',
        doorOptions: [
            {
                actionText: "",
                nextRoom: 0 
            }
        ]
    },
    {   //7 blow up door win.
        roomText:
        'The explosives blow the door open, you see light coming trough the dust, you have found a safe place in The Apocalypse. You Win! Game Over.',
        doorOptions: [
            {
                actionText: "",
                nextRoom: 0 
            }
        ]
    },
    {   //8 vault keypad.
        roomText:
        'You see a keypad on the vault door, do you enter a <i>four digit PIN code</i>, or <b>go back</b>.',
        doorOptions: [
            {
                actionText: "go back",
                nextRoom: 4 
            },
            {
                actionText: "5498",
                nextRoom: 9 
            }
        ]
    },
    {   //9 vault keypad win.
        roomText:
        'The keypad light up and you hear large metal cogs grinding. The vault door opens up, you have found a safe place in The Apocalypse. You Win! Game Over.',
        doorOptions: [
            {
                actionText: "",
                nextRoom: 0 
            }
        ]
    }
]

//Starts the game.
startGame();