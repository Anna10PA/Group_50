#  2) შექმენით ფუნქცია რომელიც მომხმარებელს ეკითხება რიცხვს შემდეგ კი დაბეჭდავს ეს რიცხვი ლუწია თუ კენტი

def number():
    number = int(input("enter number: "))
    if number % 2 == 0:
        print('ლუწია')
    else:
        print('კენტია')
number()
