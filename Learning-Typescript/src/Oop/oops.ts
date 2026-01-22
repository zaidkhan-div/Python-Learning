// class Chai {
//     flavour: string;
//     price: number;

//     // constructor(flavour: string, price: number) {
//     //     this.flavour = flavour;
//     //     this.price = price;
//     // }
//     constructor(flavour: string, price: number) {
//         this.flavour = flavour;
//         this.price = price;
//     }
// }

// const masalaChai = new Chai("strawbery", 150);
// masalaChai.flavour = "choaclate";
// masalaChai.price = 150;

// ============== Access Modifier ============= 

class Chai {
    public flavour: string = "New";

    private secret = "Secret";

    reveal() {
        return this.secret // ok
    }
}

class Shop {
    protected shopName = "Shopkeeper"
}

class Branch extends Shop {
    getName() {
        return this.shopName; // okay
    }
}

class Walet {
    #Balance = 100; // this si also private;

    getBalance() {
        return this.#Balance;
    }
}

const w = new Walet();
w.getBalance();

const c = new Chai();
c.reveal();

// new Branch().getName;

// ========== ReadOnly Property =======

class Cup {
    readonly capacity: number = 100;

    constructor(capacity: number) {
        this.capacity = capacity; // this can't be changed
    }
}


// ======== controllGets = Setter Getter =========

class ModernChai {
    private _sugar = 2; // it is good to use underScore with private variables;

    get sugar() {
        return this._sugar
    }

    set suagr(value: number) {
        if (value > 5) throw new Error("Not Good!");
        this._sugar = value
    }
}

const d = new ModernChai();
d.suagr = 10;

// =============== Static Members =========

class EkChai {
    static shopName = "ChaiCode caffe";

    constructor(public falvour: string) { }
}

console.log(EkChai.shopName)

abstract class Drink {
    abstract make(): void;
}

class MyChai extends Drink {
    make() {
        console.log("Brewing chai");
    }
}

class Heater {
    heat() { }
}

class ChaiMaker {
    constructor(private heater: Heater) { }
    make() {

        this.heater.heat
    }
}