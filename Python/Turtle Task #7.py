import turtle

# Setup
turt_car = turtle.Turtle()
turt_car.penup()
turt_car.goto(-100, -200)
turt_car.pendown()

# -------------------- Body --------------------
# Rear
turt_car.forward(200)
turt_car.left(80)

# Right side
turt_car.forward(50)
turt_car.left(10)
turt_car.forward(300)
turt_car.left(10)
turt_car.forward(50)

# Front
turt_car.left(20)
turt_car.forward(50)
turt_car.left(60)
turt_car.forward(150)
turt_car.left(60)
turt_car.forward(50)
turt_car.left(20)
turt_car.forward(50)

# Left Side
turt_car.left(10)
turt_car.forward(300)
turt_car.left(10)
turt_car.forward(50)
turt_car.left(80)

# -------------------- Windows --------------------
# Rear Window
turt_car.penup()
turt_car.goto(-80, -180)
turt_car.pendown()
turt_car.pencolor("black")
turt_car.fillcolor("cyan")

turt_car.begin_fill()
turt_car.forward(160)
turt_car.left(80)
turt_car.forward(50)
turt_car.left(100)
turt_car.forward(180)
turt_car.left(100)
turt_car.forward(50)
turt_car.left(80)
turt_car.end_fill()

#Front Window
turt_car.penup()
turt_car.goto(-90, 70)
turt_car.pendown()

turt_car.begin_fill()
turt_car.forward(180)
turt_car.left(90)
turt_car.forward(50)
turt_car.left(15)
turt_car.forward(50)
turt_car.left(75)
turt_car.forward(155)
turt_car.left(75)
turt_car.forward(50)
turt_car.left(15)
turt_car.forward(50)
turt_car.end_fill()

x = input("Press enter to stop...")