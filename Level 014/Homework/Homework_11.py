''')დაწერეთ ისეთი პროგრამა რომელიც მომხმარებელს უპრინტავს კვირის დღეს მომხმარებლის შემოტანილი რიცხვის მიხედვით (1 არის ორშაბათი, 2 სამშაბათი და ა.შ) გამოიყენეთ if elif else'''

number = int(input("Enter number: "))

if number == 1:
    print('ორშაბათი')
elif number == 2:
    print('სამშაბათი')
elif number == 3:
    print('ოთხშაბათი')
elif number == 4:
    print('ხუთშაბათი')
elif number == 5:
    print('პარასკევი')
elif number == 6:
    print('შაბათი')
elif number == 7:
    print('კვირა')
else:
    print('არ არსებობს ეგეთი დღე')