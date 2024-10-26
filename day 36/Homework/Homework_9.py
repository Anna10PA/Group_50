'''9. დაწერე ფუნქცია, რომელიც იღებს რიცხვს და აბრუნებს მის კვადრატს.'''

user_number = int(input("Enter number: "))

def square(number):
    return number ** 2

print(square(user_number))