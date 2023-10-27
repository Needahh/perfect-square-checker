
function checkPss() {

var inp = document.querySelector("input").value;
var perfectSquare = Math.sqrt(inp);
var result = document.getElementById("result");
  
  
if (perfectSquare === Math.floor(perfectSquare)) {
    result.innerHTML =  inp + " is a perfect square."
}else {
    result.innerHTML =  inp + " is not a perfect square."
  }

  
};