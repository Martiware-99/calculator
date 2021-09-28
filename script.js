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
{ nameOfTheClass : "C",
  value : "C",
  clear : true,
},
{ nameOfTheClass : "equals",
  value : "=",
  equal : true,
},
{ nameOfTheClass : "Display",
  value : "",
  displayValue : true,
},
]

function computeResult(numDisplay){
    return Function('return ' + numDisplay)()
}

let container = document.createElement("div")
container.className = "container"
document.body.appendChild(container)

for(let elem of calculatorButtonPropreties){
    let calculatorButton = document.createElement("div")
    calculatorButton.className = elem.nameOfTheClass
    container.appendChild(calculatorButton)
    calculatorButton.innerText = elem.value
    if (elem.displayValue === true) {
        let numDisplay = document.createElement("p")
        numDisplay.className = "numDisplay"
        document.querySelector(".Display").appendChild(numDisplay)
    } else if (elem.clear === true){
        calculatorButton.addEventListener('click', e => {
            while (document.querySelector(".numDisplay").firstChild){
                document.querySelector(".numDisplay").removeChild(document.querySelector(".numDisplay").firstChild)
            }
        })
    } else if (elem.equal === true){
        calculatorButton.addEventListener('click', e => {
            let finalResult = computeResult(document.querySelector(".numDisplay").innerText)
            let value = document.createTextNode(finalResult)
            
            while (document.querySelector(".numDisplay").firstChild){
                document.querySelector(".numDisplay").removeChild(document.querySelector(".numDisplay").firstChild)
            }  
            document.querySelector(".numDisplay").appendChild(value)
        })    
    }  else {    
        calculatorButton.addEventListener('click', e=> {
        let num = document.createTextNode(elem.value)
        document.querySelector(".numDisplay").appendChild(num)
    })
}
}

