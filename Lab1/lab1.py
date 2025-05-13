
#Write a Python program which accepts the user's first and last name and print them in
#reverse order with a space between them.

firstName=input("your first name : ")
lastName=input("your last name : ")
print(lastName+" "+firstName)




#  Write a Python program that accepts an integer (n) and computes the value of
# n+nn+nnn.
# Sample value of n is 5
# Expected Result : 615

number= str(input("Enter a number"))
print(int(number) + int(number+number)+int(number+number+number))

# 3- Write a Python program to print the following here document.
# Sample string :
# a string that you "don't" have to escape
# This
# is a ....... multi-line
# heredoc string --------> example

print("""a string that you "don't" have to escape \n This \n is a .......... multi-line \n heredoc string --------> example""")


# 4- Write a Python program to get the volume
import math
radius = int(input("Enter radius of sphere"))
volume = (4/3) * math.pi * (radius ** 3)

print(f"Volume of the sphere: {volume}")

# 5- Write a Python program that will accept the base and height of a triangle and compute
# the area.



base = float(input("Enter radius of sphere"))
height = float(input("Enter radius of sphere"))

area = 1/2 * base *height

print(f"Area of the triangle: {area}")

# Write a Python program to construct the following pattern, using a nested for loop.
#     Search about method
# end=””
# *
# * *
# * * *
# * * * *
# * * * * *
# * * * *
# * * *
# * *
# *

for i in range(1, 6):
    print('* ' * i)

for i in range(4,0,-1):
    print('* ' * i)
# 7- Write a Python program that accepts a word from the user and reverse it.

text=input("Enter a word : ")
reversedText= ""
for char in text:
    reversedText=char+reversedText
print(reversedText)

#                         #word
    #reverse text     w     ow  row   drow
    #char             w     o   r    d


# 8- Write a Python program that prints all the numbers from 0 to 6 except 3 and 6.
#
for i in range(0,6):
    if(i !=3 and i !=6):
             print(i)

# Write a Python program to get the Fibonacci series between 0 to 50
# Note : The Fibonacci Sequence is the series of numbers :
# 0, 1, 1, 2, 3, 5, 8, 13, 21, ....
# Every next number is found by adding up the two numbers before it.
# Expected Output : 1 1 2 3 5 8 13 21 34
num1,num2=0,1
while(num1 <=50):
   print( str(num1) +" ")
   num1=num2
   num2=num1+num2
#
# Write a Python program that accepts a string and calculate the number of digits and
# letters.

text= str(input())
digits , letters=0,0
for char in text:
    if(char.isdigit()):
        digits+=1
    if(char.isalpha()):
        letters+=1
print(f"digits : {digits} and letters : {letters}")