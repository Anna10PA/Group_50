'''4) შექმენით სია რომელშიც იქნება რენდომ რიცხვები მოთავსებული შემდეგ კი შექმენით მეორე სია რომელშიც გადაიტანთ პირველი სიიდან მხოლოდ ლუწ რიცხვებს
'''

list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
new_list = []

for i in list:
    if i % 2 == 0:
        new_list.append(i)
print(new_list)