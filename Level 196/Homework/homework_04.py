# 4) მომხმარებელს შემოაყვანინე 5 მნიშვნელობა, რომელსაც დაამატებ სიაში. თუ შემოყვანილი მნიშვნელობა არ არის რიცხვი დაბეჭდე ერორი, თუ რიცხვი უარყოფითია -> valueError, თუ ყველაფერი კარგადაა გამოითვალე სიაში მყოფი რიცხვების საშუალო არითმეტიკული, საბოლოოდ დაბეჭდე "რიცხვების დამუშავება დასრულებულია"


try:
    result = []
    for i in range(5):
        number = int(input("enter number: "))
        if number <= 0:
            raise ValueError('არ შეიძლება უარყოფითი რიცხვი')
        else:
            result.append(number)

except ValueError as error:
    print(error)

else:
    print(sum(result) / len(result))

finally:
    print("რიცხვების დამუშავება დასრულებულია")