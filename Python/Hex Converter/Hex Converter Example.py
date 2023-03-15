#!/usr/bin/env python
# coding: utf-8

# In[ ]:


# Why is the input a string?

hexNum = input("Enter a Hexadecimal number: ")

hexDigits = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
hexValues = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]

sum = 0

# What is the purpose of the variable sum?

# Why is index 0 being multiplied with 16?

# How many times does the for loop iterate for and why?

# Why is there a need to use arrays that hold the digits and the values?

for x in range(0,16):
    if hexNum[1] == hexDigits[x]:
        sum = sum + hexValues[x]
    if hexNum[0] == hexDigits[x]:
        sum = sum + (hexValues[x] * 16)

# Why is str() in use for the concatenation?

print ("The decimal value of " + str(hexNum) + " is " + str(sum))

decNum = int(input("Enter dec: "))
decToHexNum = ""

while (decNum > 0):
    remainder = decNum % 16
    decToHexNum = hexDigits[remainder] + decToHexNum
    decNum = decNum // 16
    
print (decToHexNum)


# Main Task - Write a program which converts Dec to Hex below this line 
# print ("The decimal value of " + str(hexNum) + " is " + str(sum)) 
# If the number is 15 or less, your code must still output a 2 digit Hex number
# e.g. if the number is 15, the output must be 0F
# 

# L2 - Convert this program so that the user is given a choice through a menu to either 
# convert from Hex to Dec, Dec to Hex, Quit
# If the user inputs a value which is not on the menu, it should request the user to choose again (While loop)
# (If) the user has made the right choice then it should prompt the user to input the number which is to be converted
# 

# L3 - Add to the program a method to convert to and from Binary as well
# 

# L4 - Add to your program a method which allows it to write to a csv file all of the conversions a user does
# until the quit the program, as well as output to the scree
# The csv should only consist of 3 columns
# conversion_type, input, conversion
# Bin 2 Hex, 10000001, 81
# Hex to Dec, A5, 165
# ...
#

