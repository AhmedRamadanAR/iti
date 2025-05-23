# # //Given a list of numbers, create a function that returns a list where all similar adjacent
# # elements have been reduced to a single element, so [1,2,3.3] returns [1,2,3]
# # Note:
# # You may create a new list or modify the passed in list.
#
#
def removeSimilarAdjacentElements(list):
    newList=[list[0]]
    for i in range (1,len(list)):
        if list[i]!=list[i - 1]:
            newList.append(list[i])

    return newList
#
print(removeSimilarAdjacentElements([1, 2, 3, 3,4,5,3,4 ,4]))
#
# Consider dividing a string into two halves
# Case1:
# The length is even, the front and back halves are the same length.
# Case2:
# The length is odd, we’ll say that the extra char goes in the front half.
# E.g. ‘abced’, the front half is ‘abc’, the back half’de.
# Given 2 strings, a and b, return a string of the form:
# (a-front + b-front) + (a-back +b-back)
def splitText(text):
    mid = (len(text) + 1) // 2
    front=text[:mid]
    back=text[mid:]
    return front,back
def mixText(a,b):
    a_front,a_back=splitText(a)
    b_front,b_back=splitText(b)
    return a_front+b_front , a_back+b_back
print(mixText("Ahmedd","Ramadan"))

#
# Write a Python function that takes a sequence of numbers and determines
# wther all the numbers are different from each other.
# E.X. [1,5,7,9] -> True
# [2,4,5,5,7,9] -> False

def checkDuplicate(list):
    for i in range (0,len(list)-1) :
        for j in range (len(list)-1,i,-1):
            if list[i]==list[j]:
                 return False
    return True
print(checkDuplicate([3,2,1,3,1,4,7]))
print(checkDuplicate([3,2,1,4,7]))
#

# 4- Given unordered list, sort it using algorithm bubble sort
# ( read about bubble sort and try to implement it)

def bubble_sort(list):
    n=len(list)
    for i in range (n-1):
        for j in range(n-1-i):
            if list[j]>list[j+1]:
                list[j],list[j+1]=list[j+1],list[j]
list=[4,1,9,3,6,20,0]
bubble_sort(list)
print (list)

#guess game

import random

def play_game():
    MAX_TRIES = 10
    RANGE = 100

    while True:
        number = random.randint(1, RANGE)
        guesses = set()
        tries_left = MAX_TRIES

        print("\nnumber between 1 and 100.")
        print(f"You have {MAX_TRIES} tries to guess it.")

        while tries_left > 0:
            try:
                guess = int(input(f"\nYour guess ({tries_left} left): "))
            except ValueError:
                print("Please enter a valid number.")
                continue

            if not 1 <= guess <= RANGE:
                print("Out of range. Guess between 1 and 100.")
                continue

            if guess in guesses:
                print("You already guessed that. Try a different number.")
                continue

            guesses.add(guess)

            if guess == number:
                print("Correct! You win!")
                break
            elif guess < number:
                print("Too low.")
            else:
                print("Too high.")

            tries_left -= 1

        if guess != number:
            print(f"\nOut of tries! The number was {number}.")

        again = input("Play again? (yes/no): ").strip().lower()
        if again not in ("yes", "y"):
            print("Thanks for playing!")
            break

play_game()
