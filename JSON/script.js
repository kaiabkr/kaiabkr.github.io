let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

var rellax;

let myJSON = {
  "title" : "Serena Williams",
  "picture_url" : "https://www.marieclaire.com.au/media/46970/serena-williams.jpg",
  "favorite_color" : "#68A619",
  "favorite_font" : "Serif",
  "foods" : ["bean burgers", "burritos", "tacos"]
};

var randomIndex = Math.floor(Math.random() * myJSON["foods"].length);



let jsonDatabase = [
  {
    "title" : "Beyoncé",
    "picture_url" : "https://ca-times.brightspotcdn.com/dims4/default/3c0c8c8/2147483647/strip/true/crop/5472x3648+0+0/resize/1200x800!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Faf%2F19%2F2f44eac24120be6326d6c4c1210e%2Fla-photos-1staff-732489-ca-0314-grammys-rcg-0186b.JPG",
    "favorite_color" : "#68A619",
    "foods" : ["vegetable smoothie", "salad", "lobster + green beans"]
  },
  {
    "title" : "Tessa Thompson",
    "picture_url" : "https://www.hollywoodreporter.com/wp-content/uploads/2022/07/GettyImagesx-1241720509-H-2022.jpg?w=1296&h=730&crop=1&resize=681%2C383",
    "favorite_color" : "#68A619",
    "foods" : ["avocado toast", "grilled chicken + brown rice", "alfredo pasta"]
  },
  {
    "title" : "Zendaya",
    "picture_url" : "https://people.com/thmb/Z3uSg1CjoeHgJPktrgP763JRw_A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2):format(webp)/ZENDAYA-LOUIS-VUITTON-campaign-042023-5-b7bedc4a31cb4d46908dfc850cdf233e.jpg",
    "favorite_color" : "#68A619",
    "foods" : ["nutella pancakes", "cup of noodles", "ice cream"]
  },
  {
    "title" : "Venus Williams",
    "picture_url" : "https://photo-assets.usopen.org/images/pics/large/f_Venus-Williams_20200823.jpg",
    "favorite_color" : "#68A619",
    "foods" : ["green juice", "soba noodles", "shrimp + beans"]
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
  newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.style.fontFamily = incomingJSON['favorite_font'];
  newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = incomingJSON['title'];
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentHeading);

  /// Create & add LIST HEADLINE to the item
  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = "What They Eat in a Day:";
  newContentElement.appendChild(newContentSubhead);



  /// Create & add FOOD LIST to the item
  let newContentFoodList = document.createElement("UL");
  newContentElement.appendChild(newContentFoodList);

  /// Create & add all the food LIST ITEMS to the FOOD LIST
  for (var i = 0; i < incomingJSON['foods'].length; i++) {
    var currentFoodString = incomingJSON['foods'][i];
    var newFoodItem = document.createElement("LI");
    newFoodItem.innerText = currentFoodString;
    newContentFoodList.appendChild(newFoodItem);
  }

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);

  /// Add the item to the page
  contentGridElement.appendChild(newContentElement);

}