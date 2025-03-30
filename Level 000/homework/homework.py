# house 0 lesson

# from turtle import * - კუს ბიბლიოთეკის იმპორტირება კანვის გასახსნელად 
# Shape() - კალმის ფიგურა ("")-იწერება ფიგურა (შეზღუდული რაოდენობით არის)
# speed() - კალმის სიჩქარე ()-ში იწერება ბრჭყალების გარეშე (int)
# width() - სისქე ()-ში იწერება ბრჭყალების გარეშე
# color() - კალმის ფერი ("")-ში იწერება
# begin_fill() - გაფერადების დაწყება
# end_fill() - გაფერადების დასრულება
# left() - მარცხნივ რამდენი გრადუსით უნდა გადაიხაროს ()-ში იწერება ბრჭყალების გარეშე
# right() - მარჯვნივ რამდენი გრადუსით უნდა გადაიხაროს ()-ში იწერება ბრჭყალების გარეშე
# forward() - წინ რამდენი px უნდა წავიდეს ()-ში იწერება ბრჭყალების გარეშე (int)
# pen_up() - კალმის აღება
# goto() - ბრჩხილებში კოორდინატები იწერება სადაც უნდა გადაადგილდეს კალამი 
# pen_down() - კალმის დადება
# exitonclick() - დაკლიკებისას კანვა გაითიშება

from turtle import *
# drawing square
# shape('circle')

shape("turtle")
speed(100)
width(1) 
color ("pink")
begin_fill() # გაფერადების დაწყება

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
end_fill() # გაფერადების დამთავრება
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