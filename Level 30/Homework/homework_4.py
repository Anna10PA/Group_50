'''4) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ეს რიცხვი დადებითია თუ უარყოფითი'''

user_number = int(input("Enter number: "))

def positive_or_negative(number):
    if number >= 0:
        return 'possitive'
    else:
        return 'negative'
print(positive_or_negative(user_number))