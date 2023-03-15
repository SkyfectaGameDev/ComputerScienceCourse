import turtle

# Drawing a Hexagon
turt_hex = turtle.Turtle()
turt_hex.penup()
turt_hex.goto(0, 0)
turt_hex.pendown()
for i in range(6):
    turt_hex.forward(50)
    turt_hex.left(60)

x = input("Press enter to stop...")