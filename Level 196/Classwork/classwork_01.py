# მომხმარებელს შემოაყვანინეთ ორი რიცხვი, პროგრამამ უნდა სცადოს რიცხვების წაკითხვა და მათი ერთმანეთზე გაყოფა, თუ მომხმარებელი შეიყვანს სტრინგს ან სხვა რაიმე ტიპის მონაცემს გამოიტანეთ შესაბამისი ერორი, თუ შეცდომა არ მოხდა დაიბეჭდოს გაყოფის შედეგი, და ნებისმიერ შემთხვევაში ასევე დაიბეჭდოს "პროგრამამ დაასრულა მუშაობა"


try:
    num1 = int(input("Enter first num: "))
    num2 = int(input("Enter second num: "))

except ValueError as error:
    print(error)

except ZeroDivisionError as error:
    print(error)
    
else:
    print(num1 / num2)

finally:
    print("პროგრამამ დაასრულა მუშაობა")