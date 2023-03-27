
loopCount = 0

decNum      = int(input("Number: "))
decToHexNum = ""
hexDigits   = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
hexValues   = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

while decNum > 0:
    loopCount += 1
    print("Loop: ", loopCount)
    print("Dec Number: ", decNum)

    remainder = decNum % 16
    decToHexNum = hexDigits[remainder] + decToHexNum
    decNum = decNum // 16

    print("Remainder: ", remainder)
    print("Hex Number: ", decToHexNum)
    print()