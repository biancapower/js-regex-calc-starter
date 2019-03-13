/* 
"(-?[0-9]+)" + //digit
           "( *" + // skip spaces
              "([\+\-\*\/])" + // operator
                           " *" + //skip spaces
                              "(-?[0-9]+))*" //digit
*/


function getString(){
  inputString = document.getElementById("number1").value;

  const firstNumRegex = /-?[0-9]+/;

  const firstNum = firstNumRegex.exec(inputString)[0];

  let operations = [firstNum];
  

  // group of operator & number
  const nextGroupRegex = / *([\+\-\*\/]) *(-?[0-9]+)/g;

  // skip the first number
  nextGroupRegex.lastIndex = firstNum.length;
  
  let match;
  while ((match = nextGroupRegex.exec(inputString)) != null) {
      //push the operator
      operations.push(match[1]);
      //push the number
      operations.push(match[2]);
  }
  console.log(operations);
}

function calculate() {
  arrayList = getString();
  num1 = arrayList[0];
  num2 = arrayList[1];
  op = arrayList[2];
  if (op == "+") {
      return parseFloat(num1) + parseFloat(num2);
  }
  if (op == "-") {
    return parseFloat(num1) - parseFloat(num2);
  }
  if (op == "*") {
    return parseFloat(num1) * parseFloat(num2);
  }
  if (op == "/") {
    return parseFloat(num1) / parseFloat(num2);
  } else {
    return alert("Something ain't right");
  }
}

function showValue(){
  document.getElementById("number2").value = calculate();
}