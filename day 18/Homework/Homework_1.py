"""day 18:
1) შექმენით ბანკის სისტემა სადაც იქნება ძალიან ბევრი პირობები და გამოიყენებთ if, elif და else -ს, გამოიყენებთ ასევე განვლილ მასალასაც
"""
# operation
print("1. balance: ")
print("2. Credit to someone account: ")
print("3. credit to your accaunt: ")
print("4. conversion: ")
print("Hello, Please choose number what do you want: ")
num = int(input(" number: "))

# balance
if num == 1:
    print("At this moment you have 10.00 GEL")

# accaunt 
elif num == 2:
    id = int(input("Enter your id: "))
    if len(str(id)) == 11:
        ask = int(input("How many do you want in you accaunt? "))
        print(f"Now you have {ask:.2f} GEL")
    else:
        ask = input("Are you Human? yes or no: ")
        if ask == "yes":
            print("then next time enter correct id. bye")
        elif ask == "no":
            print("bye")
        else: 
            print("ERROR")

# accaunt N2
elif num == 3:
    money = int(input("Enter money: "))
    if money > 0:    
        cource = input("Gel or Usd: ")
        if cource == "Gel" or "Usd":
            print(f"Now you have {money:.2f} {cource}")
        else:
            print("ERROR")
    elif money == 0:
        print("Bye")
    else:
        print("I think you want rob bank, Bye")

# convercion 
elif num == 4:
    print("1. USD ---- Gel ")
    print("2. Gel ---- USD")
    operation = int(input("witch one? "))
    if operation == 1:
        ask = int(input("Enter your USD Moeny: "))
        print(f"NOw you have {ask*2.6} Gel")
    elif operation == 2:
        ask = int(input("Enter your Gel Moeny: "))
        print(f"NOw you have {ask/2.6} USD")
    else:
        print("sorry i can't help you")
else:
    print("ERROR")
