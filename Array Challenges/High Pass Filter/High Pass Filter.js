function highPass(arr, cutoff) {
    finalArray = [];
   for(let i=0; i<arr.length; i++) {
       if(arr[i] > cutoff) {
           finalArray.push(arr[i]);
       }
   }
   return finalArray;
}

let result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);