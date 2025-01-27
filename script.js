// console.log("hello world")
// *****************day 2 *************
// let z= 62;
// // console.log(z++) //post inc
// // console.log(++z)
// // console.log(z--)//post dec

// // console.log(--z)

// console.log(z-- + ++z + z-- + ++z + --z + z++)
//*************** day-3 */
// console.log(5=='5')
// console.log(5==='5')
// console.log(5>=3)
// console.log(5<=8)
// console.log(5!=8)

// let a=10;

// console.log(a+=12)
// console.log(a-=12)
// console.log(a*=12)
// console.log(a/=12)
// console.log(a%=12)


// *****************date 2-Dec *************

// let age=18;
// if(age<=18){
//        if(age===18)
//        {
//         console.log("you can drive bike")}
//         else if(age>17){
//             console.log("you can drive activa only")
//         }
//         else{
//             console.log("you can drive cycle")
//         }
//  }
//  else{
//         console.log("you can drive anyting")
//        }

// let bankusername="om12"
// let bankpassword="pass12"
// let username="om12"
// let password="pass12"
// if(bankusername===username && bankpassword===password){
//     console.log("bank security system successfully login!")
// }else{
//     console.log("please try again....")
// }

// if(bankusername===username && bankpassword===password){
//     console.log( "userName:"+username+"   password:"+ password+"     successfully login!")
// }else{
//     console.log("please try again....")
// }

var c=document.querySelector(".main")
var a=document.querySelector(".p")
a.addEventListener("mousemove" ,function(e){
   gsap.to(".main",{
    x:e.x,
    y:e.y,
    ease:"back.out",
    duration:1.3
   } )
})

// for(let i=491; i>=335; i-=7){
//     console.log(i)
// }


// for(let j=111; j<=200; j+=3){
//     console.log(j)
// }

// for(let k=47; k>=0; k-=6){
//     console.log(k)
// }

// for(let l=23; l<=441; l++){
//     console.log(l)
// }


// console.log("***************************")

// let i=1;
// do{
// console.log(i)
// i++
// }while(i<=10)

// console.log("***************************")

// for(let i=1; i<=100; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// // }
// let end = 1
// for(let i=50; i>=end; i--){
//    console.log(i)
// }


// let m="uuuuugggrgnrugurgjnwggw"
// for(let i = m.length; i>0; i--){
//    console.log(m[i])
// }

// let p=1;
// while(p<=100){
//    if (p%2!=0) {
//       console.log(p)
//    }
//    p++
// }

// let o=8
// let min=0;
// for (let i = 15; i>=o; i--) {
//    min+=i;
// }
// console.log(min)

// Write a  program to find sum of all even numbers between 1 to n.

// let r=prompt("enter a number");
// let sum=0
// for (let i = 1; i <= r; i++){
//    if (i%2==0) {
//       sum+=i;
//    }
// }
// console.log(sum)



// Write a  program to find sum of all odd numbers between 1 to n.

// let w=prompt("enter a number");
// let sum=0
// for (let i = 1; i <= w; i++){
//    if (i%2!=0) {
//       sum+=i;
//    }
// }
// console.log(sum)


// Write a  program to print multiplication table of any number.


// let d=prompt("enter a number");
// let b=10
// let sum=1
// for (let i = 1; i <= b; i++){
   
//    sum=i*d
//    console.log(sum)
// }


// let data={

//    name:"rushi",
//    surname:"moon",
//    name:"rushikesh"

// }

// data["salary"]=100//add key and val to data obj
// console.log(data["surname"])// ret
// console.log(data["age"])



// console.log(data)



// let str="ababcfefgaaddrrrrppjuu"

// let obj={}
// for(let i=0;i<str.length;i++)
// {
    
//    if(obj[str[i]]==undefined)
//    {
//         obj[str[i]]=1
//    }else{
           
//        obj[str[i]]=obj[str[i]]+1
//    }

// }

// console.log(obj)



// while (true) {
   
// let operation =prompt(`choose an operator
// Enter 1 for Addition.
// Enter 2 for Substraction.
// Enter 3 for Multiplication.
// Enter 4 for Division.
// Enter 5 for Modulus.`)

