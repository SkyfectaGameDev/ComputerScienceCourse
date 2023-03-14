#!/usr/bin/env python
# coding: utf-8

# In[ ]:


# # Setting up a variable
# x = 10
# y = x + 20
# print (x)
# print (y)
# # x = "Ben"
# # print (x)
# print (y)


# # Setting up an array
# a = [ 1, 2, 3]

# print(a[1])

# # if statement
# x = 5
# y = 10
# if x < y:
#     print ("It is smaller")
#     if x == 5:
#         print ("KASJFGKJFSDGAKIAFSD")
# else:
#     print ("It is larger")

# for loops
# for k in range(10, -3, -1):
#     if k % 2 != 0:
#         print (k)


# while loops
# x = 0
# while x < 3:
#     print (x)
#     x += 1 







# menu = True

# while menu:
#     print ("**** MENU ****")
#     print ("1) Chicken")
#     print ("2) Halloumi")
#     print ("3) Tree")
#     menuChoice = int(input("Please make your choice: "))
#     if menuChoice >= 1 and menuChoice <= 3:
#         menu = False
#     else:
#         print("You did not select from the menu, please try again")







# function
# def addTwoNumbers(x, y):
#     if x > y:
#         return x + y
#     else:
#         return x - y

# print (addTwoNumbers(5, 10))
# f = addTwoNumbers(90, 10)
# print (f)
# f = f + addTwoNumbers(200, 300)
# print (f)



# # reading a file
# import csv

# sum = 0

# with open("readingTest.csv", "r") as csv_file:
#     csv_read = csv.reader(csv_file)
#     next(csv_read, None)
#     for row in csv_read:
#         print (row[0])
#         sum += int(row[1])

# print (sum)

# with open("readingTest.csv", "a", newline="") as csv_file:
#     csv_write = csv.writer(csv_file)
#     csv_write.writerow(["Ben","39"])

# python turtle
import turtle
turt = turtle.Turtle()

for t in range(0,4):
    turt.forward(100)
    turt.left(90)


x = input("Press any key to stop...")