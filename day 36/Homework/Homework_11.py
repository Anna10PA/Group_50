'''11. დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და ამოწმებს, უდრის თუ არა ისინი ერთმანეთს.
'''
#  1st
user_number_1 = int(input("Enter number: "))
user_number_2 = int(input("Enter same number: "))

def check(number_1, number_2):
    return number_1 == number_2

print(check(user_number_1, user_number_2))

#   2nd
def check(number_1, number_2):
    if number_1 == number_2:
        return 'they are same number'
    else:
        return "they aren't same number"
print(check(user_number_1, user_number_2))
