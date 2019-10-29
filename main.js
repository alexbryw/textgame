let currentRoom = 1;

function getTextButton(){
    console.log('test');
    let intext = document.getElementById('inTextId').value;
    console.log(intext);
    addTextToOutput(intext);
    //document.querySelector('.text-output').innerHTML += '<h3>'+intext+'</h3>';
    /*
    let oldtext = document.querySelector('.text-output').innerHTML;
    let newText = '<h3>'+intext+'</h3>' + oldtext;
    document.querySelector('.text-output').innerHTML = newText;
    */
}

function addTextToOutput(intext){
    let oldtext = document.querySelector('.text-output').innerHTML;
    let newText = '<h3>'+intext+'</h3>' + oldtext;
    document.querySelector('.text-output').innerHTML = newText;
}

const rooms = [
    room1= {
        roomText: 'room 1 text, press 1 for red door or 2 for green door',
        possibleRooms: [1,2]
    },
    room2= {
        roomText: 'room 2 text, press 1 for teel door or 2 for purple door',
        possibleRooms: [3,4]
    }
]

console.log(rooms[1].roomText);