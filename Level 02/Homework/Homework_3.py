'''    3) პითონში turtle ის გამოყენებით ააგეთ სასახლე რაც შეიძლება დახვეწილი და ლამაზი ვნახოთ როგორი გამოგივათ
'''

from turtle import *
# drawing square
shape("turtle")
speed(1)
width(4)
color ("green")
begin_fill()

forward(350)
left (90)

speed (3)
forward(200)
left (90)

speed(1)
forward(350)
left (90)

speed (3)
forward(200)
left (90)
end_fill()
#drawing door

speed(3)
forward(100)
begin_fill()
color("blue")
left(90)
forward(100)

right(90)
forward(50)
right(90)
forward(100)
end_fill()

#drawing roof, collor red, width 
shape("square")
penup()
goto(350, 200)
pendown()

color("red") 
begin_fill()
left(90)
forward(45)

left(150)
forward (150)

left(30)
forward(180)

left(30)
forward(150)

left(150)
forward(45)
end_fill()

#finish roof

#start window
color("black")
speed(2)
penup()
goto(200, 100)
pendown()
forward(100)
left(90)
forward(50)
left(90)
forward(100)
left(90)
forward(50)
left(90)
forward(50)
left(90)
forward(50)
right(90)
forward(50)
right(90)
forward(25)
right(90)
forward(100)
#finish 1stvwindow

#2nd window 
penup()
goto(60, 100)
pendown()
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(25)
right(90)
forward(50)
right(90)
forward(25)
right(90)
forward(25)
right(90)
forward(50)

exitonclick()