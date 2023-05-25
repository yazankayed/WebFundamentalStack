function fibonacciArray(n) {
     // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    while(fibArr.length < n) {
        let prev = fibArr[fibArr.length-1];
        let prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}
let result= fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]