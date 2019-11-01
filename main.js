/**
 * Keeps track of current room position.
 * @type {number}
 */
let currentRoom = 1;

/**
 * Is run at start and on reset.
 * Clears text-output and sets currentRoom to 1.
 */
function startGame(){
    currentRoom = 1;
    document.querySelector('.text-output').innerHTML = '';
    addTextToOutput(rooms[currentRoom].roomText);
}

/**
 * Is run when user presses Enter button andSends input to goToRoom function.
 * Clears input field for next input.
 */
function getTextButton(){
    //get input from html input inTextId.
    let inText = document.getElementById('inTextId').value;
    //Empty input from previous input. 
    document.getElementById('inTextId').value = '';
    //Display input.
    addTextToOutput('<br>'+inText);
    //Send input to goToRoom.
    goToRoom(inText)
}

/**
 * Add new text to html .text-output div.
 * @param {string} inText
 */
function addTextToOutput(inText){
    let oldText = document.querySelector('.text-output').innerHTML;
    let newText = '<p>'+inText+'</p>' + oldText;
    document.querySelector('.text-output').innerHTML = newText;
}

/**
 * Check if input is a valid room number in doorsToRooms array.
 * Sets currentRoom to new value from selected doorsToRooms array index.
 * Sends text from new room to addTextToOutput function.
 * @param {(string|number)} roomNumberInput 
 */
function goToRoom(roomNumberInput){

    let doorOpened = false
    for (const door of rooms[currentRoom].doorsToRooms) {
        //If roomNumberInput is not null(empty) then set that room as currentRoom.
        if(door.text == roomNumberInput){
            currentRoom = door.nextRoom;
            console.log('current room ' + currentRoom)
            addTextToOutput(rooms[currentRoom].roomText);
            doorOpened = true
        }

    }
    //error text if user inputs the wrong value.
    if (!doorOpened) {
        addTextToOutput('That is not possible, try again.');
    }
}

/**
 * 
 */

/**
 * Array of room objects containing roomText string
 * and array of available doors to enter.
 * @type {Array<>}
 */
const rooms = [
    {   //0 You died.
        roomText:
        'You did not make it, you are dead. Game Over.',
        doorsToRooms: []
    },
    {   //1 start.
        roomText:
        'The world has ended, everything is on fire. You see a door. Do you want to <b>run away</b> or <b>enter building</b>.',
        doorsToRooms: [
            {
                text: "run away",
                nextRoom: 0 
            },
            {
                text: "enter building",
                nextRoom: 2 
            }
        ]
    },
    {   //2 enter first room , ladder down or next door.
        roomText:
        'You enter the building and the walls fall in and block the way back. You see a ladder leading down, and another door.<br>Enter 0 to climb down the ladder.<br>Enter 1 to open the next door.',
        doorsToRooms: [3,4]
    },
    {   //3 down the ladder , keep going or return.
        roomText:
        'You climb down and you see a dead body, you feel sick.<br>Enter 0 to go back up.<br>Enter 1 to keep going.',
        doorsToRooms: [2,6]
    },
    {   //4 next door or return.
        roomText:
        'You open the door and see a metal object on the floor and a locked door.<br>Enter 0 to go back.<br>Enter 1 to pick up metal object.',
        doorsToRooms: [2,5]
    },
    {   //5 explosive pickup.
        roomText:
        'You pick up the object and you hear a spring move, you have picked up an explosive device and its about to blow.<br>Enter 0 to throw the device at the locked door.<br>Enter 1 to try and disarm the explosive.',
        doorsToRooms: [7,0]
    },
    {   //6 radiation dead.
        roomText:
        'You see a green glowing goo on the ground, you feel to weak too walk, its radioactive. You died. Game Over.',
        doorsToRooms: []
    },
    {   //7 blow up door Freedom win.
        roomText:
        'The explosive blows the door open, you see light coming trough the dust, you have found safe space in The Apocalypse. You Win! Game Over.',
        doorsToRooms: []
    }
]

//Starts game.
startGame();
