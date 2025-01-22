let num=7


function sepAndSqr(num) {
let sum=0
while (num>0) {
    let ld;
    ld=num%10
    num=Math.floor(num/10)
    let product=ld**2
    sum+=product
}
return sum
}

while (num!=1) {
    Data=[]
    let abc=sepAndSqr(num)
    if (abc==1) {
        console.log("The number is Happy Number")
    }
    else if(Data.includes(abc)){
        console.log("The number is unHappy Number")
        break
    }

    Data.push(abc)
    num=abc
}
num=7