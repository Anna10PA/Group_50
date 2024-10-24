'''8. დაწერე ფუნქცია, რომელიც იღებს რიცხვს და ამოწმებს, არის თუ არა ის მარტივი რიცხვი.'''

user_number = int(input("Enter number: "))

def check(num):
    if num >= 2:
        for i in range(2, num):
            if num % i == 0:
                return f"რიცხვი {num} არ არის მარტივი"
        return f'რიცხვი {num} არის მარტივი'
print(check(user_number))
