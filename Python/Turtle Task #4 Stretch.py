import turtle

# Drawing a Square
def draw():
    turt_poly = turtle.Turtle()
    x = 0
    y = 200
    for i in range(3):
        turt_poly.penup()
        turt_poly.goto(x, y)
        turt_poly.pendown()

        # Ask user for input
        sides = int(input("Enter the number of sides for the polygon: "))

        # Math used to work out angle between sides
        angle = 360/sides

        for i in range(sides):
            turt_poly.forward(50)
            turt_poly.left(angle)
        # Update x and y positions for next square
        x = setx(x)
        y = sety(y)

def setx(x):
    x += 0
    return x
def sety(y):
    y -= 200
    return y

draw()
x = input("Press enter to stop...")