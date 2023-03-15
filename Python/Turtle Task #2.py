import turtle

# Ask user for input
length = int(input("Enter the length of the rectangle: "))
width = int(input("Enter the width of the rectangle: "))

# Draw rectangle
turt_rect = turtle.Turtle()
turt_rect.penup()
turt_rect.goto(0, 0)
turt_rect.pendown()
for i in range(2):
    turt_rect.forward(length)
    turt_rect.left(90)
    turt_rect.forward(width)
    turt_rect.left(90)

x = input("Press enter to stop...")