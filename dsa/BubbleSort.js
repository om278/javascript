arr=[9,8,2,1,5]
function Sort(arr) {
    let x;
    for ( x=0; x < arr.length; x++) {
        for (let i = 0; i < arr.length-x; i++) {
            if(arr[i]>arr[i+1]){
                let tem=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=tem
            }
            
        }
    }
    return arr
}
console.log(Sort(arr));