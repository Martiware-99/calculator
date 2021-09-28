let objects = [{
    snack : "chips",
    ingredient: "patate"
},
{
    snack : "bonbons",
    ingredient : "sucre",
},
{
    snack : "sodas",
    ingredient : "eau",
},
{
    snack : "biscuits",
    ingredient : "farine"
}]

for (let elem of objects){
    let butt = document.createElement("button")
    butt.innerText = elem.snack
    document.body.appendChild(butt)
    butt.className = elem.ingredient
}