list = ['helouu', 'ana', 'elene', 'nini', 'gio']

#       task 1
# დადებითი ინდექსებია: (ინდექსი რომელიც არის დადებითი)
print(list[3])

# უარყოფითი ინდექსია: ინდექსი რომელიც უარყოფითად მიგვითითებს.
print(list[-3])

# slicing - დაჭრა (არის :)
print(list[0:2])
# print(list[0:2]) რაც print(list[:2])

print(list[:])
# print(list[:] მთლიანად გამოჩნდება)
# ამით ვეუბნებით კომპიუტერს რომ ინდქსი 0-დან დაიბეჭდოს 2-მდე ოღონდ მე-2 აღარ ჩაითვლება


#       task 2
lists =[]
for i in range(100):
    lists.append(i)
print(lists)