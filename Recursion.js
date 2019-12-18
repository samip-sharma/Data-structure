// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

// Sample:

// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false



function all(arr,callBack){
 
    if(arr.length <= 0 ) return true;
    let popped=arr.pop()
    let result = callBack(popped)

    if(result === false ){
         return false
    }else{
        all(arr, callBack)
        }

return result
}

all([1,2,5], function(num){
	return num < 7;
});
