let num1 = null 
let operator = [] 
let num2 = null

let numberBtn = document.querySelectorAll('.number')
let operateBtn = document.querySelectorAll('.operator')
let resultEl = document.getElementById('result')
let equalEl = document.getElementById('equal')

function add(a, b){
  return a + b
}

function subtract(a, b){
  return a - b
}

function multiply(a, b){
  return a * b
}

function divide(a, b){
  return a / b
}

function operate(x, y, operator){
  switch (operator){
    case '+':
      num1 = add(x, y)
      resultEl.textContent = num1
      break;
    case '-':
      num1 = subtract(x, y) 
      resultEl.textContent = num1
      break;
    case '*':
      num1 = multiply(x, y)
      resultEl.textContent = num1
      break;
    case '/':
      num1 = divide(x, y)
      resultEl.textContent = num1
      break;
  }
  num2 = null
  return num1 
}

numberBtn.forEach(element => {
  element.addEventListener("click", event => {
    console.log(`clicked ${event.target.textContent}`)
    resultEl.textContent += event.target.textContent

    if (resultEl.classList.contains('operator')) {
      resultEl.textContent = ''
      resultEl.textContent += event.target.textContent
      resultEl.classList.remove('operator') 
    }

    if (operator == false){
      num1 = resultEl.textContent
    } else if (num1 && operator) {
      num2 = resultEl.textContent
    }

  })
})

operateBtn.forEach(element => {
  element.addEventListener("click", event => {
    console.log(`clicked ${event.target.textContent}`)
    element.style.backgroundColor = 'yellow'
    operator.push(event.target.textContent);

    // resultEl.textContent = event.target.textContent
    resultEl.classList.add('operator');

    if (operator && num2){
      operate(parseInt(num1), parseInt(num2), operator[operator.length - 2])
    } 
    //  else if (operator && num2 && typeof(num1) == "string") {
    //   operate(parseInt(num1), parseInt(num2), operator[operator.length - 1])
    //  }

    if (operator[operator.length - 1] === 'C'){
      resultEl.textContent = ''
      num1 = null
      num2 = null
      operator = []
    }

  })
})

equalEl.addEventListener("click", () => {
  operate(parseInt(num1), parseInt(num2), operator[operator.length - 1])
})
