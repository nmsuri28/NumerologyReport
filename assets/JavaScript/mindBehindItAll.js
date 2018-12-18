$(document).ready(function(){
// var=this information is valuable, numberThinkingRightNow info type, 55 answer to info type -- 55 has no "" because we want the sytem to read it as a number
var numberThinkingRightNow = 55;
var newNumberThinkingRightNow = numberThinkingRightNow + 66;

//number read in test 121
console.log(newNumberThinkingRightNow);

var officalNumber = newNumberThinkingRightNow + numberThinkingRightNow + 8 ;

//number read in test is 184
console.log(officalNumber);


var stoppingPoint;
stoppingPoint = 33;
var whatsLeftOver = officalNumber % stoppingPoint;


//I did not understand the % function. I had wrote the code to work for 5.57 and istead was returned 19. So I continued until my code was legit.
//number read in test is 19
console.log(whatsLeftOver);

var errorWasGiven = 19;
var numerologyNumber = stoppingPoint % errorWasGiven;
$("#numerology-number").text(numerologyNumber);

//number read in test is 14
console.log(numerologyNumber);

//alert("Finally figured out my first true JavaScript. I hope you enjoy! Today's coder's numerology number is: " + numerologyNumber);

})


