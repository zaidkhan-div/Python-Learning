// there are less types for function in typescript 
// there are 2 types for function either return or not 

function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} of ${type}`);
}
makeChai("Flavour", 1);


function learnReturnType(): number { // this will return in number formate 
    // return "String not allowed"
    return 30;
}

function makeOrder(order: string) {
    if (!order) return null;
    return order;
}

function loggerFucn(): void { // we are not returning anything
    console.log("function is ready");
}

function optianlDefaultPara(type?:string){ // ? optional
    return "Zaidkhan";  
}