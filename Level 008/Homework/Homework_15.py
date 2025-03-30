'''შეამოწმე, არის თუ არა მომხმარებლის შემოტანილი ორი რიცხვი ერთმანეთზე მეტი და 10-ის ჯერადი. '''

number1 = int(input('Enter: '))
number2 = int(input('Enter: '))

print(number1 > number2 or number2 > number1 and number1 % 10 == 0 and number2 % 10 == 0)