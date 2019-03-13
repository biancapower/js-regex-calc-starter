function getString(){
  inputString = document.getElementById("number1").value;
  let stringArray = [];
  let operator = "+-*/";

  for(let i=0; i< operator.length; i++){
    if(inputString.indexOf(operator[i]) != -1){
      op = operator[i];
    }
  }

  stringArray = inputString.split(op);
  console.log(stringArray);
  
  console.log(stringArray[0])
  console.log(stringArray[1])
  console.log(op)

  return stringArray[0], stringArray[1], op;
}

function calculate(num1, num2, op) {
    
}