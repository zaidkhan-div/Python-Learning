let obj = {};

function addToObje(key,value){
    if (obj[key]) { // if key exist push to the array
        obj[key].push(value)
    } else {
        obj[key]  = [value]
    }
}

addToObje("name","Zaidkhan");
addToObje("name","asadzaib");
addToObje("userName","Daniyal");

console.log(obj);