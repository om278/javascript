let container=document.getElementById("container")
let count=document.querySelector("h1")
let index=0

function reset() {
    index=0
    count.innerText=index
}
function with20() {
    count.innerText=--index+1*(-19)
}
function withpo20() {
    count.innerText=++index+1*(19)
}
function minusfifty() {
    count.innerText=--index+1*(-49)
}
function fifty() {
    count.innerText=++index+1*(49)
}