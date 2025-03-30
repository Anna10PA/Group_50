'''შეამოწმე მომხმარებლის შემოტანილი რიცხვი თუ არის 5-ის ან 10-ის ჯერადი. '''

number = int(input("Enter number: "))
print(number % 5 == 0  or  number % 10 == 0)