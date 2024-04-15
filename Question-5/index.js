/*Given an integer num, write a function that repeatedly adds all its digits until the result has only one digit, and return it.
*/

function adding(num){
  let numString = num.toString();
  let numSplit = numString.split('')
  let sum=numSplit.reduce(add)

  function add(num1,num){
   let sumAll= num1 + num
    if(sumAll=== numString){
        function adding(num){
            let numString = num.toString();
            let numSplit = numString.split('')
            let sum=numSplit.reduce(add)
    }
    

  }
  else{
        return num;
    }
}
}
console.log(adding(38));














































