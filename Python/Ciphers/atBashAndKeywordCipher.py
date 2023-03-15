# What is the function of the first for loop which appends to cipherKey?

# What is the if statement (SELECTION) checking for, and what action does it
# take if it is true?

# Why is a nested loop being used in the second for loop?


alpha = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
cipherKey = []

plainText = input('Please enter the plaintext: ').upper()
cipherText = ""


for k in range(90, 64, -1):
    cipherKey.append(chr(k))


for i in range(0, len(plainText)):
    for x in range(0, 26):
        if plainText[i] == alpha[x]:
            cipherText += cipherKey[x]
            
print ("Using the atBash cipher, this is the cipher-text: " + cipherText)

# MAIN TASK - Add a menu system to this program, and allow the user to choose from two types of ciphers
# atBash and Keyword. Add to the program the algorithm which will encrypt a plainText using the Keyword
# cipgher and output that to the user

# STRETCH - Don't forget to stretch, sitting in front of a computer all day is not healthy. 
# Your muscles need movement