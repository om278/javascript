
let num3=9
let st=Math.ceil(num3/2);
e=Math.ceil(num3/2)

while (e<=num3) {
    str=""

    for (let i = 1; i <=st; i++) {
        str+="  "
        
    }
    for (let j = st; j <=e; j++) {
        str+="* "
        
    }
    for (let k = e; k <=num3; k++) {
        str+="  "        
    }
}

console.log(str);
st--
e++
