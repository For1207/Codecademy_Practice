const Calculate = {
   
   //  Calculates and return a factorial from a given number
 
   // Using loops
   //  factorial (num) {
   //    let factorial = 1;
   //    for(let i = num; i >= 1; i--)
   //    factorial = factorial * i;
   //    return factorial;
   //  }
 
   // Using a recursive function
   factorial (num) {
       // base case
       if(num === 0 || num === 1) {
          return 1;
       // recursive case
       } else {
          return num * this.factorial(num - 1);
       }
    }
 }
 
 module.exports = Calculate;