// let num1=parseInt( prompt("enter a num 1"))
// let num2=parseInt(prompt("enter a num 2"))

// let result;



// switch (operation) {
//    case "1":
//       result= num1+num2;
//       alert(`The addition of ${num1} and ${num2} is `+result);
//       break;
//       case "2":
//          result=num1-num2;
//       alert(`The Substraction of ${num1} and ${num2} is `+result);

//          break;
//          case "3":
//             result=num1*num2;
//             alert(`The Multipliction of ${num1} and ${num2} is `+result);

//             break;
//             case "4":
//                if (num1%num2==0) {
//                   result=num1/num2
//                   alert(`The addition of ${num1} and ${num2} is `+result);
//                }
//                else{
//                   result=num1/num2
//                   let remen
//       alert(`The Division of ${num1} and ${num2} is `+result);

//                }
//                break;
//                case "5":
//                   if (num1%num2==0) {
//                      result=num1%num2
//          alert(`The Modulus of ${num1} and ${num2} is `+result);
//                   }
//                   break;
//                   default:
//                      alert("you entered wrong operator...")
//                      break;
                 
   
// }
                  
// let choice=prompt("Do you want to exit if yes please type exit or press ok to continue.....")

//                      if(choice==="exit"){
//                      alert("thankYou for using good bye....")
//                      break;

//                      }

// }


// let num=434347
// let tostr= num.toString();
// let firstdigit= parseInt(tostr[0])
// let lastdigit=parseInt(tostr[tostr.length-1])
// console.log(firstdigit)
// console.log(lastdigit)

// let lastdigit=num%10
// while (num>=10) {
//    num=Math.floor(num/10)      
//    }
//    let firstdigit=num

//    console.log(firstdigit)
//    console.log(lastdigit)
 

// Write a  program to find sum of first and last digit of a number.
// let num=434347
// let tostr= num.toString();
// let firstdigit= parseInt(tostr[0])
// let lastdigit=parseInt(tostr[tostr.length-1])
// let sum=firstdigit+lastdigit
// console.log(sum)


// Write a  program to swap first and last digits of a number. using arr
// let num=434347
// let tostr= num.toString();
// let firstdigit= parseInt(tostr[0])
// let lastdigit=parseInt(tostr[tostr.length-1])
// let tem;
// tem=firstdigit;
// firstdigit=lastdigit;
// lastdigit=tem;
// console.log(firstdigit)
// console.log(lastdigit)



// let numb=348923084
// let sum7=0
// while (numb>0) {
//    let rem=numb%10
//    sum7+=rem
//    numb=Math.floor(numb/10)
// }
// console.log(sum7)





// console.log("**********************************************")




// let num=12345
// let copy=num

// console.log(num) 
// let changedld=false
// let changedfd=false

// let ld=num%10
// let fd;

// while(num>0)
// {
//      fd=num%10
//     num=Math.floor(num/10)
// }


// // console.log(fd)
// // console.log(ld)

// // Write a  program to find sum of first and last digit of a number.
// // let sum=fd+ld
// // console.log(sum)

// // Write a  program to swap first and last digits of a number.
// let result=0

// while(copy>0)
// {  
//     let rem=copy%10
//      if(rem==fd && changedfd==false)
//      {
//         result=result*10+ld
//         changedfd=true
//      }else if(rem==ld && changedld==false)
//      {
//         result=result*10+fd
//         changedld=true
//      }else{
//         result=result*10+rem
//      }

//    copy=Math.floor(copy/10)
// let rev=0;

// while(result>0)
//     {
//          let rem=result%10
//          rev=rev*10+rem
 
//          result=Math.floor(result/10)

//     }

// console.log(rev)


