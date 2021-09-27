let display = document.querySelector(".Display")
let numDisplay = document.querySelector(".numDisplay")
function computeResult(numDisplay){
    return Function('return ' + numDisplay)()
  }

let one = document.querySelector(".one")
one.addEventListener('click', e => {
    let numVal = 1
    let num = document.createTextNode(numVal)
    numDisplay.appendChild(num)
})

let two = document.querySelector(".two")
two.addEventListener('click', e => {
    let numVal = 2
    let num = document.createTextNode(numVal)
    numDisplay.appendChild(num)
})

let three = document.querySelector(".three")
three.addEventListener('click', e => {
    let numVal = 3
    let num = document.createTextNode(numVal)
    numDisplay.appendChild(num)
})

let four = document.querySelector(".four")
four.addEventListener('click', e => {
    let numVal = 4
    let num = document.createTextNode(numVal)
    numDisplay.appendChild(num)
})

let five = document.querySelector(".five")
five.addEventListener('click', e => {
    let numVal = 5
    let num = document.createTextNode(numVal)
    numDisplay.appendChild(num)
})

let six = document.querySelector(".six")
six.addEventListener('click', e => {
    let numVal = 6
    let num = document.createTextNode(numVal)
    numDisplay.appendChild(num)
})

let seven = document.querySelector(".seven")
seven.addEventListener('click', e => {
    let numVal = 7
    let num = document.createTextNode(numVal)
    numDisplay.appendChild(num)
})

let eight = document.querySelector(".eight")
eight.addEventListener('click', e => {
    let numVal = 8
    let num = document.createTextNode(numVal)
    numDisplay.appendChild(num)
})

let nine = document.querySelector(".nine")
nine.addEventListener('click', e => {
    let numVal = 9
    let num = document.createTextNode(numVal)
    numDisplay.appendChild(num)
})

let zerro = document.querySelector(".zerro")
zerro.addEventListener('click', e => {
    let numVal = 0
    let num = document.createTextNode(numVal)
    numDisplay.appendChild(num)
})



let plus = document.querySelector(".plus")
plus.addEventListener('click', e => {
    let signVal = "+"
    let sign = document.createTextNode(signVal)
    numDisplay.appendChild(sign)
})

let minus = document.querySelector(".minus")
minus.addEventListener('click', e => {
    let signVal = "-"
    let sign = document.createTextNode(signVal)
    numDisplay.appendChild(sign)
})

let C = document.querySelector(".C")
C.addEventListener('click', e => {
    while (numDisplay.firstChild){
        numDisplay.removeChild(numDisplay.firstChild)
      }
})

  
let equals = document.querySelector(".equals")
equals.addEventListener('click', e => {
    let finalResult = computeResult(numDisplay.innerText)
    let value = document.createTextNode(finalResult)

    while (numDisplay.firstChild){
        numDisplay.removeChild(numDisplay.firstChild)
      }
    
    console.log(finalResult)
    numDisplay.appendChild(value)
})


let divided = document.querySelector(".divided")
divided.addEventListener('click', e => {
    let signVal = "/"
    let sign = document.createTextNode(signVal)
    numDisplay.appendChild(sign)
})

let multiplied = document.querySelector(".multiplied")
multiplied.addEventListener('click', e => {
    let signVal = "*"
    let sign = document.createTextNode(signVal)
    numDisplay.appendChild(sign)
})

