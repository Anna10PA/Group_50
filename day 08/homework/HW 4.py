"""  4) აქამდე ნასწავლი მასალის გამოყენებით ივარჯიშეთ ძალიან ბევრი და მოიფიქრეთ რაიმე პროგრამა რომელსაც გააკეთებთ """ 
# ცვლადები + input/output + from turtle import*

from turtle import*

# bg_color
bgcolor("grey")

# Pen
pen_color=input("Enter pencolor: ")
pen_speed=int(input("enter pen speed: "))
width=7
pen(fillcolor=pen_color, speed=pen_speed)

# figure

figure=input("circle, triangle, square: ")
if figure == "circle":
    begin_fill()
    circle_R=input("Enter circle R: ")
    circle(int(circle_R))
    end_fill()

elif figure == "triangle": 
    begin_fill()
    triangle_fd=input("Enter triangle forward: ")
    for i in range(3):
        forward(int(triangle_fd))
        left(120)
    end_fill()

elif figure == "square":
    begin_fill()
    square_fd=input("Enter square forward: ")
    for i in range(4):
        forward(int(square_fd))
        left(90)
    end_fill()

else: 
    print("ERROR")

exitonclick()