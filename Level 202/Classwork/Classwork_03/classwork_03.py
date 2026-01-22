# 2) მომხმარებელს კითხე საიტზე რეგისტრაცია სურს თუ შესვლა, თუ მან აირჩია რეგისტრაცია შევეკითხოთ სახელი, პაროლი შემდეგ ეს ინფორმაცია დავამატოთ ფაილში, ამ ფაილში უნდა იყოს შენახული ყველა დარეგისტრირებული ექაუნთი, თითო ექაუნთს ქონდეს თითო ხაზი დათმობილი,თუ აირჩია შესვლა უთხარით რომ დროებით შესვლა შეუძლებელია


login_or_registration = input("login or registration: ")

with open('./Level 202/Classwork/Classwork_03/classwork.txt') as file:
    info = file.read()

if login_or_registration.lower() == 'registration':  
    name = input('Enter your name: ')
    password = input("enter password: ")
    
    with open('./Level 202/Classwork/Classwork_03/classwork.txt', 'a') as f:
        f.write(f'\n{name}')
        f.write(f'\n{password}')

elif login_or_registration.lower() == 'login':
    name = input('Enter your name: ')
    password = input("enter password: ")

    is_login = False
    for i in range(0, len(info.split()), 2):
        if info.split()[i] == name and info.split()[i + 1] == password:
            print('Login')
            is_login = True
            break

    if not is_login:
        print("Error")

else:
    print("invalid")