/*Write a JavaScript program that prompts a user to enter their year of birth and in turn prints a string in the console stating whether the user is a minor, a youth, or an elder.  Anyone below 18 years is a minor, anyone between 18 and 36 years is a youth and the rest are elders.
*/ 



function ageClassifier(){
let d=new Date();
let curentYear=d.getFullYear();
let birthYear=prompt("What's your birth year");
let age=curentYear-birthYear;
prompt("What's your birth year")

    if(age < 18 ){
        console.log("You are a still a minor");

    }
    else if(age >=18 && age < 36){
        console.log("You are a Youth");

    }
    else {
        console.log("You are an Elder");

    }


};
console.log(ageClassifier());