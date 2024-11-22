'''3) შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ლუწია ეს რიცხვი თუ კენტი'''

user_number = int(input("Enter number: "))

def odd_or_even(number):
    if number % 2 == 0:
        return 'even'
    else:
        return 'odd'
print(odd_or_even(user_number))