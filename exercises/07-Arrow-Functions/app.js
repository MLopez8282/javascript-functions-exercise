     const rapid = str =>{
     
         for(let i = 0; i<=str.length; i++){
             let name = !str.toLowerCase()
             if(/[aeiou]/.test(name)){
                 return str
             }
           else {
               return false
           }
            }
        };
    

   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));
