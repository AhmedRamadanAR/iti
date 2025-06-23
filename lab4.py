# 1- Define a class attribute”color” with a default value white. I.e., Every Vehicle should be


class Vehicle:
    color = 'white'
    def __init__(self, name, max_speed, mileage):
        self.name = name
        self.max_speed = max_speed
        self.mileage = mileage

class Bus(Vehicle):
    pass

class Car(Vehicle):
    pass

bus = Bus("bus", 80, 12)
car = Car("car", 80, 15)
print(bus.color)
print(car.color)

# 2-Create a Bus child class that inherits from the Vehicle class. The default fare charge of
# any vehicle is seating capacity * 100. If Vehicle is Bus instance, we need to add an extra
# 10% on full fare as a maintenance charge. So total fare for bus instance will become the
# final amount = total fare + 10% of the total fare.

class Vehicle:
    def __init__(self, name, mileage, capacity):
        self.name = name
        self.mileage = mileage
        self.capacity = capacity

    def fare(self):
        return self.capacity * 100

class Bus(Vehicle):
    def fare(self):
        base_fare = super().fare()
        return base_fare + (0.1 * base_fare)

School_bus = Bus("School Volvo", 12, 50)
print("Total Bus fare is:", School_bus.fare())

# 3- Determine if School_bus is also an instance of the Vehicle class

class Vehicle:
    def __init__(self, name, mileage, capacity):
        self.name = name
        self.mileage = mileage
        self.capacity = capacity

class Bus(Vehicle):
    pass

School_bus = Bus("School Volvo", 12, 50)
print(isinstance(School_bus, Vehicle))


# 4-Define a class named Rectangle which can be constructed by a length and width. The
# Rectangle class has a method which can compute the area.

class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

r = Rectangle(5, 3)
print("Area:", r.area())


# 5- Define a class which has at least two methods:
#     getString: to get a string from console input
# printString: to print the string in upper case.

class StringProcessor:
    def getString(self):
        self.s = input("Enter a string: ")

    def printString(self):
        print(self.s.upper())

sp = StringProcessor()
sp.getString()
sp.printString()

# 6-Define a class Person and its two child classes: Male and Female. All classes have a
# method "getGender" which can print "Male" for Male class and "Female" for Female
# class.

class Person:
    def getGender(self):
        return "Not specified"

class Male(Person):
    def getGender(self):
        return "Male"

class Female(Person):
    def getGender(self):
        return "Female"

m = Male()
f = Female()
print(m.getGender())
print(f.getGender())

# 7-Write a Python class to find validity of a string of parentheses, '(', ')', '{', '}', '[' and '].
# These brackets must be close in the correct order, for example "()" and "()[]{}" are valid
# but "[)", "({[)]" and "{{{" are invalid

class ParenthesesValidator:
    def isValid(self, text):
        stack = []
        parentheses = {')': '(', '}': '{', ']': '['}
        for char in text:
            if char in parentheses.values():
                stack.append(char)
            elif char in parentheses:
                if not stack or stack.pop() != parentheses[char]:
                    return False
        return not stack

validator = ParenthesesValidator()
print(validator.isValid("()[]{}"))
print(validator.isValid("[)"))
print(validator.isValid("({[)]"))
