# 2) მომხმარებელს შემოატანინეთ რიცხვი და შემდეგ for loop - ის გამოყენებით გამოიტანეთ ამ რიცხვამდე ყველა რიცხვის ჯამი(მაგალითად თუ შეიყვანს 10ს გამოიტანეთ 10მდე ყველა რიცხვის ჯამი მაგალითად).

num = int(input("Enter Number: "))
sum = 0
operation_number = 0

for n in range (0, num+1):
    for i in range(0, num+1):
        operation_number = operation_number + 1
        sum = i + n 
        print(f"{str(operation_number)}.  {str(i)} + {str(n)} = {sum}")