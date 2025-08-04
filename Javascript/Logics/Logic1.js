function findSmallestThree(a, b, c) {
    // if (a < b && a < c) {
    //     return a
    // } else if (b < a && b < c) {
    //     return b
    // } else {
    //     return c
    // }
    switch (true) {
        case a < b && a < c:
            return a;
        case b < a && b < c:
            return b;
        default:
            return c
    }
};

// console.log(findSmallestThree(14, 11, 12))


// function smallestThree2(a, b, c) {
//     let smallest = a;
//     if (b < smallest) {
//         smallest = b;
//     } else if (c < smallest) {
//         smallest = c;
//     }
//     return smallest;
// }

// console.log(smallestThree2(10, 11, 3));

function smallestThree3(a, b, c) {
    let arr = [a, b, c].sort((a, b) => a - b);
    let smallest = arr[0];
    return smallest
}

// console.log(smallestThree3(11, 2, 3));


// ========= reversedString ==========

function reversed(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

console.log(reversed("Zaidkhan"))