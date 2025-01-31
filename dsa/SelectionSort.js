arr=[5,34,5,2,88,74]
function SelectionSort(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        let midind=i
        for (let j = i; j < arr.length; j++) {
            if (arr[j]<arr[midind]) {
                midind=j;
            }
        }
        if(midind !=i){
            [arr[i] ,arr[midind]]=[arr[midind] , arr[i]]
        }
        
    }
    return arr
}
console.log(SelectionSort(arr));