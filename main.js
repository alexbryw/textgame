/**
 * Keeps track of current room position.
 * @type {number}
 */
let currentRoom = 1;


function startGame(){
    currentRoom = 1;
    document.querySelector('.text-output').innerHTML = '';
    addTextToOutput(rooms[currentRoom].roomText);
}

function getTextButton(){
    let inText = document.getElementById('inTextId').value;
    console.log(inText);
    document.getElementById('inTextId').value = '';
    addTextToOutput(inText);
    goToRoom(inText)
}

/**
 * Add new text to html .text-output div.
 * @param {string} inText 
 */
function addTextToOutput(inText){
    let oldText = document.querySelector('.text-output').innerHTML;
    let newText = '<h3>'+inText+'</h3>' + oldText;
    document.querySelector('.text-output').innerHTML = newText;
}

function goToRoom(roomNumberInput){

    if(rooms[currentRoom].doorsToRooms[roomNumberInput] != null){
        currentRoom = rooms[currentRoom].doorsToRooms[roomNumberInput];
        console.log('current room ' + currentRoom)
        addTextToOutput(rooms[currentRoom].roomText);
    }
    else{
        addTextToOutput('That is not possible, try again.');
    }
    
}

const rooms = [
    {
        roomNumber: 0,
        roomText: 'You did not make it.\nGame Over.',
        doorsToRooms: []
    },
    {
        roomNumber: 1,
        roomText: 'room 1 text,\npress 1 for teal door or 2 for purple door',
        doorsToRooms: [0,2]
    },
    {
        roomNumber: 2,
        roomText: 'room 2 text,\npress1 press 2',
        doorsToRooms: [0,1]
    }
]

startGame();

//console.log(rooms[1].roomText);
//addTextToOutput(rooms[currentRoom].roomText)