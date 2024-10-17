'''7) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს რიცხვს და დააბრუნებს True, თუ ის ლუწია  და False, თუ არა.
'''
def number():
    number = int(input("Enter number: "))
    if number % 2 == 0:
        print(True)
    else:
        print(False)
number()