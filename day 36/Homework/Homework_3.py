'''3.   დაწერე ფუნქცია, რომელიც ამოწმებს, არის თუ არა რიცხვი ნულზე დიდი.'''

user_number = int(input("Enter number: "))

def check_number(answer):   
    return answer > 0

print(check_number(user_number))
