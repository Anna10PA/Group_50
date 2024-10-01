"""2) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი დაითვალეთ ამ რიცხვამდე ყველა ნატურალური რიცხვის ჯამი
"""
# enter number
num = int(input("number: "))

# 
sum = 0
if num>0:
    for i in range(0, num):
        sum = sum + i
    # sum
    print(f"The sum is {sum}")
else:
    print("You need more then 0")
