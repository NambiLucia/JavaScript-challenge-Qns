




function fizzBuzz(str1,str2){
    let combined= str1.length + str2.length;
    if(combined % 5 ===0 && combined % 3 ===0){
        return "FizzBuzz"
    }
    else if(combined  % 3 ===0){
        return "FizzBuzz"

    }
    else if(combined % 5 ===0){
        return "Buzz"

    }
    else{
        return "none of the above"
    }

};
console.log(fizzBuzz("lucia","nambi"));

