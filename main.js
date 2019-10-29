const room0 = 'Du ser två dörrar välj 1 eller 2.';

let room = [
    'room1 : ',
    'room2 : ',
    'room3 : '
]

addTextToOutput(room[0]);

addTextToOutput(room0);
//document.querySelector('.text-output').innerHTML

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
