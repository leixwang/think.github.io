import turtle as t

t.penup()
t.goto(0,-200)
t.pendown()
t.color('red')
t.begin_fill()
t.circle(200)
t.end_fill()

t.penup()
t.goto(0,-180)
t.pendown()
t.color('white')
t.begin_fill()
t.circle(180)
t.end_fill()

t.penup()
t.goto(0,-150)
t.pendown()
t.color('red')
t.begin_fill()
t.circle(150)
t.end_fill()

t.penup()
t.goto(0,-125)
t.pendown()
t.color('blue')
t.begin_fill()
t.circle(125)
t.end_fill()

t.penup()
t.goto(-100,30)
t.pendown()
t.color('white')
t.begin_fill()
for i in range(5):
    t.forward(200)
    t.right(144)
    
t.end_fill()
t.hideturtle()
t.done()