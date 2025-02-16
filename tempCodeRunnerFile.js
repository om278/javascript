
function factor(num) {
        let z=2
        let arr=[]
        while (num!==1) {
                if (num%z==0) {
                        arr.push(z)
                        num=num/z
                } else {
                        z++
                }
        }
        return arr 
}
console.log(factor(56))