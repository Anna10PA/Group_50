'''3) მომხმარებელს შემოატანინეთ ორი რიცხვი ხოლო ამის შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვებს შორის ჯამი და ნამრავლი.'''

num1 = int(input("Enter 1st num: "))
num2 = int(input('Enter 2nd num: '))

sum = 0
num = 1
for i in range(num1, num2):
    sum = sum + i
    num = num * i
print(num, sum)
