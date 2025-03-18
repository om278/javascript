// let box=document.getElementById("box")


// box.innerHTML="<h1>This is my h1</h1>"

// document.querySelector("#omn").style.color="red";


// let red=document.querySelectorAll(".red")
// console.log(red);


// let para=document.createElement("p")
// para.innerText="hello om i am here"

// document.getElementById("box").append(para)


// let img=document.createElement("img")
// img.src="https://images.unsplash.com/photo-1735480222193-3fe22ffd70b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"

// document.getElementById("om").append(img)


let arr=[ "red","green","blue"]
let index=0
let inc=document.getElementById("inc")
let Dec=document.getElementById("Dec")
let count= document.getElementById("count")
let count1=0
function Counter() {
    ++count1
   if (index>=arr.length) {
    index=0
   }
    count.style.color=arr[index++]
    count.innerText=count1
        if (count1>=10) {
            inc.disabled=true;
            console.log(inc);
        }
        Dec.disabled=false
}
function DEC() {
    inc.disabled=false;
    if (index>=arr.length) {
        index=0
       }
        count.style.color=arr[index++]
--count1
count.innerText=count1
if (count1<=-10) {
    Dec.disabled=true;
    // console.log(inc);
}
}

