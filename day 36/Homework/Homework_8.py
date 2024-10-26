'''8. დაწერე ფუნქცია, რომელიც იღებს რიცხვს და ამოწმებს, არის თუ არა ის მარტივი რიცხვი.'''

user_number = int(input("Enter number: "))

def check(num):
    if num >= 2:
        for i in range(2, num):
            if num % i == 0:
                return "რიცხვი "+str(num)+" არ არის მარტივი"
        return 'რიცხვი' +str(num)+' არის მარტივი'
print(check(user_number))
