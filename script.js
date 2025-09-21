let num1 = null 
let operator = null
let num2 = null

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
    case add:
      num1 = add(x, y)
      break;
    case subtract:
      num1 = subtract(x, y) 
      break;
    case multiply:
      num1 = multiply(x, y)
      break;
    case divide:
      num1 = divide(x, y)
      break;
  }
  return num1 
}

let numberBtn = document.querySelectorAll('.number')
let operateBtn = document.querySelectorAll('.operator')
let resultEl = document.getElementById('result')

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