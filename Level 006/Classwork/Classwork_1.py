'''1) მომხარებელს შეეკითხეთ ასაკი შემდეგ შეადარეთ მისი ასაკი მეტია თუ არა 18-ზე'''

age = int(input("Enter your age: "))
if age > 18:
    print("metia 18-ze")
elif 18 > age > 0:
    print('ar aris srulwlovani')
else:
    print('ra arseba xar')
