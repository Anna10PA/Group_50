# 3) მომხმარებელს შემოაყვანინე პაროლი, პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს, უნდა შეიცავდეს რიცხვს, არ უნდა შეიცავდეს space,წესის დარღვევა -> valueError, წარმატება -> "პაროლი მიღებულია", საბოლოოდ გამოიტანე "შემოწმება დასრულებულია"


try:
    password = input('Enter password: ')
    is_error = False

    # task 001
    for num in password:
        if num in '1234567890':
            is_error = False
            break
        else:
            is_error = True
    
    # task 002
    if ' ' in password or len(password) < 8:
        is_error = True

    if is_error:
        raise ValueError('Password does not fits the rules.')

    
except ValueError as e:
    print(e)

else:
    print("პაროლი მიღებულია")

finally:
    print('შემოწმება დასრულებულია')
