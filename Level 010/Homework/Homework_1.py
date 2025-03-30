'''level 10:
    1) შექმენით კალკულატორი, მომხმარებელს შეეკითხეთ ორი რიცხვი, შემდეგ შეეკითხეთ რა მოქმედების შესრულება სურს ამ ორ რიცხვზე და მისი პასუხიდან გამომდინარე შეასრულეთ მოქმედება და დაბეჭდეთ მაგალითად თუ მომხმარებელი შემოიტანს რიცხვებს 5 და 7 , და შემოიტანს მოქმედებას მაგალითად დამატებას თქვენ უნდა დაუბეჭდოთ 5 + 7 = 12'''

number1 = int(input("Enter number: "))
number2 = int(input("Enter number: "))
option = input("Enter operation: ")

if option == '+':
    print(number1 + number2)
elif option == '-':
    print(number1 - number2)
elif option == '*':
    print(number1 * number2)
elif option == '/':
    print(number1 / number2)
else:
    print('error')
