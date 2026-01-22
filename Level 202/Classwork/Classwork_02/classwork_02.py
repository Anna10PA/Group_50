# 2) მომხმარებელს კითხე საიტზე რეგისტრაცია სურს თუ შესვლა, თუ მან აირჩია რეგისტრაცია შევეკითხოთ სახელი, პაროლი შემდეგ ეს ინფორმაცია დავამატოთ ფაილში, ამ ფაილში უნდა იყოს შენახული ყველა დარეგისტრირებული ექაუნთი, თითო ექაუნთს ქონდეს თითო ხაზი დათმობილი,თუ აირჩია შესვლა უთხარით რომ დროებით შესვლა შეუძლებელია


login_or_registration = input("login or registration: ")


if login_or_registration.lower() == 'registration':  
    name = input('Enter your name: ')
    password = input("enter password: ")
    
    with open('./Level 202/Classwork/Classwork_02/classwork.txt', 'a') as f:
        result = [name, password]
        f.write(str(result))

elif login_or_registration.lower() == 'login':
    print("login")

else:
    print("invalid")