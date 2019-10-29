function getTextButton(){
    console.log('test');
    let intext = document.getElementById('inTextId').value;
    console.log(intext);
    document.getElementById('text-output').innerHTML += '<h3>'+intext+'</h3>';
}