// let num=12345
// console.log(num)
// let copnum=num
// let lastdigit=num%10
// let firstdigit;
// let firstdigitch=false;
// let lastdigitch=false
// while (num>0) {
//    firstdigit=num%10
//    num=Math.floor(num/10)
// }
// let result=0;
// while (copnum>0) {
//    let rem=copnum%10
//    if (rem==firstdigit && firstdigitch==false) {
//       result=result*10+lastdigit
//       firstdigitch=true;
//    }else if (rem==lastdigit && lastdigitch==false) {
//       result=result*10+firstdigit
//       lastdigitch=true;
//    } else {
//       result=result*10+rem
//    }
//    copnum=Math.floor(copnum/10)
// }
// console.log(result)
// let rev=0;
// while (result>0) {
//    let rem=result%10
//    rev=rev*10+rem
//    result=Math.floor(result/10)
// }
// console.log(rev)


//    Write a  program to calculate product of digits of a number.

// let num=34232
// let result=0
// let pro=1
// while (num>0) {
//       let lastdigit=num%10
//       pro=pro*lastdigit
//       num=Math.floor(num/10)
// }
// console.log(pro)


//    Write a  program to enter a number and print its reverse.

// let num= prompt("Enter a number")
// let result=0
// while (num>0) {
//    let rem=num%10
//    result=result*10+rem
//    num=Math.floor(num/10)
// }
// alert(`reverse value is ${result}`)

// Write a  program to check whether a number is palindrome or not.
//  let num=22322
//  let copnum=num
//  result=0
//  while (num>0) {
//    let rem=num%10
//    result=result*10+rem
//    num=Math.floor(num/10)
// }
// console.log(result)

// if(copnum===result){
//    console.log("its a palindrome num")
// }
// else{
//    console.log("its not a palindrome num")
// }


// function name() {
//    console.log("Hello World")
// }
// name()


// function revme(num) {
// let result=0
//  while (num>0) {
//    let rem=num%10
//    result=result*10+rem
//    num=Math.floor(num/10)
// }
// return result
// }
// let origin=revme(43434)
// let rev=revme(43434)
// function ispal(origin) {
//    if (rev==origin) {
//       console.log("it is palindrome")
//    }else{
//       console.log("it is not palindrome")
//    }
// }
// ispal(revme(43434))



// let obj={
//    Name:"Om",
//    surname:"shende",
//    email:"om@gmail.com",
//    print:function(){
//       console.log(this.Name,this.email)
//    }
// }
// obj.mob=9359086635
// console.log(obj)
// obj["Name"]="Omkant"

// console.log(obj["email"])
// console.log(obj.surname)
// obj.print()






// Write a  program to find power of a number using for loop.
// let base=2
// let exponential=3

// let result=1
// for (let i = 1; i <= exponential; i++) {
//    result *=base   
// }
// console.log(result)

// function power(base,exponential) {
   
// let result=1
// for (let i = 1; i <= exponential; i++) {
//    result *=base   
// }
// return result
// }
// console.log(power(2,3))





// Write a  program to find all factors of a number.
// function factors(num) {
//    for (let i = 1; i <= num; i++) {
//       if (num%i==0) {
//          console.log(i)
//       }
//    }
// }
// factors(12)


// Write a  program to find HCF (GCD) of two numbers.


// function hcf(num1,num2) {
//    while (num2!==0) {
//       let tem =num2
//       num2=num1%num2
//       num1=tem
//    }
//    return num1

// while (num1!=num2) {
//         if (num1>num2) {
//                 num1-=num2
//         }
//         else if(num2>num1){
//                 num2-=num1
//         }
// }
// return num1;
// }

// console.log(hcf(36,60))

// Write a  program to find LCM of two numbers.
// function lcm(num1,num2) {
//    return num1*num2/hcf(num1,num2)
// }
// console.log(lcm(36,60))


// Write a  program to check whether a number is Prime number or not.

// function prime(num) {
   
// if (num<=1) {
//    let v= "the numbers 0,1,and negative numbers are not prime number"
//    return v
// }
// for (let i = 2; i <=Math.sqrt(num); i++){
//    if (num%i==0) {
//       let b="it is not prime number"
//       return b
      
//    }
//    let c="it is a prime number"
//    return c
// }

// for (let i = 2; i <num; i++) {
//         if (num%i!==0) {
//                 return "the num is prime number:"
//         }else{
//                 return "he num is not prime number"
//         }
// }

// }
// console.log(prime(8))
//************************************************************************************* */


// Write a  program to print all Prime numbers between 1 to n.
// function prnum(num) {
   
