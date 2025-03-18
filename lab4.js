//Q1

/*
Instructions: Determine whether the following values are truthy or falsy.
1. Boolean("")
o B) false

2. Boolean(-0)

o B) false
3. Boolean("false")
o A) true

4. What values are always falsy in JavaScript? (Select all that apply)
o A) 0
o C) null
o D) undefined

5. True : All objects (e.g., {} or new Object()) are truthy.
6. True : All arrays (e.g., [] or new Array()) are truthy.
*/


/* Q1- part II

Instructions: Answer questions about type conversion in JavaScript.
1. What is the result of "5" + 2?

o B) "52"

2. What does 5 - "2" return?
o B) 3

3. What is the result of +"42"?
o B) 42

4. What does Boolean("0") return?
o A) true

5. What is the result of 3 < 2 < 1?
o A) true

*/


//Q2
class Vehicle {
    constructor(type){
        this.type=type;
        
    }
   
}
Vehicle.prototype.describe = function(){
    console.log(`This is a ${this.type}`);

}
class Car extends Vehicle{
    
    brand;
    constructor(brand,type){
        super(type);

        this.brand=brand;
    }
}
Car.prototype.honk=function(){
    console.log(`This is a ${this.type} and make sound beeb beeb`);

}
class ElectricCar extends Car{
    batteryRange;
    constructor(type,brand,batteryRange){
        super(type,brand)
        this.batteryRange=batteryRange;
    }
}
ElectricCar.prototype.charge=function(){
    console.log(`This is a ${this.type} and it's charging with ${this.batteryRange}`);


}
Vehicle.prototype.maxSpeed="10 m/s"
const vechile=new Vehicle("bmw");
vechile.describe();

const myTesla = new ElectricCar("car", "Tesla", 30);

myTesla.describe(); 
myTesla.honk(); 
myTesla.charge(); 

console.log(`Max speed: ${myTesla.maxSpeed} m/sec`);