str="Om Is a Regular In Class"
 function StrSwap(str) {
    let Cap=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    sml=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
   let str2=""
   for (let i = 0; i < str.length; i++) {
       if(Cap.includes(str[i]))  {
           let j;
           for ( j = 0; j < Cap.length; j++) {
               if (Cap[j]==str[i]) {
               str2+=sml[j]
               }
       }  
   }else if(sml.includes(str[i])){
       
       let k;
       for ( k = 0; k < sml.length; k++) {
           if (sml[k]==str[i]) {
           str2+=Cap[k]
           }
       }
   }else{
       str2+=" "
   }
   
   }
   return str2 
 }
 console.log(StrSwap(str));