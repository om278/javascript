let newarr=["apple","APPLE","new","Omkant","omkant"]

let arr=[]
let add=[]

for (let i = 0; i < newarr.length; i++) {
    arr[i]=newarr[i].toLocaleLowerCase()
    if (newarr[i]===arr[i]) {
        add.push(arr[i]+" ")
    }
}
console.log(add)