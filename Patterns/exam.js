
//    Omkant Shende


//Que-1

let num=7;
let mid=Math.ceil(num/2)
for (let i = 1; i <=num; i++) {
    str=""
    if (i==1 || i==num) {
    for (let j = 1; j <=num; j++) {
        str+=" *"
    }
    }else{
        for (let k = 1; k <=mid; k++) {
            if (k==mid) {
                str+=" *"
            }else{
                str+="  "
            }
            
        }
    }
    console.log(str);
}



//Que-3

arr=[1,2,3,4,5]
let sum=0
let Product=1
for (let i = 0; i <arr.length; i++) {
    sum+=arr[i]
    Product*=arr[i]
}
console.log("The sum of array is"+sum);
console.log("The product of array is"+Product);


//Que-4

str= "The Quick Brown Fox"
let result=""
for (let i = 0; i <str.length; i++) {
    let splitStr=str[i].split()
    if(splitStr==isUpperCase()){
    result+=splitStr.toLowerCase()
}else if(splitStr==isLowerCase()){
    result+=splitStr.toUpperCase()
}else{
    result+=" "
}
}
console.log(result);