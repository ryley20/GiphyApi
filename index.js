//js wont run until page is loaded
$(document).ready(function() {
    console.log("ready");
});

// array of buttons preset for top page
var buttonGifs = ["bird", "lion", "dog", "cat", "elephant", "penguin",];

function PrintBttn() {
for (var i=0; i < buttonGifs.length; i++){
    var btn = document.createElement("button");
    var t = document.createTextNode(buttonGifs[i]);
    btn.appendChild(t);
    $('#buttons-view').append(btn);

    }

}
PrintBttn();
console.log("printed buttons")

$('#add-gif').on('click', arrAdd);

function arrAdd(){
    event.preventDefault();
    // get value from input text
    var inputText = document.getElementById('inputS').value;
    // append the data to array btnArr
    buttonGifs.push(inputText);
 
        var btn = document.createElement("button");
        var z = document.createTextNode(inputText);
        btn.appendChild(z);
        $('#buttons-view').append(btn);
    console.log('button')
 }

