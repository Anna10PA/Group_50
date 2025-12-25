# 2) მომხმარებელს შეაყვანინე ასაკი. თუ ასაკი არ არის რიცხვი გამოიტანე ერორი, თუ ასაკი უარყოფითია გამოიტანე შეცდომა (ValueError), თუ ყველაფერი სწორია დაბეჭდე "ასაკი მიღებულია".


try:
    user_age = int(input('Enter your age: '))
    if user_age < 0:
        raise ValueError(user_age) 

except ValueError as error:
    print(error)

except:
    print('There is an error here.')

else:
    print("Age accepted")