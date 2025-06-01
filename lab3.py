


# 2-Given two points represented as x1, y1, x2, y2, r the (float)return (float) distance
# between
# them considering the following distance equation.

import math

def distance_between_points(x1: float, y1: float, x2: float, y2: float) -> float:
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
distance = distance_between_points(1.0, 2.0, 4.0, 6.0)
print(f"Distance = {distance}")
# 3-Create a Vehicle class without any variables and methods

class Vehicle:
    pass

# 4-Create a Vehicle class with max_speed and mileage instance attributes

class Vehicle:

    def __init__(self,maxSpeed,mileage):
     self.maxSpeed=maxSpeed
     self.mileage=mileage

# 5-Write a Python program to reverse a string word by word.

def reverse_words(text):
    words=text.split()
    reversed_words = words[::-1]
    return ' '.join(reversed_words)
print(reverse_words("hello world"))


# Write a Python class which has two methods get_String and print_String. get_String
# accept a string from the user and print_String print the string in upper case

class StringOperations:
    def __init__(self):
        self.string = ""
    def get_String(self):
        self.string=input("please enter a string : ")
    def print_String(self):
        print(self.string.upper())

obj = StringOperations()
obj.get_String()
obj.print_String()
# 7-Write a Python class named Circle constructed by a radius and two methods which will
# compute the area and the perimeter of a circle.
import math

class Circle:
    radius=0.0
    def __init__(self,rad):
        self.radius=rad
    def area_calculation(self):
        return math.pi*self.radius*self.radius
    def perimeter_calculation(self):
        return 2*math.pi*self.radius
obj= Circle(3.0)
print("Area : "+obj.area_calculation())
print("Perimeter:"+obj.perimeter_calculation())


