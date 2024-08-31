let testText = "The quick brown fox jump over the lazy dog.";

let startTime, endTime;

function startTest(){
    //set the test text

    document.getElementById("inputText").value = testText;

    //Reset result and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    //Change button text and functionality

    var button = button.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;


}

function endTest(){

    endTime = new Date().getTime();

    //Disable use input
    document.getElementById("userInput").readOnly = true;

    //Calculate time elapsed and words per minute (WPM)

    var timeElapsed = (endTime - startTime)/1000; //in seconds
    var userTypedText = document.getElementById("userInput").value;

    //split the text using regex to count words correclty

    var typedWords = userTypedText.split(/\s+/).filter(function (word){
        return word !== "";
    }).length;

    var wpm = 0; //default value

    if(timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords/timeElapsed) * 60);
    }

    //Display the result

    var outputDiv = document.getElementById("output");

    outputDiv.innerHTML = "<h2>Typing Test Result:</h2>" + 
            "<p>Words Typed: " + typedWords + "</p>" +
             "<p>Time Elapsed: " + timeElapsed + "seconds</p> " + 
             "<p>Words Per Minute (WPM): " + wpm + "</p>";

    //Reset the button

    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
    

}