// if (num<=1) {
//    return false
// }
// for (let i = 2; i <=Math.sqrt(num); i++){
//    if (num%i==0) {
//       return false
      
//    }
//    return true
// }
   
// }
// for (let i = 1; i <=100; i++) {
//    if (prnum(i)) {
//       console.log(i)
//       }
// }
//************************************************************************************* */


// Write a  program to find sum of all prime numbers between 1 to n.
// function prnum(num) {
   
//    if (num<=1) {
//       return false
//    }
//    for (let i = 2; i <=Math.sqrt(num); i++){
//       if (num%i==0) {
//          return false
         
//       }
//       return true
//    }
      
//    }
//    let sum=0
//    for (let i = 1; i <=100; i++) {
//       if (prnum(i)) {
         
//          sum+=i
//          }
//    }
   
//    console.log(sum) 

//************************************************************************************* */



// let arr=["omkant","sarang",2,3,3,4,5,"om"]
// // console.log(arr[0])
// console.log(arr.length)
// console.log(arr[arr.length-1])

// let num=["a","b","c","d"]
// let abc=qqq
//  function arr(num) {
// let qqq=[]

//    for (let i = 0; i < num.length; i++) {
//       qqq[i] = num[i];
//    }
//    return qqq

//  }
//  arr(num)

// let abc=["a","b","c","d","e"]
// let xyz=MakeAClone(abc)


// function MakeAClone(arr)
// {   
//     let qqq=[]

//     for(let i=0;i<=arr.length-1;i++)
//         {      
             
//             qqq[i]=arr[i]
        
        
//         }


//         return qqq
// }  


// console.log("abc-->",abc)
// console.log("xyz-->",xyz)


//************************************************************************************* */


// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// let  myColor = ["Red", "Green", "White", "Black"];
// let join=myColor.join("+")

// let str=""

// for (let i = 0; i <=myColor.length-1; i++) {

//        str= str+" "+myColor[i]

// }
// console.log(str)
// console.log(join)




//************************************************************************************* */


//  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. 
// For example if you accept 025468 the output should be 0-254-6-8.

// let num=88775545445

// let result=[]
// while (num>0) {
//     result.unshift(num%10)
//     num=Math.floor(num/10)
// }

// for (let i = 0; i <result.length-1; i++) {
//     if (result[i]%2==0 && (result[i+1])%2==0) {
//     result.splice(i+1,0,'-')   //index, delete item, insert item1,....insert item n;
//         i++
//  }    
// }
// console.log(result.join(''))

//************************************************************************************* */

// 12. Write a JavaScript program to compute the sum and product of an array of integers.
        // let arr=[4,3,4,3,2,4]
        // let sum=0
        // let product=1
            
        // for (let i = 0; i < arr.length; i++) {
        //     sum+=arr[i]    
        //     product*=arr[i]        
        //     }
        
        // console.log("sum-->"+sum+" "+"product-->"+product )
//************************************************************************************* */

// 13. Write a JavaScript program to add items to a blank array and display them.
// let items=[]
// function add(item) {
//     items.push(item)
//     console.log(item)
// }

// function display() {
//     if (items.length===0) {
//         console.log("empty")
//     }
//     else{
//         console.log(items)
//     }
// }

// add(3)
// add(4)
// add(8)
// display()
//************************************************************************************* */


// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
// let newarr=["apple","APPLE","new","Omkant","omkant"]

// let arr=[]
// let add=[]

// for (let i = 0; i < newarr.length; i++) {
//     arr[i]=newarr[i].toLocaleLowerCase()
//     if (newarr[i]===arr[i]) {
//         add.push(arr[i]+" ")
//     }
// }
// console.log(add)
//************************************************************************************* */


// The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.
// Examples
// Initial Array: [1, 2, 3, 4]
// Cumulative Sum: [1, 3, 6, 10]
// Initial Array: [1, 1, 1, 1, 1]
// Cumulative Sum: [1, 2, 3, 4, 5]
// Initial Array: [1, 3, 5, 7, 9]
// Cumulative Sum: [1, 4, 9, 16, 25]
// =====================================

