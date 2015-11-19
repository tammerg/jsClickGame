document.getElementsByTagName('img').addEventListener("click", countup)
var counter = 0;
function countup() {
  counter = counter + 1;
  }
  
function countdown() {
setTimeout(function countandgive()
  { 
  alert("TIME-OUT! You got " +counter+ " Teams!");
   
  }, 20000);
}

for(var i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener("click", function countup() {
  counter = counter + 1;
  });  
}