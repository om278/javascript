// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

let l1 = [2,4,3]
let l2 = [5,6,4]
let a=""
let b=""
let sum;
let result=[]
for (let i = 0; i < l1.length; i++) {
    a+=l1[i]
}
for (let j = 0; j < l2.length; j++) {
    b+=l2[j]
}
sum=parseInt(a)+parseInt(b)
while (sum>0) {
    ld=sum%10
    sum=Math.floor(sum/10)
    result.push(ld)
}

let obj={}
// console.log(Object.keys(obj).length===0);

arr = [1,2,3,4,5], size = 2
r=[]


for (let i = 0; i < arr.length; i+=size) {
    r.push(arr.slice(i,i+size))
}
console.log(r);