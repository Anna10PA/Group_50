# day 21:
# 1) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი მომხმარებლის შემოტანილ რიცხვამდე დაბეჭდეთ ყველა ნატურალური რიცხვი 

num = int(input("Enter number: "))
if num > 0:
    for i in range(1, num, 1):
        print(i)
else:
    print("You need a natural number")