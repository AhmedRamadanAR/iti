//auto boxing

//type conversion
//type coercion (implicit type conversion)
//string (stronger ) => number => boolean
//0) (+) =>sign => force conversion to number
//1) string
//2) number 
//3) boolean
console.log("5" + 2);
console.log("7" > 3);
//3 is converted to string "3" now the comparison is "7" > "3" so it will compare it as Ascii code
console.log("a" > "b");

console.log("a" > 1);

// a will be converted to nan so it's by default is false


console.log("hi" + true);
console.log(5 + true);

console.log(3 < 2 < 1);
// 3<2 is false  then false <1 means 0<1 so final output is true

console.log(3 < (2 < 1));
// (2<1) is false so 3<0 is false


//special case :explicit converting to positive
 console.log(+null); //0
 console.log(+false); //0
 console.log(+true); //1








//explicit typeconversion
console.log(Number("42"));
console.log(String(42));
console.log(Boolean(1));
console.log(+42);
console.log(Boolean("a"));//true



//prototype inheritance

class Animal {
constructor(name){
    this.name=name
}
}

class Dog extends Animal{
constructor(name,color){
    super(name);
    this.color=color;
}
}
Animal.prototype.animalProp='animalProp';
Dog.prototype.dogProp='dogProp';
const animal =new Animal("MOl","red");
const dog = new Dog("Rex","white");
console.log(Animal.prototype);

console.log(Dog.prototype);

console.log(dog.prototype);
//console.log(Dog.prototype._prototype_._prototype_);
//console.log(dog._prototype_);
