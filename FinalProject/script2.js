
let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

var rellax;

let myJSON = {
  "title" : "Raise Awareness",
  "concepts" : ["BTS Content", "Before & After Footage", "Design or General Inspiration behind your brand"]
};

var randomIndex = Math.floor(Math.random() * myJSON["concepts"].length);



let jsonDatabase = [
  {
    "title" : "Educate",
    "picture_url" : "https://ca-times.brightspotcdn.com/dims4/default/3c0c8c8/2147483647/strip/true/crop/5472x3648+0+0/resize/1200x800!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F19%2F2f44eac24120be6326d6c4c1210e%2Fla-photos-1staff-732489-ca-0314-grammys-rcg-0186b.JPG",
    "concepts" : ["Sharing Techniques + Tips", "Q&As"]
  },
  {
    "title" : "Convert",
    "picture_url" : "https://www.hollywoodreporter.com/wp-content/uploads/2022/07/GettyImagesx-1241720509-H-2022.jpg?w=1296&h=730&crop=1&resize=681%2C383",
    "concepts" : ["Clients speaking on their experience with your brand"]
  },
  {
    "title" : "Sales",
    "picture_url" : "https://people.com/thmb/Z3uSg1CjoeHgJPktrgP763JRw_A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/ZENDAYA-LOUIS-VUITTON-campaign-042023-5-b7bedc4a31cb4d46908dfc850cdf233e.jpg",
    "concepts" : ["Educating your audience on what you have to offer, showing product"]
  }

];


 createElementProper(myJSON);

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

rellax = new Rellax('.rellax');


function createElementProper(incomingJSON) {

  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("h2");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add CONCEPT LIST to the item
  let newContentConceptList = document.createElement("UL");
  newContentElement.appendChild(newContentConceptList);

  /// Create & add all the cibceot LIST ITEMS to the CONCEPT LIST
  for (var i = 0; i < incomingJSON['concepts'].length; i++) {
    var currentConceptString = incomingJSON['concepts'][i];
    var newConceptItem = document.createElement("LI");
    newConceptItem.innerText = currentConceptString;
    newContentConceptList.appendChild(newConceptItem);
  }

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
///  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}