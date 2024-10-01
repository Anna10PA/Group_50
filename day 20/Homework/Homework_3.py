"""1-დან 100-მდე დაითვალეთ ხუთის ჯერადი რიცხვების ჯამი გამოიყენეთ if, else გამოგადგებათ % ნიშანი"""

num = 0
for i in range(1, 100):
    if i % 5 == 0:
        num = num + i
    else:
        print()
print(num)
