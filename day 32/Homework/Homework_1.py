"""  1) შექმენით რიცხვებით სავსე სია, შემდეგ დაწერეთ კოდი რომელიც დაბეჭდავს ამ სიიდან ყველაზე უდიდეს რიცხვს გამოგადგებათ for loop ი კარგად დაფიქრდით და გაიაზრეთ"""

list = [1, 200, 3.1, 4, 5, 0, 15257, 16, -12, -25.9]

# max 
max = list[0]
for i in range(len(list)):
    if max < list[i]:
        max = list[i]
print("max:"+str(max))

# min
min = list[0]
for i in range(len(list)):
    if min > list[i]:
        min = list[i]
print("min:"+str(min))