// arr=[1, 3, 5, 7, 9]
// ans=[]
// for(let i=0;i<=arr.length-1;i++)
// {   let sum=0
//    for(let j=0;j<=i ;j++)
//    {
//         sum=sum+arr[j]   

//    }
//    ans.push(sum)

   
// }

// console.log(ans)
//************************************************************************************* */


// Given an array and a number k, remove all occurrences of k from the array (in-place). Return the number of elements 'remainingSize' left after removing k. 
// Example
// Array: [1, 4, 2, 6, 2, 6, 9, 4]
// Number: 4
// Answer: 6
// Explanation:[1, 2, 6, 2, 6, 9]

// arr=[1, 4, 2, 6, 2, 6, 9, 4]
// k=4
// ans=[]
// for(let i=0;i<=arr.length-1;i++){

//    if(arr[i]!=k)
//    {
    
//     ans.push(arr[i])
//    }



// }
// console.log(ans)
// console.log(ans.length)
//************************************************************************************* */


// let nums = [2,7,11,15]
//  let target = 9
//  let output=[]
//     for(let i=0; i<=nums.length-1; i++){
//         if(nums[i]+nums[i+1]==9){
//             output.push(i)
//             output.push(i+1)
//         }
//     }
// console.log(output)

//************************************************************************************* */

//  let nums = [0,0,1,1,1,2,2,3,3,4]
//  let returns=[]
// function removeDuplicates(nums) {
//     for(let i=0;i<=nums.length-1;i++){
       
//    if( nums[i]!=nums[i-1])
//    {
//     returns.push(nums[i])
//    }

// }
// };
// removeDuplicates(nums)
// console.log(returns)   

//************************************************************************************* */

// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
//               0       1       2        3
// let myColor = ["Red", "Green", "White", "Black"];
// let qqq="&&"
// let ans="";


// for(let i=0;i<=myColor.length-1;i++)
// {
        //   if(i==myColor.length-1)
        //   {
        //     ans=ans+myColor[i]
        //   }else{
        //     ans=ans+myColor[i]+qqq
        //   }

//     ans= i==myColor.length-1 ?  ans+myColor[i] :ans+myColor[i]+qqq

//  }

//   console.log(ans)


//************************************************************************************* */


//   let abc=4

// //?:
//   let kk=  abc>10 ? "value is greater than 10" : "value is less tahn 10";


//   console.log(kk)




//*****************************************LEETCODE***************************************** */

// let words = ["axicc","waxiccgq","ssvob","gissvobox","zfzcj","gtzfzcjyk","cpjj","mnwaxiccgqd","dvfoc","rszfzcjim","hxz","vmssvob"]
// let sub=[]
// let sub1=[]
// for (let i = 0; i < words.length; i++) {
//         for (let j = 0; j < words.length; j++) {
//                 if (i!==j && words[i].includes(words[j])) {
//                 sub.push(words[j])  
//                       }                
//         }
// }
// for (let k = 0; k < sub.length; k++) {
//         for (let l = 0; l < k; l++) {
               
//         if (sub[k]==sub[l]) {
//                 sub1.push(sub[l])
//         }   
//         }      
// }

// console.log(sub1)
//****************************************************************************************** */
// factors of number

// function factor(num) {
//         let z=2
//         let arr=[]
//         while (num!==1) {
//                 if (num%z==0) {
//                         arr.push(z)
//                         num=num/z
//                 } else {
//                         z++
//                 }
//         }
//         return arr 
// }
// console.log(factor(56))
//************************************************************************************* */

//prime number or not

// function prime(num) {
// for(let i=2;i<num;i++)
// {
//      if(num%i==0)
//      {
//         return false
//      }
//      else{
//       return true
//    }
// }
// let sum=0
//    for (let i = 1; i <=100; i++) {
//       if (prime(i)) {
         
//          sum+=i
//          }
//    }
//    console.log(sum)
// }
//************************************************************************************* */

// write a  program to print all Prime numbers between 1 to n.


// for (let i = 2; i < 100; i++) {
        
// prime(i)
    
// }



//************************************************************************************* */
// Write a  program to find sum of all prime numbers between 1 to n.
// let sum=0
//    for (let i = 1; i <=100; i++) {
//       if (prime(i)) {
         
