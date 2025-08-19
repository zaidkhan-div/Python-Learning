function calculateFactorial(input){
    let result = 1;
   for(let i = 0; i <input; i++){
    result += result * i;
    console.log(result);
   }
}
calculateFactorial(4)