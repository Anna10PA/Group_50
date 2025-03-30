''' 8) მომხმარებელს შეეკითხეთ სახელი, გვარი, ასაკი, საცხოვრებელი,ჰობი შემდეგ კი დაბეჭდეთ გრძელი წინადადება მაგ. შენი სახელია "სახელი და გვარი" შენი ასაკია "ასაკი" და ასე შემდეგ'''

name = input("enter name: ")
last_name = input("enter last_name: ")
age = int(input("enter age; "))
address = input('address: ')

print(f'{name} {last_name} {age} years old. live in {address}')