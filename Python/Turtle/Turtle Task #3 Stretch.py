import turtle

# Ask user for input
sides = int(input("Enter the number of sides for the polygon: "))
length = int(input("Enter the length of the sides: "))

# Math used to work out angle between sides
angle = 360/sides

# Drawing the polygon
turt_poly = turtle.Turtle()
turt_poly.penup()
turt_poly.goto(0, 0)
turt_poly.pendown()
for i in range(sides):
    turt_poly.forward(50)
    turt_poly.left(angle)

x = input("Press enter to stop...")