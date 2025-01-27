//************************************************************************************* */

// *
// * *
// * * *
// * * * *
// * * * * * 
function tri(n) {
for (let i = 1; i <=n; i++) {
    str=""
    for (let j = 1; j <=i; j++) {
        str+="* "
    }
    console.log(str);
}
}
//************************************************************************************* */
//          *
//        * *
//      * * * 
//    * * * *
//  * * * * *
function trlf(n) {
for (let i = n; i >=1; i--) {
    str=""
    for (let j = 1; j <=i-1; j++) {
        str+="  "
    }
    for (let k = i; k <=n; k++) {
        str+=" *"
    }
    console.log(str);
}
}
//************************************************************************************* */
//  * * * * * 
//  *       *
//  *       *
//  *       *
//  * * * * *  

function rect(n) {
for (let i = 1; i <=n; i++) {
    str=""
    if (i==1 || i==n) {
        for (let j = 1; j <=n; j++) {
            str+="* "
        }
    }
    else {
        for (let j = 1; j <=n; j++) {
            if (j==1 || j==n) {
                str+="* "
            }
            else{
                str+="  "
            }
        }
    }
    console.log(str)
}
}
//************************************************************************************* */
// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5 
function name(n) {
for (let i = 1; i <=n; i++) {
    str=``
    for (let j = 1; j <=i; j++) {
        str+=j+" "
    }
    console.log(str);
}
}
//************************************************************************************* */
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
function trnum(n) {
    for (let i = 1; i <=n; i++) {
        str=``
        for (let j = 1; j <=i; j++) {
            str+=i+" "
        }
        console.log(str);
    }
} 
//************************************************************************************* */

//        *
//       * *
//     *  *  * 
//   *   *  *  *
// *   *   *  *  *
function paramid(n) {
    for (let i = n; i >=1; i--) {
        str=""
        for (let j = 1; j <=i-1; j++) {
            str+=" "
        }
        for (let k = i; k <=n; k++) {
            str+=" *"
        }
        console.log(str);
    }
}
//************************************************************************************* */
//    5
//    5 4
//    5 4 3
//    5 4 3 2
//    5 4 3 2 1
function num(n) {
    for (let i = n; i >=1; i--) {
        str=""
        for (let j = n; j >=i; j--) {
            str+=j+" "
        }
        console.log(str);
    }
}
//************************************************************************************* */

// 5 4 3 2 1
// 5 4 3 2
// 5 4 3
// 5 4
// 5 
function name(n) {
    for (let i = 1; i <=n; i++) {
        str=""
        for (let j = n; j >=i; j--) {
            str+=j+" "
        }
        console.log(str);
    }
}
//************************************************************************************* */
//        *
//      *  *
//     *     * 
//   *         *
// *   *   *  *  *

        
        function trig(n) {
            for (let i = 1; i <=n; i++) {
                str=""
                for (let j = 1; j <=n-i; j++) {
                    str+=" "
                }
                for (let k = 1; k <= n; k++) {
                    if (k===1 || k===i || i===n) {
                        str+="* "                
                    }else{
                        str+="  "
                    }
                }
                console.log(str);
            }
        }



//  * * * * * 
//  *       *
//  *       *
//  *       *
//  * * * * *  
let n=5
for (let i = 1; i <=n; i++) {
    str=""
    if(i==1 || i==n)    {
        for (let j = 1; j <=n; j++) {
            str+="* "
        }
    }else{
        for (let j = 1; j <=n; j++){
            if(j==1|| j==n ){
                str+="* "
            }else{
                str+="  "
            }
        }
    }
}



for (let i = 1; i <=n; i++) {
    str=""
    for (let j = 1; j <=i; j++) {
        if(j==1 || j==i ||i==n){
            str+="* "
        }
        else{
            str+="  "
        }
        
    }   
}

for (let i = 1; i <=n; i++) {
    str=""
    for(let j=1; j<=n-i; j++){
        str+=" "
    }
    for (let k = 1; k <=n; k++) {
        if (k==1 || k==i || i==n) {
            str+=" *"
        }
        else{
            str+="  " 
        }
        
    }
    
}

// # 2  # 4  # 
// # 6  # 8  # 
// # 10 # 12 # 
// # 14 # 16 # 
// # 18 # 20 # 
function CountPattern(n) {
    count=2
    
    for(let i=1; i<=n; i++){
        str=""
        for(let j=1; j<=n; j++){
            if (j%2==0) {
                str+=count+" "
                count+=2
            }
            else{
                str+="# "
            }
        }
        console.log(str);
    }
    
}

str="oM"

let result1=""
for(let i=0; i<str.length;i++){
    let result=str[i].split()
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        
    }
    if (result==isUpperCase()) {
        result1+=result.toLowerCase()
    }
}
console.log(result);
console.log("om");