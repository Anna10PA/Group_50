'''5) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი ფუნქციამ უნდა დაგვიბრუნოს მისი საპირისპირო რიცხვი (edited)'''

user_number = int(input("Enter number: "))

def opposite(number):
    return number * -1
print(opposite(user_number))