// Step 30
// The sort() method accepts a compare callback function that defines the sort order.

// In this example, the first condition (a.name < b.name) checks if the name of the first fruit is less than the name of the second fruit. If so, the first fruit is sorted before the second fruit.

// Strings are compared lexicographically which means they are compared character by character. For example, "Apples" is less than "Bananas" because "A" comes before "B" in the alphabet.

// The reason why this example is returning numbers is because the sort() method is expecting a number to be returned. If you return a negative number, the first item is sorted before the second item.

// Example Code
const fruits = [
    { name: "Apples", price: 0.99 },
    { name: "Blueberries", price: 1.49 },
    { name: "Grapes", price: 2.99 },
];

fruits.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }

    if (a.name > b.name) {
        return 1;
    }

    return 0;
});