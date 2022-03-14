var playButton = document.querySelector(".playButton");

playButton.style.backgroundColor = "green";

playButton.onclick = askUserName;


function askUserName(){
    let userName = prompt("What is youre name?");
    var sayhi= alert ("hi",+ userName);
    console.log("hi", + userName)
    var guessedNumber = prompt("guess a number");
    console.log("geraden nummer  " + guessedNumber)
    return guessedNumber
}


function randomNumber(){
    var random = Math.floor(Math.random() *26);
    console.log(random, 'dit is het random nummer gekozen door de computer en moet uiteindelijk weg');
    return 
}


function numberCheck (guessedNumber, random) {
    console.log( guessedNumber, random )
    if (guessedNumber == randomNumber) {
        return true; 
        console.log("goed geraden")
    } else {
        return false;
        console.log("fout!")
    }
    
};

randomNumber();
numberCheck();




