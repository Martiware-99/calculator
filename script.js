let container = document.createElement("div")
container.className = "container"
document.body.appendChild(container)

let display = document.createElement("div")
display.className = "Display"
container.appendChild(display)

let numDisplay = document.createElement("p")
numDisplay.className = "numDisplay"
display.appendChild(numDisplay)

let calculatorButtonPropreties = [
{ nameOfTheClass : "one",
  value : 1
},
{ nameOfTheClass : "two",
  value : 2
},
{ nameOfTheClass : "three",
  value : 3
},
{ nameOfTheClass : "four",
  value : 4
},
{ nameOfTheClass : "five",
  value : 5
},
{ nameOfTheClass : "six",
  value : 6
},
{ nameOfTheClass : "seven",
  value : 7
},
{ nameOfTheClass : "eight",
  value : 8
},
{ nameOfTheClass : "nine",
  value : 9
},
{ nameOfTheClass : "zerro",
  value : 0
},
{ nameOfTheClass : "plus",
  value : "+"
},
{ nameOfTheClass : "minus",
  value : "-"
},
{ nameOfTheClass : "divided",
  value : "/"
},
{ nameOfTheClass : "multiplied",
  value : "*"
},
]

function computeResult(numDisplay){
    return Function('return ' + numDisplay)()
}

for(let elem of calculatorButtonPropreties){
    let calculatorButton = document.createElement("div")
    calculatorButton.className = elem.nameOfTheClass
    container.appendChild(calculatorButton)
    calculatorButton.innerText = elem.value
    calculatorButton.addEventListener('click', e=> {
        let num = document.createTextNode(elem.value)
        numDisplay.appendChild(num)
    })
}

let C = document.createElement("div")
C.className = "C"
container.appendChild(C)
C.innerText = "C"
C.addEventListener('click', e => {
    while (numDisplay.firstChild){
        numDisplay.removeChild(numDisplay.firstChild)
      }
})

let equals = document.createElement("div")
equals.className = "equals"
container.appendChild(equals)
equals.innerText = "="
equals.addEventListener('click', e => {
    let finalResult = computeResult(numDisplay.innerText)
    let value = document.createTextNode(finalResult)

    while (numDisplay.firstChild){
        numDisplay.removeChild(numDisplay.firstChild)
      }  
    
    console.log(finalResult)  
    numDisplay.appendChild(value)
})    
