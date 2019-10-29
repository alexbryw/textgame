let currentRoom = 0;


function startGame(){
    currentRoom = 0;
    document.querySelector('.text-output').innerHTML = '';
    addTextToOutput(rooms[currentRoom].roomText);
}

function getTextButton(){
    let intext = document.getElementById('inTextId').value;
    console.log(intext);
    addTextToOutput(intext);
    goToRoom(intext)
}

function addTextToOutput(intext){
    let oldtext = document.querySelector('.text-output').innerHTML;
    let newText = '<h3>'+intext+'</h3>' + oldtext;
    document.querySelector('.text-output').innerHTML = newText;
}

function goToRoom(roomNumberInput){
    let roomNotFound = true;
    for(let possibleRoomNumber in rooms[currentRoom].possibleRooms){
        if(roomNumberInput === possibleRoomNumber){
            addTextToOutput('room found!');
            addTextToOutput(rooms[roomNumberInput-1].roomText); //TODO fix negative number.
            currentRoom = roomNumberInput-1;
            roomNotFound = false;
            break;
        }
    }
    if(roomNotFound === true){
        addTextToOutput('That is not possible, try agin.');
    }
    
    
}

const rooms = [
    {
        roomNumber: 0,
        roomText: 'room 1 text, press 1 for red door or 2 for green door',
        possibleRooms: [2,3]
    },
    {
        roomNumber: 1,
        roomText: 'room 2 text,\npress 1 for teel door or 2 for purple door',
        possibleRooms: [1,3]
    },
    {
        roomNumber: 2,
        roomText: 'room 3 text,\npress1 press 2',
        possibleRooms: [1,2]
    }
]

startGame();

//console.log(rooms[1].roomText);
//addTextToOutput(rooms[currentRoom].roomText)