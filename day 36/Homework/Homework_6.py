'''6. დაწერე ფუნქცია, რომელიც მიიღებს რიცხვების სიას და გამოიყვანს თითოეულს კვადრატში აყვანილს.'''

list_number = [10, 12, 33, 367, 1293, 983, 23, 2]

def square(list):
    for i in range(len(list)):
        print(list[i] ** 2)
square(list_number)