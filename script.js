class Calculator {
    constructor(prevOperandTextElement, currOperandTextElement) {
      this.prevOperandTextElement = prevOperandTextElement
      this.currOperandTextElement = currOperandTextElement
      this.clear()
    }
    clear(){
      this.currOperand = ''
      this.prevOperand = ''
      this.operation = undefined
    }
    delete(){
      this.currOperand = this.currOperand.toString().slice(0, -1)
    }
    appendNumber(number){
      if(number === '.' && this.currOperand.includes('.')) return
      this.currOperand = this.currOperand.toString() + number.toString()
    }
    choose(operation){
      if(this.currOperand === '') return
      if(this.prevOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.prevOperand = this.currOperand
      this.currOperand = ''
    }
    compute(){
      let computation
      const prev = parseFloat(this.prevOperand)
      const curr = parseFloat(this.currOperand)
      if(isNaN(prev) || isNaN(curr)) return
      switch(this.operation){
        case '+':
          computation = prev + curr
          break
        case '-':
          computation = prev - curr
          break
        case '*':
          computation = prev * curr
          break;
        case '÷':
          computation = prev / curr
          break
        case '%':
          computation = prev % curr
          break;
        case '√':
          computation = Math.sqrt(curr)
          break;
        default:
          return
      }
      this.currOperand = computation
      this.operation = undefined
      this.prevOperand = ''
    }
    getDisplayNumber(number){
      const stringNumber = number.toString()
      const intNumber = parseFloat(stringNumber.split('.')[0])
      const decNumber = stringNumber.split('.')[1]
      const floatNumber = parseFloat(number)
      let intDisplay
      if(isNaN(intNumber)){
        intDisplay =  ''
      }else {
        intDisplay = intNumber.toLocaleString('en', {
          maximumFractionDigits: 0})
      }
      if(decNumber != null){
        return `${intDisplay}.${decNumber}`
      } else {
        return intDisplay
      }
    }
    updateDisplay(){
      this.currOperandTextElement.innerText = this.getDisplayNumber(this.currOperand)
      if(this.operation != null){
        this.prevOperandTextElement.innerText = `${this.prevOperand} ${this.operation}`
      } else {
        this.prevOperandTextElement.innerText = ''
      }
    }
  }
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const prevOperandTextElement = document.querySelector('[data-prev-operand]')
  const currOperandTextElement = document.querySelector('[data-curr-operand]')
  
  const calculator = new Calculator(prevOperandTextElement, currOperandTextElement)
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
      calculator.choose(button.innerText)
      calculator.updateDisplay()
    })
  })
  equalsButton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
  })
  allClearButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
  })
  deleteButton.addEventListener('click', button =>{
    calculator.deletes()
    calculator.updateDisplay()
  })
  /*===========================Calculator APP End===============================*/
  
  /*===========================FORM VALIDATION START============================*/
  
  function validate(){
    var x = document.forms["form"]["phone"].value;
    var fname = document.forms["form"]["fname"].value;
    var email = document.forms["form"]["email"].value;
    console.log(fname.charAt(0));
    var valid = false;
    var pattern = /^[0-9]+$/;
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(fname.charAt(0).match(pattern)){
      alert('Name should not start with Number!');
      return false;
    }
    else if (isNaN(x)) {
      alert("Phone number must contain only digits!!");
      return false;
    }
    else if (!(email.match(mail))) {
        alert('Please enter valid email address');
        return false;s
    }
  }
  