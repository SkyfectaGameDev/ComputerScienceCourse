# Why is plainText a string and shiftAMount an integer?

# Why is cipherText declared as an empty string?

# How many times doe the for loop iterate?

# Describe the function of this line cipherText += chr(ord(plainText[c]) + shiftAmount)

plainText = input("Please enter the plaintext: ").upper()
shiftAmount = int(input("Please enter the shift amount: "))
cipherText = ""

for c in range(0, len(plainText)):
    cipherText += chr(ord(plainText[c]) + shiftAmount)
    
print (cipherText)

# MAIN TASK - Add to this program a method to also decrypt
# Add a menu system from which the user can choose which action they wish to take
# The program should keep requesting the user to choose from the menu until 
# they have made the correct choice: 1) Encrypt     2) Decrypt      3) Quit

# STRETCH - Modify the code so that if one of the letters in the plainText is Z
# and the shiftAmount is 3, then that character will shift to C instead of ]