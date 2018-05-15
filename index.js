//Pablo Argueta Deli Counter

//At the beginning of the day the array is empty.
var katzDeliLine = [];

let numCounter = 0;

//take number function
function takeANumber(katzDeliLine) {
  numCounter++;
  katzDeliLine.push(numCounter);

  return (`You are number ${numCounter} in line.`);
}

console.log(takeANumber["pablo", "steven"])


//now serving function
function nowServing(katzDeliLine) {
  
   var nextCustomer; //hold the customer name that we will remove from the front of the queue/array
  
  if (katzDeliLine[0] === undefined){ //To check if the array is empty or undefined
    return "There is nobody waiting to be served!";
  }
  
  else {
  nextCustomer = katzDeliLine.shift(); //remove the name from the fron of the queue/array
  return `Currently serving ${nextCustomer}.`;
  }
}

function currentLine(katzDeliLine) {
  
  var currentLineString=[]; //empty array to hold the new string of names with current number position
  
  if(katzDeliLine[0] === undefined) { //to check if the array is empty or undefined
    return "The line is currently empty."
  }
  
  else {
    
    for(let i = 0; i < katzDeliLine.length; i++) { //iterate through the array to get name and match to current position and add to the empty array
      currentLineString.push(` ${i+1}. ${katzDeliLine[i]}`);
    }
      
  }
  return `The line is currently:${currentLineString}`;
}