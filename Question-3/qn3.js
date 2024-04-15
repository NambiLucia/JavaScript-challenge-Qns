/*Write a function named twoSum which takes two parameters: nums and target. Given an array of integer nums and an integer target, return indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.*/



function twoSum(nums, target) {
    for (let i = 0; i<nums.length; i++) {
        for(let m=i + 1; m<nums.length; m++){
            if(nums[i] + nums[m] === target){
                return [i,m];

            }

        }
       
        }
      return [];
    
        }
        

console.log( twoSum([1,2,5],6));


