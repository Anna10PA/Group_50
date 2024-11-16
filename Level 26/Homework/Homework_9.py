'''2)  შექმენით პროგრამა რომელიც დაითვლის სიაში რამდენჯერ მეორდება თქვენი სახელი არ გამოიყენოთ count ფუნქცია '''

list = ['Ana', 'kato', 'Elene', 'Tata', 'Ana']
count = 0
for name in list:
    if name == 'Ana':
        count = count + 1
print(count)