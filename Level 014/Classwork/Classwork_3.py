'''     3) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი მომხარებლის შემოტანილ რიცხვამდე დაბეჭდეთ ყველა რიცხვის საშუალო არითმეტიკული'''

number = int(input("Enter number: "))
sum = 0
avarage = 0
for i in range(1, number + 1):
    sum = sum + i
    avarage = sum / i
print(avarage)
