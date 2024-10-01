"""3) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი დაითვალეთ მომხმარებლის შემოტანილ რიცხვამდე რიცხვების საშუალო არითმეტიკული
"""
num = int(input("Enter number: "))
sum = 0

if num>0:
    for i in range(0, num):
        sum = sum + i
    average = sum/num
    print(f"the sum is {sum} and the number average is {average}")

elif num<0:
    for i in range(0, num, -1):
        sum = sum + i
        average = sum/num
    print(f"the sum is {sum} and the number average is {average}")    

else:
    print(0)