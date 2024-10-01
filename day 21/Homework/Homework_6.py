"""4) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი მომხმარებლის შემოტანილ რიცხვამდე შეამოწმებ რიცხვი ლუწია თუ კენტი დაბეჭდეთ რიცხვები და თან გვერდზე მიუწერეთ ლუწია თუ კენტი
"""
num = int(input("Enter Number: "))
if num %2 == 0:
    print(f"the number what you choise is {num} and it's even")
else:
    print(f"the number what you choise is {num} and it's odd")

# num > 0
if num>=0:
    for i in range(0, num, 2):
        print(f"{str(i)} is a even")
    for i in range(1, num, 2):
        print(f"{str(i)} is a odd")    
# num < 0
elif num<0:
    for i in range(0, num, -2):
        print(f"{str(i)} is a even")
    for i in range(1, num, -2):
        print(f"{str(i)} is a odd")  