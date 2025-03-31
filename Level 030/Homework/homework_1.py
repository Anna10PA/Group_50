'''   1) მომხმარებელს შეეკითხეთ ორი რიცხვი შემდეგ კი შექმენით ფუნქცია რომელსაც არგუმენტად გადასცემთ ამ ორ რიცხვს ხოლო ფუნქცია დააბრუნებს ამ ორი რიცხვის ჯამს, ასევე გააკეთე ასეთი 4 ფუნქცია სხვადასხვა მათემატიკური მოქმედებებისთვის, გამოიყენეთ პარამეტრები და არგუმენტად გადაეცით მომხარებლის შემოტანილი რიცხვები'''

user_num1 = int(input("Enter first: "))
user_num2 = int(input("Enter 2nd: "))

def sum(num1, num2):
    return num1 + num2
print(sum(user_num1, user_num2))

def division(num1, num2):
    return num1 / num2
print(division(user_num1, user_num2))

def subtraction(num1, num2):
    return num1 - num2
print(subtraction(user_num1, user_num2))

def multipication(num1, num2):
    return num1 * num2
print(multipication(user_num1, user_num2))