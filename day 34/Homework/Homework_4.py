'''4) დაწერე ფუნქცია, რომელიც input()-ით იღებს ორ რიცხვს და ბეჭდავს, რომელია დიდი.
'''
def max():
    num_1 = int(input("Enter num_1: "))
    num_2 = int(input("Enter num_2: "))
    if num_1 > num_2 :
        print(str(num_1) + ' > ' + str(num_2) + ' დიდი რიცხვია: '+str(num_1))
    elif num_1 < num_2:
        print(str(num_2) + ' > ' + str(num_1) + ' დიდი რიცხვია: '+str(num_2))
    elif num_1 == num_2:
        print(str(num_1) + ' = ' + str(num_2) + ' ტოლებია')
max()