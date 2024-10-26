'''5. დაწერე ფუნქცია, რომელიც აბრუნებს ორ რიცხვს შორის მინიმალურ მნიშვნელობას.'''

user_number_1 = int(input("Enter number: "))
user_number_2 = int(input("Enter number: "))

def min(number_1, number_2):
    if number_1 > number_2:
        return number_2
    elif number_2 > number_1:
        return number_1
    elif number_2 == number_1:
        return "numbers are the same"
    
print(min(user_number_1, user_number_2))
    