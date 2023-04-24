 let outputElement;
let outputParagraph;
let contentGridElement;



//////////////////////////////

document.addEventListener("DOMContentLoaded", function() {

  outputElement = document.getElementById('outputElement');
  outputParagraph = document.getElementById('outputParagraph');
  contentGridElement = document.getElementById('contentGrid');


  let newDiv = document.createElement("DIV");
  newDiv.classList.add("ourSpecialDiv");
  newDiv.innerText = "I'm writing this just because"



  let newImg = document.createElement("IMG");
  newImg.classList.add("anAmazingImage");
  newImg.src = "https://picsum.photos/200/300";

  newDiv.appendChild(newImg);

  outputParagraph.appendChild(newDiv);


});