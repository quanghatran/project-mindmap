function userToggle() {
  var user = document.getElementById("user");
  if (user.style.display === "none") {
    user.style.display = "block";
    user.style.zIndex = "10";
  } else {
    user.style.display = "none";
    user.style.zIndex = "1";
  }
}

// toggle display left navigation-bar
function navBarToggle() {
  // var toggleMenu = document.getElementById('toggleMenu');
  var navBarFormat = document.getElementById("navBarFormat");
  if (navBarFormat.style.display === "none") {
    navBarFormat.style.display = "block";
  } else {
    navBarFormat.style.display = "none";
  }
}

/* move the element event */

// Make the DIV element draggable:
var myDiv = document.getElementById("myDiv");
var iF = document.getElementById("inputField");
myDiv.addEventListener(
  "mousedown",
  dragElement(document.getElementById("myDiv"))
);
iF.addEventListener("click", function () {
  iF.focus();
});


function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Zoom In and Zoom Out event
let a = 1;

function zoomInEvent() {
  a += 0.3;
  document.getElementById("myDiv").style.transform = `scale(${a})`;

  // document.getElementById("myDiv").style.transform = 'scale('+a+')';
}

function zoomOutEvent() {
  a -= 0.3;
  document.getElementById("myDiv").style.transform = `scale(${a})`;
}

/*  catch event in menubar */
var idName,
 inputName,
 fontSizeSmall = document.getElementById("fontSizeSmall"),
 fontSizeMedium = document.getElementById("fontSizeMedium"),
 fontSizeLarge = document.getElementById("fontSizeLarge"),
 fontStyleBold = document.getElementById("fontStyleBold"),
 fontStyleItalic = document.getElementById("fontStyleItalic"),
 fontStyleUnderline = document.getElementById("fontStyleUnderLine"),
 removeItem = document.getElementById("removeItem"),
 addItem = document.getElementById("addItem"),
  count = 0,
  child;

// var color1 = document.getElementById("color1");

function focusEvent(elm) {
  child = elm.nextElementSibling.id;

  var getChildElement = document.getElementById(child),
   getParentElement = getChildElement.parentElement,
   idName = elm.id;

  
  // append icons
  // document.getElementById("icon1").addEventListener("click", addIcon1);
  // // document.getElementById("icon2").addEventListener("click", addIcon2);
  // // document.getElementById("icon3").addEventListener("click", addIcon3);
  // // document.getElementById("icon4").addEventListener("click", addIcon4);
  // // document.getElementById("icon5").addEventListener("click", addIcon5);
  // // document.getElementById("icon6").addEventListener("click", addIcon6);
  // // document.getElementById("icon7").addEventListener("click", addIcon7);
  // // document.getElementById("icon8").addEventListener("click", addIcon8);
  // // document.getElementById("icon9").addEventListener("click", addIcon9);
  // // document.getElementById("icon10").addEventListener("click", addIcon10);

  // function addIcon1() {
  //   var AddIcon1 = document.getElementById('getIcon1');
  //   var i = document.createElement("I");
  //   i.className = "far fa-smile";

  //   // console.log(testAddIcon1);
  //   testIdFunction.insertAdjacentElement('afterend',i);
  // }
}


function addItemEvent(c) {
  var inputFieldTest = document.getElementById(c),
    div = document.createElement("DIV"),
    f1Node = document.createElement("DIV"),
    input = document.createElement("INPUT");

  div.setAttribute("class", "grandChildNode");

  f1Node.setAttribute("id", "childNode" + count);
  f1Node.classList.add("childNode");

  input.setAttribute("onfocus", "focusEvent(this)");

  input.classList.add("styleInput");
  input.setAttribute("type", "text");
  // input.classList.add('pseodu', 'box1::before');

  inputFieldTest.appendChild(div);
  div.appendChild(input);
  div.appendChild(f1Node);

  input.addEventListener("click", function () {
    input.focus();
  });
  count++;
}
// add the element
addItem.addEventListener("click", function () {
  if (child) addItemEvent(child);
});

//remove function
function removeEvent(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.parentElement.remove();
}
// remove the element
removeItem.addEventListener("click", function () {
  if (child) removeEvent(child);
});

/* style for child element */

// style font weight
function bold(c) {
  var inputFieldTest = document.getElementById(c);
  // inputFieldTest.lastElement.remove();
  inputFieldTest.previousElementSibling.classList.toggle('boldStyle');
}
fontStyleBold.addEventListener("click", function () {
  if (child) bold(child);
});

// style font style italic
function italic(c) {
  var inputFieldTest = document.getElementById(c);
  // inputFieldTest.lastElement.remove();
  inputFieldTest.previousElementSibling.classList.toggle('italicStyle');
}
fontStyleItalic.addEventListener("click", function () {
  if (child) italic(child);
});

// style font style underline==
function underline(c) {
  var inputFieldTest = document.getElementById(c);
  // inputFieldTest.lastElement.remove();
  inputFieldTest.previousElementSibling.classList.toggle('underlineStyle');
}
fontStyleUnderline.addEventListener("click", function () {
  if (child) underline(child);
});

/* set font size */

