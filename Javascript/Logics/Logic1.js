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
}

console.log(findSmallestThree(14, 11, 12))