import turtle

# Drawing a Square
def draw():
    turt_square = turtle.Turtle()
    x = 0
    y = 0
    for i in range(3):
        turt_square.penup()
        turt_square.goto(x, y)
        turt_square.pendown()
        for i in range(4):
            turt_square.forward(50)
            turt_square.left(90)        
        x = setx(x)
        y = sety(y)

def setx(x):
    x += 100
    return x
def sety(y):
    y -= 100
    return y

draw()

x = input("Press enter to stop...")