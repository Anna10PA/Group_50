""" 7) შექმენით სია სადაც მოათავსებთ ხუთ სხვადასხვა სახელს შემდეგ კი დაბეჭდეთ ამ სიაში თითოეული ელემენტის პირველი ასო მხოლოდ გამოიყენეთ for loop"""

name = ['nikoloz', 'saba', 'nitsa', 'tata', 'elene']

# 1
for i in range(len(name)):
    print((name[i])[0])

# 2
for i in name:
    print(i[0])