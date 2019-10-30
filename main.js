/**
 * Keeps track of current room position.
 * @type {number}
 */
let currentRoom = 0;


function startGame(){
    currentRoom = 0;
    document.querySelector('.text-output').innerHTML = '';
    addTextToOutput(rooms[currentRoom].roomText);
}

function getTextButton(){
    let inText = document.getElementById('inTextId').value;
    console.log(inText);
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
        currentRoom = roomNumberInput;
        addTextToOutput(rooms[currentRoom].roomText);
    }
    else{
        addTextToOutput('That is not possible, try agin.');
    }
    /*
    let roomNotFound = true;
    //console.log('current room top' +  currentRoom);

    for(let doorToRoom of rooms[currentRoom].doorsToRooms){
        //console.log('looking for room1.')
        if(roomNumberInput == doorToRoom && roomNumberInput > 0){
            //console.log('looking for room.')
            //addTextToOutput('room found!');
            //addTextToOutput(rooms[roomNumberInput-1].roomText); //TODO fix negative number.
            currentRoom = rooms[currentRoom].doorsToRooms[roomNumberInput-1];
            addTextToOutput(rooms[currentRoom].roomText);
            console.log('current room after' +  currentRoom);
            roomNotFound = false;
            break;
        }
    }
    if(roomNotFound === true){
        addTextToOutput('That is not possible, try agin.');
    }
    */
    
}

const rooms = [
    {
        roomNumber: 0,
        roomText: 'room 0 text, press 1 for red door or 2 for green door',
        doorsToRooms: [1,2]
    },
    {
        roomNumber: 1,
        roomText: 'room 1 text,\npress 1 for teel door or 2 for purple door',
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