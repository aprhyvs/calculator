let num1 = null 
let operator = null
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
  return num1 
}

numberBtn.forEach(element => {
  element.addEventListener("click", event => {
    console.log(`clicked ${event.target.textContent}`)
    resultEl.textContent += event.target.textContent
    if (!operator){
      num1 = resultEl.textContent
    } else {
      num2 = resultEl.textContent
    }
  })
})

operateBtn.forEach(element => {
  element.addEventListener("click", event => {
    console.log(`clicked ${event.target.textContent}`)
    element.style.backgroundColor = 'yellow'
    operator = event.target.textContent
    resultEl.textContent = ""
  })
})

equalEl.addEventListener("click", () => {
  operate(parseInt(num1), parseInt(num2), operator)
})