let heading = document.getElementById("title");
let executeButton = document.getElementById("executeButton");
let outputParagraph = document.getElementById("outputText");
let inputElement= document.getElementById("myInput");

let genres = ["R&B", "Pop", "Hip-Hop", "Rock n Roll", "EDM", "Lo-Fi", "Afro-Beats"];

heading.addEventListener("mouseover", demonstrationFunction);

executeButton.addEventListener("click", function(){
    let currentInputText = inputElement.value;
    generate(currentInputText);
    restyle();
  });

//change the header
function demonstrationFunction() {
    var randomRed = Math.random() * 255;
    var randomGreen = Math.random() * 255;
    var randomBlue = Math.random() * 255;
    var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue +")";

    heading.style.color = outputColorString;
    heading.style.fontSize = "60px";
    heading.style.textShadow = "0px 0px 10px #fff";
    let randRot = ((Math.random() * 10) - 5) + "deg";
    heading.style.transform = "rotate(" + randRot + ")";

    var currentInputText=inputElement.value;
}

//this generates different answers
function generate(incUserInput) {
    var randomGenreIndex = Math.floor(Math.random() * genres.length);
    console.log(randomGenreIndex);
    var selectedRandomGenreText = genres[randomGenreIndex];
    outputParagraph.innerText = incUserInput + ", really? I have a feeling that tomorrow it's going to be " + genres[randomGenreIndex];
}


//generates different css styles
function restyle() {
  var randR = Math.random() * 255;
  var randG = Math.random() * 255;
  var randB = Math.random() * 255;
  var randOutputColor = "rgb(" + randR + "," + randG + "," + randB + ")";
  outputParagraph.style.backgroundColor = randOutputColor;

  var fontChoices = ["sans-serif", "OCRA-B", "Menlo"];
  var randFonts = fontChoices;
  outputParagraph.style.font =  randFonts;

  
}