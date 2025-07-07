// function addTwoNums(a, b) {
//     const addTwoNums = a + b;
//     console.log('Sum of two is', addTwoNums)
// }
// addTwoNums(1.5, 1.5);


function calculateArea(length, width) {
    if (length <= 0) {
        throw new RangeError('Length should be a positive number');
    }
    if (width <= 0) {
        throw new RangeError('Width should be a positive number')
    }
    const calculateArea = length * width;
    return calculateArea;
}
let result = calculateArea(2, -3);
console.log(result)
