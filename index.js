/* -eval() takes numbers in the form of sting and gives result for correct mathematical operators.
  console.log(eval('2 + 2'))
   - eval() method should be avoided and not recommended by javaScript as it is hackable
*/

var displayArea = document.getElementById('display')

function buttonClicked(buttonText){
  if(displayArea.innerText == '0'){
    displayArea.innerText = buttonText
  }
  else{
    displayArea.innerText += buttonText
  }  
}

