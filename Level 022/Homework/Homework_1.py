'''1) შექმინთ 2 სია  , პირველი სია ინქება ცარიელი  ხოლო მეროე სია ინქება სახელებით სავსე მინიმუმ 5 , თქვენი დავალებაა ამ სიიდან  ჩაამოტომ მეორე სიაში სახელელბი რომელიც  4 სიმბოლოზე ნაკლებია'''

name = ['Ana', "Elene", 'Manana', 'Nini', 'Gio', "niko", 'saba', 'nitsa']
new_list = []

for nam in name:
    if len(nam) <=4 :
        new_list.append(nam)
print(new_list)