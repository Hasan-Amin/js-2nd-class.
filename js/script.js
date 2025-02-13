//Show Text

function showText() {
  document.getElementById('st').innerHTML = "Hello there";
}

function showTextDd() {
  document.getElementById('std').innerHTML = "Hello there";
}

function showTextOms() {
  document.getElementById('stoms').innerHTML = "Hello there";
}

function showTextoml() {
  document.getElementById('stoml').innerHTML = "Hello there";
}

function showTextomo() {
  document.getElementById('stomo').innerHTML = "Hello there";
}

function showDate() {
  document.getElementById('sd').innerHTML =Date();
}

function changeText() {
  document.getElementById('ct').innerHTML =Date();
}

//bulb on/off
function bulbOn(){
  document.getElementById('img').src="images/on.gif";
}
function bulbOff(){
  document.getElementById('img').src="images/off.gif";
}

//bulb on/off
function redCar(){
  document.getElementById('car').src="images/red.jpg";
}
function blueCar(){
  document.getElementById('car').src="images/blue.png";
}

function changeCss(){
  document.getElementById("cc").style.color="red";
}

function changeCssFont(){
  document.getElementById("cs").style.fontSize="60px";
}


//bulb on/off
function cShow(){
  document.getElementById('sh').style.display="block";
}
function cHide(){
  document.getElementById('sh').style.display="none";
}

function cValu(){
  document.getElementById("jv").innerHTML=(5+6)*10;
}

function cVal(){
  let x, y;
  x = 5;
  y = 6;
  document.getElementById("je").innerHTML=x+y;
}

function changeColor() {
    document.body.style.backgroundColor = "red";
}

var number1 = 5; 
var number2 = 2;
var result = number1 + number2; 

function showdata(){
  document.getElementById('sdata').innerHTML=result;
}


var number1 = 5; 
var number2 = 2;
var result = number1 - number2; 

function showdata1(){
  document.getElementById('sdata1').innerHTML=result;
}


var number1 = 5; 
var number2 = 2;
var result = number1 * number2; 

function showdata2(){
  document.getElementById('sdata2').innerHTML=result;
}

var number1 = 6; 
var number2 = 2;
var result = number1 / number2; 

function showdata3(){
  document.getElementById('sdata3').innerHTML=result;
}


var x1, x2, result;
x1 = 6; 
x2 = 2;
result = x1 / x2; 

function showdata4(){
  document.getElementById('sdata4').innerHTML=result;
}


var x1, x2;
x1 = 6; 
x2 = 2;
x1 += x2; 

function showdata5(){
  document.getElementById('sdata5').innerHTML=x1;
}




var number1 = "a"; 
var number2 = "b";
var result = number1 < number2; 

function showdata6(){
  document.getElementById('sdata6').innerHTML=result;
}

var number1 = "20"; 
var number2 = "5";
var result = number1 < number2; 

function showdata7(){
  document.getElementById('sdata7').innerHTML=result;
}

var number1 = "a"; 
var number2 = "b";
var result = number1 > number2; 

function showdata8(){
  document.getElementById('sdata8').innerHTML=result;
}

var number1 = "20"; 
var number2 = "5";
var result = number1 < number2; 

function showdata9(){
  document.getElementById('sdata9').innerHTML=result;
}


var number1 = 5; 
var number2 = 4;
var result = number1 < number2; 

function showdata10(){
  document.getElementById('sdata10').innerHTML=result;
}


var number1 = 5; 
var number2 = 4;
var result = number1 > number2; 

function showdata11(){
  document.getElementById('sdata11').innerHTML=result;
}


var text1 = "john";
var text2 = "Doe";
var text3 = text1 + text2;
function showdata12(){
  document.getElementById('sdata12').innerHTML=text3;
}


var text1 = "john";
var text2 = "Doe";
var text3 = text1 +" " + text2;
function showdata13(){
  document.getElementById('sdata13').innerHTML=text3;
}

var text1 = "john";
var text2 = 5;
var text3 = text1 +" " + text2;
function showdata14(){
  document.getElementById('sdata14').innerHTML=text3;
}













const students = ["rokib", "monir","fahed" ]
function showArray(){
  document.getElementById('sdataarray').innerHTML=students[1];
}

let student = ["rokib", "monir","fahed", 1,2,3]
function showArray1(){
  document.getElementById('sdataarray1').innerHTML=student[3];
}


    // Change Text Alignment
    function changeTextAlignment() {
      var text = document.getElementById("alignmentText");
      text.style.textAlign = text.style.textAlign === "left" ? "right" : "left";
    }

    //  Highlight Text on Button Click
    function highlightText() {
      document.getElementById("highlightedText").style.backgroundColor = "yellow";
    }

    //  Display Current Day of the Week
    function displayDay() {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var currentDay = days[new Date().getDay()];
      document.getElementById("currentDay").innerHTML = "Today is: " + currentDay;
    }
    //  Change Font Style on Button Click
    function changeFontStyle() {
      document.getElementById("fontStyleText").style.fontFamily = "Courier New";
    }

       //  Change Text Color on Button Click
    function changeTextColor() {
      document.getElementById("colorText").style.color = "green";
    } 
      //  Display Current Time
    function updateTime() {
      document.getElementById("currentTime").innerHTML = new Date().toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();  



        //  Count Button Clicks
    var count = 0;
    function countClicks() {
      count++;
      document.getElementById("clickCount").innerHTML = "Clicks: " + count;
    }



        //  Change Font Size on Button Click
    function changeFontSize() {
      document.getElementById("fontText").style.fontSize = "38px";
    }
    //  Display Current Date
    function displayDate() {
      var currentDate = new Date().toLocaleDateString();
      document.getElementById("currentDate").innerHTML = "Current Date: " + currentDate;
    }


       // Disable Button After Click
    function disableButton() {
      document.getElementById("disableButton").disabled = true;
    }


        //  Change Background Color on Mouse Over
    function changeBackgroundColor() {
      document.body.style.backgroundColor = "blue";
    }
    function resetBackgroundColor() {
      document.body.style.backgroundColor = "white";
    }

    //  Display Current Month
    function displayMonth() {
      var currentMonth = new Date().toLocaleString('default', { month: 'long' });
      document.getElementById("currentMonth").innerHTML = "Current Month: " + currentMonth;
    }



    // JavaScript for Example 51
function addNumbers() {
    var result = 5 + 3;
    document.getElementById("addNumbersResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 52
function subtractNumbers() {
    var result = 5 - 3;
    document.getElementById("subtractNumbersResult").innerHTML = "Result: " + result;
}


// JavaScript for Example 53
function multiplyNumbers() {
    var result = 5 * 3;
    document.getElementById("multiplyNumbersResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 54
function divideNumbers() {
    var result = 5 / 3;
    document.getElementById("divideNumbersResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 55
function findRemainder() {
    var result = 5 % 3;
    document.getElementById("findRemainderResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 56
function calculatePower() {
    var result = Math.pow(2, 3);
    document.getElementById("calculatePowerResult").innerHTML = "Result: " + result;
}