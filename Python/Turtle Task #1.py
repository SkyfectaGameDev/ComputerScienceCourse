import turtle

# Set up turtle screen
screen = turtle.Screen()
screen.setup(500, 500)
screen.title("Iteration Example")

# Square
turt_square = turtle.Turtle()
turt_square.penup()
turt_square.goto(-100, 0)
turt_square.pendown()
for i in range(4):
    turt_square.forward(50)
    turt_square.left(90)

# Triangle
turt_tri = turtle.Turtle()
turt_tri.penup()
turt_tri.goto(0, 0)
turt_tri.pendown()
for i in range(3):
    turt_tri.forward(50)
    turt_tri.left(120)

# Circle
turt_circ = turtle.Turtle()
turt_circ.penup()
turt_circ.goto(100, 0)
turt_circ.pendown()
for i in range(36):
    turt_circ.forward(5)
    turt_circ.left(10)

x = input("Press any key to stop...")