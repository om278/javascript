arr = [5,4,2,3,4,2]

const qSort=(arr)=>{
    if (arr.length<=1) {
        return arr
    }
    let pivit=arr[0]
    let left=[]
    let right=[]

    for (let i = 1; i < arr.length; i++) {
    if (arr[i]<pivit) {
        left.push(arr[i])
    }
    else{
        right.push(arr[i])
    }
        
        
    }
    return [...qSort(left),pivit, ...qSort(right)]
}
Sort=qSort(arr)
console.log(Sort);