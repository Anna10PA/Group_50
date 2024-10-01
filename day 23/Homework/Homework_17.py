# 4) მომხმარებელს შეაყვანინეთ რიცხვი და განაგრძეთ კითხვა მანამ, სანამ არ შეიტანს დადებით რიცხვს.

num = int(input("Enter Number: "))
while num < 0:
    num = int(input("Enter Number: "))
print("GOOD")