class Car {
    color;
    //static
    static pi = 3.14;
    #price
    constructor(color, brand, price) {
        //this means current instance of this class
        this.color = color;
        //you can add propery from the constructor
        this.brand = brand;
        this.#price = price;

    }
    taxCalculator() {
        return 0.1 * this.#price;

    }
    static generateRandom() {
        return Math.random();
    }
    //getter
    getPrice() {
        return this.#price
    }
    //setter
    setPrice(newPrice) {
        this.#price = newPrice;
    }


}

console.log(Car.generateRandom());
let bmwObject = new Car("red", "bmw", 1000);

let audioObject = new Car("green", "audi", 3000);
console.log(bmwObject.taxCalculator());
audioObject.setPrice(8909)
console.log(audioObject.getPrice());

//object literal 
var obj = {
    name: "ahmed",
    age() {
        return 20;
    }
};
console.log(obj.age());

obj = {
    color: "green",
    gg: "fd"
}
console.log(obj);
//object literal

const obj2 = {
    name: "ahmed",
    age() {
        return 20;
    }
};
obj.name = "mohamed"
console.log(obj2);


//mutate and reassign

const obj3 = {
    name: "sayed",
    age: () => {
        return 20;
    }
};
Object.freeze(obj3);
//can't mutate : can't modify it's properties
obj3.name = "mohamed"
console.log(obj3);
console.log(Car.pi);