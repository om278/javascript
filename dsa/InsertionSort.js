arr=[4,2,1,3]
function InsertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let current=arr[i]
        let j=i-1
        while (j>=0 && arr[j]>current) {
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=current
        
    }
    return arr
}
console.log(InsertionSort(arr));
