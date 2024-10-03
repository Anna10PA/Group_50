""" 3) შექმენით თავდაპირველად ცარიელი სია მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი 1-დან ამ რიცხვამდე დაამატეთ ყველა რიცხვი სიაში გამოიყენეთ for loop და append """

list = []
num = int(input("Enter number: ")) + 1

for i in range(1, num, 1):
    list.append(i)
print(list)