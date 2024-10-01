#                   list - სია
 
#  task 1
#       სიის შექმნა: 
name = "Ana"
# შეიძლება იყოს ნებისმიერი სიის შიგნით str, int, bool 
name_list = ["Ana", "Elene", "nika", 40, 20, 23, True, False, 5.0, 10.5 ]
print(name_list)


# task 2
# index - ადგილი, რიგითობა, meramdenea konkretuli elementi
# ცვლადის სახელი და [] ფრჩხილებში რა ინდექსაც ჩავწერთ იმის ცვლადს ამოაგდებს. 
print(name_list[1])


# task 3
# len() - სიგრძე
name = ['gabrieli', 'nika', 'giorgi', 'elene', 'ana', 'mayvala', 'jumbera', 'jemali', 'joni', 'vano', 'jimiko', 'guliveri']

print(len(name[1]))

name_1 = name[5]
print(len(name_1))


# task4 
for i in name:
    print([i])

for i in range(len(name)):
    print(name[i])

for i in range(10):
    print(name[i])

