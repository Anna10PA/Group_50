""" 6) შექმენით სია სადაც მოათავსებთ ხუთ სხვადასხვა სახელს შემდეგ კი მიწვდით თითოეულ ელემენტს(სახელს) და დაბეჭდეთ თითოეულში ასოების რაოდენობა, გამოგადგებათ for loop და len ფუნქცია 
"""

name = ['nini', 'giorgi', 'tata', 'elene', 'nikoloz' ]

# 1
for i in range(len(name)):
    print(len(name[i]))

# 2
for i in name:
    print(len(i))