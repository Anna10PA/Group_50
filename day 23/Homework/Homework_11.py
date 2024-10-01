# 3) მომხმარებელს შემოატანინეთ ორი რიცხვი ხოლო ამის შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვებს შორის ჯამი და ნამრავლი.

num_1 = int(input("Enter 1st number: "))
num_2 = int(input("Enter 2nd number: "))
sum = 0

#           num_1 and num_2 > 0
if num_1 > 0 and num_2 > 0:
    for i in range(num_1+1):
        for a in range(num_2+1):
            sum = i + a
            print(f"{i} + {a} = {sum}")

    multipication = 0
    for i in range(num_1+1):
        for a in range(num_2+1):
            multipication = i * a
            print(f"{i} * {a} = {multipication}")

#           if num_1 And num_2 < 0
elif num_1 < 0 and num_2 < 0:
    for i in range(0, num_1-1, -1):
        for a in range(0, num_2-1, -1):
            sum = i + a
            print(f"{i} + {a} = {sum}")

    multipication = 0
    for i in range(0, num_1-1, -1):
        for a in range(0, num_2-1, -1):
            multipication = i * a
            print(f"{i} * {a} = {multipication}")
