"""2) შექმენით სია სადაც იქნება 10 სახელი შემდეგ ამ სიიდან ამოშლით ყველა იმ სახელს რომელიც იწყება ა ასოზე და დაბეჭდეთ გაფილტრული სია"""

# 1st
list = ['Ana', 'Nini', 'Gio', 'Niko', 'Saba', 'Gia', 'Dachi', 'Avtadili', "BMW", 'KAWASAKI', "HONDA", "Shushaniki", 'Abo'] 

list_2 = []
for i in range(len(list)):
    if (list[i])[0] != 'A':
        list_2.append(list[i])
print(list_2)

# 2nd
list = ['Ana', 'Nini', 'Gio', 'Niko', 'Saba', 'Gia', 'Dachi', 'Avtadili', "BMW", 'KAWASAKI', "HONDA", "Shushaniki", 'Abo'] 

for i in range(len(list)-2):
    if list[i][0] == 'A':
        list.remove(list[i])
print(list)

# loop-ის გამო არ გამოვა -2 გარეშე. ანუ იმდენს ვაკლებთ რამდენი სიტყვაც იწყება ა-ზე. რადგან რეინჯი შეიცვლება. 
