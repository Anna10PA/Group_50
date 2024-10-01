# 4) გაიმეორეთ გავლილი მასალა რაც იცით
#draw a circle, tringle or square

from turtle import*
bgcolor("light blue")
width(3)
x=input("what do you want to draw: triangle, circle or square: ")
if x=="circle":
    begin_fill()
    fillcolor("grey")
    circle(150)
    end_fill()

elif x=="triangle":
    begin_fill()
    fillcolor("crimson")
    for i in range(3):
        forward(300)
        left(120)
    end_fill()    

elif x=="square":
    penup()
    goto(-200, 200)
    pendown()
    begin_fill()
    fillcolor("gold4")
    for i in range(4):
        forward(300)
        right(90)
    end_fill()

else:
    print("ERROR")
        
exitonclick()
    