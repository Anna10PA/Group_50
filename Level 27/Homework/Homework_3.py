'''3) მომხმარებელს შემოატანინეთ ორი რიცხვი ხოლო ამის შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვებს შორის ჯამი და ნამრავლი.'''

num1 = int(input("Enter 1st num: "))
num2 = int(input('Enter 2nd num: '))

for num_1 in range(num1 + 1):
    for num_2 in range(num2 + 2):
        print(str(num_1) + ' + ' + str(num_2) + ' = ' + str(num_1 + num_2))

for num_1 in range(num1 + 1):
    for num_2 in range(num2 + 2):
        print(str(num_1) + ' * ' + str(num_2) + ' = ' + str(num_1 * num_2))