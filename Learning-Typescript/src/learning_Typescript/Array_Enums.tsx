// for array in ts this is how we make string[] in this array we can only store string now , I can't write number init
const userNames: string[] = ["string", "number"];

const prices: number[] = [10, 20];

// this is the custom array typeSafety
const cutom: Array<string | number> = ["customType", 10];

// most of the time we have Array of object 

type Data = {
    name: string;
    price: number;
    rating: number;
}

// const api_data: Data[] = ["string"]; // here we can not assing only string to this now

const api_data: Data[] = [
    {
        name: "phone", rating: 4, price: 300
    }
];

// we have readOnly property for not mutating array

const cities: readonly string[] = ["karachi", "islamabad"];
// now i can't perform any action on it cities.push("peshawar");

// For two dimenstion array 

const table: number[][] = [
    [1, 2, 3, 4],
    [90, 20, 33]
];

// ========== Tuples =========

let chaiTuple: [string, number];
chaiTuple = ["string", 20];
// chaiTuple = [10,"order_Matters in Tuples"];

let userInfo: [string, number, boolean?];
userInfo = ["string", 20, false];
userInfo = ["Boolean_is_Optional", 50];

// ======= ReadOnly Tuples ========

let location: readonly [number, number] = [240, 250];
// so can't itterate on readonly


// ======= Enums =======

// restricted & Fixed items 

enum Shirt_Sizes {
    SMALL,
    MEDIUM,
    LARGE
}

const size = Shirt_Sizes.LARGE;

enum Status {
    PENDING = 100,
    SERVED, // if we dont pass to them they increament by default
    CANCELLED,
}

// NOW THIS IS auto enums 

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.LOW; // fixed enum values

let t: [string, number] = ["name", 10];
t.push("canPush")