"""8) შექმენით სია, სადაც შეიტანთ თქვენი ოჯახის წევრების სახელებს. გამოიყენეთ indexing და დაბეჭდეთ ყველას სახელი ცალ-ცალკე.
"""
My_family_members = ['nini', 'giorgi', 'nikolozi', 'saba', 'nitsa','dachi', 'mako' ]

# 1
print(My_family_members[0])
print(My_family_members[1])
print(My_family_members[2])
print(My_family_members[3])
print(My_family_members[4])
print(My_family_members[5])
print(My_family_members[6])

# 2
for i in My_family_members:
    print(i)

# 3
for i in range(len(My_family_members)):
    print(My_family_members[i])