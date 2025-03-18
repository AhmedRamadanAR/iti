class Employee {
    name
    age
    #salary
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.#salary = salary;

    }
    showInformation() {
        console.log("I'm" + this.name + " an employee in the company with salary : " + this.#salary);
    }
    setsalary(newSalary) {
        this.#salary = newSalary;
    }
    getSalary() {
        return this.#salary;
    }
}
class Manager extends Employee {
    bonus
    constructor(name, age, salary,bonus) {
        super(name, age, salary); 
        this.bonus=bonus;
    }
    showInformation() {
        console.log("I'm " + this.name + ", a manager in the company");
    }
    extraSalary(){
       return this.getSalary()+this.bonus;
    }
}
class Developer extends Employee {
    
    constructor(name, age, salary) {
        super(name, age, salary); 
    }
    showInformation() {
        console.log("I'm" + this.name + " Developer in the company")
    }
}
class Intern extends Employee {
    constructor(name, age, salary) {
        super(name, age, salary); 
    }
    showInformation() {
        console.log("I'm" + this.name + " intern in the company")
    }
}

const emp1 = new Employee("Ahmed", 23, 250000);
const emp2 = new Manager("Ahmed", 21, 900000,2);
const emp3 = new Developer("maged", 26, 300000);
const emp4 = new Intern("Omar", 22, 100000);
emp1.showInformation();
emp4.showInformation();
console.log(emp2.extraSalary());

emp1.setsalary(30000);
console.log(emp1.getSalary());



//Question 2 

const schema = { name: "string", age: "number", isStudent: "boolean", address: { city: "string", zip: "number", }, }; const obj = { name: "John", age: 25, isStudent: true, address: { city: "New York", zip: 10001, }, };

function validateObject(object1,object2){
  for(let item in object1){
    
    if(object1.hasOwnProperty(item)){
        const requiredType=object2[item];
        const value=object1[item];

        if(!object2.hasOwnProperty(item)){
            return false;
        }


        if(requiredType=='object'&& typeof value=='object'&& !Array.isArray(value)
            && typeof value != Function){

                if(!validateObject(value,object2[item]))
                return false;
            }
        }
        else if(requiredType=='array'&&Array.isArray(value)){
            return false;
        }
        else if (expectedType === 'function' && typeof value !=Function) {
            return false;
        }
        else if (typeof requiredType === 'string' && typeof value !== requiredType) {
            return false;
        }




    }
    return true

}
console.log(validateObject(obj, schema)); 
