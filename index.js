/* -eval() takes numbers in the form of sting and gives result for correct mathematical operators.
  console.log(eval('2 + 2'))
   - eval() method should be avoided and not recommended by javaScript as it is hackable
*/

var displayArea = document.getElementById('display')

function isOperator(buttonText){
  if(buttonText == '+' || buttonText == '-'|| buttonText == '*'|| buttonText == '/'|| buttonText == '%'){
    return true
  }
}

function buttonClicked(buttonText){
  if(displayArea.innerText == '0'){
    if( buttonText != '0' && buttonText != '00'){ // Don't do anything if button clicked is either '0' or '00'
      if(buttonText == '.' || isOperator(buttonText)){ // If button clicked is . or any other operator, then show it as 0 followed by button clicked e.g., 0.5 or 0+5
        displayArea.innerText += buttonText
      }
      else{
        displayArea.innerText = buttonText 
      }      
    }
  }
  else{
    if(isOperator(displayArea.innerText[displayArea.innerText.length-1]) && isOperator(buttonText)){ //If last char of displayText is an operator or button clicked is an operator then we replace the already present operator with new one
      
    }
    displayArea.innerText += buttonText
  }  
}