//          sum+=i
//          }
//    }
//    console.log(sum)

//************************************************************************************* */



// function perfect(num) {
   
// let arr=[]
// for (let i = 1; i <=Math.floor(num/2); i++) {
//          if (num%i==0) {
//             arr.push(i)
//          }   
// }
// let sum=0
// for (let i = 0; i < arr.length; i++) {
//    sum+=arr[i]
// }

// if (num==sum){
//    return sum
// }
// }
// // console.log(perfect(9))
// for (let i = 1; i <=100; i++) {
//    if(perfect(i)==undefined){
//       continue
//    }else{
//      console.log(perfect(i))    

//    }


// }
//************************************************************************************* */

// Write a  program to check whether a number is Armstrong number or not.


// num=1694


// function countDig(num){

//     let count=0;
//     while(num>0){
//         count++
//         num=Math.floor(num/10)

//     }
//      return count

// }

// function findSum(num){

//     let sum=0
//     let pow=countDig(num)
//     while(num>0){
      
//         ld=num%10
//         sum=sum + ld**pow
//         num=Math.floor(num/10)
         
//     }
    
// return sum


// }

// if(num==findSum(num)){
//     console.log("number is armstring")
// }else{
//     console.log("number iusn not arn=mstrong")
// }


//************************************************************************************* */
// Write a  program to check whether a number is Strong number or not.


// function facto(num1) {
//         let num=num1
//         arr=[]
       
//        while (num>0) {
        
//        ld=num%10
//        let fac=1
//        for (let i = 1; i <=ld; i++) {
//                 fac*=i
        
//        }
//         arr.push(fac)

//         num=Math.floor(num/10)
//        }
// //        console.log(arr)
//        let sum=0
//        for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i]
        
//        }
// //        console.log(sum)

// if (num1==sum) {
//         console.log("its a strong number")
// }
// else{
//         console.log("its not a strong number")
// }

// }
// console.log(facto(145))

//************************************************************************************* */

// Write a  program to print all Strong numbers between 1 to n.



// function facto(num1) {
//         let num=num1
//         arr=[]
       
//        while (num>0) {
        
//        ld=num%10
//        let fac=1
//        for (let i = 1; i <=ld; i++) {
//                 fac*=i
        
//        }
//         arr.push(fac)

//         num=Math.floor(num/10)
//        }
// //        console.log(arr)
//        let sum=0
//        for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i]
        
//        }
// //        console.log(sum)

// if (num1==sum) {
//         console.log(sum)
// }

// }

// for (let i = 1; i <=200; i++) {
//         facto(i)
        
// }

//************************************************************************************* */
// Write a  program to print Fibonacci series up to n terms.
// function fibonacci(n) {
        
// arr=[1,1]
// let i=0
// while(i<n){
// arr.push(arr[i+1]+arr[i])
// i++
// }
// return arr
// }

// console.log(fibonacci(9))
//************************************************************************************* */


// function calfact(num) {
//         let fact=1
//         for (let i = 1; i <=num; i++) {
//                 fact*=i
//         }
//         return fact
// }
// function SumAndAdd(number) {
//         let sum=0
//         while (number>0) {
//                 let ld=number%10
//         sum+=calfact(ld)
//         number=Math.floor(number/10)
//         }
//         return sum
// }
// function isStrong(num) {
//         if (num==SumAndAdd(num)) {
//                 console.log(num, " is strong number")
//         }
//         // else{
//         //         console.log(num," is not a strong number")
//         // }
// }
// //*******For 1 to n***** */
// let n=200
// for (let i = 1; i <n; i++) {
//         isStrong(i)
// }

//************************************************************************************* */
// Write a  program to print Fibonacci series up to n terms.


// function Fabio(n) {
        
// let ab=0
// let ba=1
// let str =`${ab} ${ba}`;
// let cb  
// while(n-2>=1) {
//         cb=ab+ba
//         ab=ba
//         ba=cb
//         str=str+" "+cb
// }
// return str
// }
// console.log(Fabio(10));



// *
// * *
// * * *
// * * * *
// * * * * * 