// style font size 14px 
function smallFontsize(c) {
  var inputFieldTest = document.getElementById(c);
  // inputFieldTest.lastElement.remove();
  inputFieldTest.previousElementSibling.classList.toggle('smallStyle');
}
fontSizeSmall.addEventListener("click", function () {
  if (child) smallFontsize(child);
});

// style font size 35px 
function mediumFontsize(c) {
  var inputFieldTest = document.getElementById(c);
  // inputFieldTest.lastElement.remove();
  inputFieldTest.previousElementSibling.classList.toggle('mediumStyle');
}
fontSizeMedium.addEventListener("click", function () {
  if (child) mediumFontsize(child);
});

// style font size 50px 
function largeFontsize(c) {
  var inputFieldTest = document.getElementById(c);
  // inputFieldTest.lastElement.remove();
  inputFieldTest.previousElementSibling.classList.toggle('bigStyle');
}
fontSizeLarge.addEventListener("click", function () {
  if (child) largeFontsize(child);
});

/* set color */

// color 1
function styleColor1(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color1Style');
}
document.getElementById("color1").addEventListener("click", function () {
  if (child) styleColor1(child);
});

// color 2
function styleColor2(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color2Style');
}
document.getElementById("color2").addEventListener("click", function () {
  if (child) styleColor2(child);
});

// color 3
function styleColor3(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color3Style');
}
document.getElementById("color3").addEventListener("click", function () {
  if (child) styleColor3(child);
});

// color 4
function styleColor4(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color4Style');
}
document.getElementById("color4").addEventListener("click", function () {
  if (child) styleColor4(child);
});

// color 5
function styleColor5(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color5Style');
}
document.getElementById("color5").addEventListener("click", function () {
  if (child) styleColor5(child);
});

// color 6
function styleColor6(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color6Style');
}
document.getElementById("color6").addEventListener("click", function () {
  if (child) styleColor6(child);
});


// color 7
function styleColor7(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color7Style');
}
document.getElementById("color7").addEventListener("click", function () {
  if (child) styleColor7(child);
});


// color 8
function styleColor8(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color8Style');
}
document.getElementById("color8").addEventListener("click", function () {
  if (child) styleColor8(child);
});


// color 9
function styleColor9(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color9Style');
}
document.getElementById("color9").addEventListener("click", function () {
  if (child) styleColor9(child);
});


// color 10
function styleColor10(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color10Style');
}
document.getElementById("color10").addEventListener("click", function () {
  if (child) styleColor10(child);
});


// color 11
function styleColor11(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color11Style');
}
document.getElementById("color11").addEventListener("click", function () {
  if (child) styleColor11(child);
});


// color 12
function styleColor12(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color12Style');
}
document.getElementById("color12").addEventListener("click", function () {
  if (child) styleColor12(child);
});


// color 13
function styleColor13(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color13Style');
}
document.getElementById("color13").addEventListener("click", function () {
  if (child) styleColor13(child);
});


// color 14
function styleColor14(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color14Style');
}
document.getElementById("color14").addEventListener("click", function () {
  if (child) styleColor14(child);
});


// color 15
function styleColor15(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color15Style');
}
document.getElementById("color15").addEventListener("click", function () {
  if (child) styleColor15(child);
});

/* append icons */

// icon 1
function addIcon1(c) {
  var inputFieldTest = document.getElementById(c);
  var inputValue = inputFieldTest.previousElementSibling;
  var icon1 = document.getElementById('getIcon1');
  // console.log(newIcon);
  console.log(inputValue);

  var span = document.createElement('span');
  var testAddText =  document.createTextNode("Water");
  span.appendChild(testAddText);

  inputValue.append(span);
  // inputValue.insertAdjacentElement('afterend', icon1);
  // inputFieldTest.createTextNode(newIcon);
  // inputFieldTest.previousElementSibling.classList.toggle('color15Style');
}
document.getElementById("icon1").addEventListener("click", function () {
  if (child) addIcon1(child);
});

function addDescription(c) {
  var inputFieldTest = document.getElementById(c);
  inputFieldTest.previousElementSibling.classList.toggle('color15Style');
}
document.getElementById("color15").addEventListener("click", function () {
  if (child) styleColor15(child);
});


// function addIcon1() {
  //   // var AddIcon1 = document.getElementById('getIcon1');
  //   var i = document.createElement("I");
  //   i.className = "far fa-smile";

  //   // console.log(testAddIcon1);
  //   // testIdFunction.insertAdjacentElement('afterend',i);
  // }







// function targetFunction(event) {
  // var t = this;
  // var inputNode = event.target,
  //   parentInputNode = inputNode.parentNode;

  // // add class clicked when click
  // var getInputClass = document.getElementsByClassName("styleInput");
  // for (var i = 0; i < getInputClass.length; i++) {
  //   getInputClass[i].addEventListener("click", function () {
  //     var current = document.getElementsByClassName("clicked");
  //     if (current.length > 0) {
  //       current[0].className = current[0].className.replace(" clicked", "");
  //     }
  //     this.className += " clicked";
  //   });
  // }

  // if (inputNode.classList.contains("clicked")) {
  //   removeItem.addEventListener("click", function () {
  //     parentInputNode.classList.add("displayNone");
  //   });
  // }
  
// }

