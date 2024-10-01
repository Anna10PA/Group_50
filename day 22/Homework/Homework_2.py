#  2) პითონში აქამდე რაც კი გვისწავლია ყველაფრის გამოყენებით გააკეთეთ მაქსიმალურად დახვეწილი რეგისტრაციის ფუნქციონალი, ეცადეთ რაც შეიძლება დახვეწოთ და გააუმჯობესოთ დაუმატოთ ბევრი ფუნქციონალები და ასე შემდეგ, აუცილებლად გამოიყენეთ ლუპები

print("                                         Hello in GOA ACADEMY")
print("                                             registration:  ")

ask = input("do you want registration in Goa Academy?: ")
if ask.upper() == "YES":
    user = input("Are you sure? ") 
    while user.upper() == "YES":
        name = input("Enter your name: ")
        last_name = input("Enter your last name: ")
        id = int(input(f"Dear {name} {last_name}, enter your Id: "))
        age = int(input("Enter your age: "))
        if age < 5:
            print("Sorry I don't know if you can registration now")
        else:
            code = int(input("enter 4 symbol code: "))
            i = 3
            while code != 2009 and i > 0:
                i = i - 1
                code = int(input(f"it isn't correct, you have only {i} chance left "))
            if code == 2009:
                print("")
                print("")
                print("                                    Personal information: ")
                print(f"Name: {name}")
                print(f"Last Name: {last_name}")
                print(f"Age: {age}")
                print(f"personal ID: {id}")
                print("")
                print("")
                user = input("Do you want start registration again? ")
                if user.upper() == "NO":
                    list =input("do you want saw groups?")
                    while list.upper() == "YES":
                        for i in range(0, 42, 1):
                            print("Group "+(str(i)) )
                        num =int(input("enter group number: "))
                        if 42>num>-1:
                            print("")
                            print("")
                            print("                                     WELLCOME IN GOA ACADEMY")
                            print("                                  NEW Personal information: ")
                            print("                 Now you are Student in Goa Academy ")
                            print(f"Name: {name}")
                            print(f"Last Name: {last_name}")
                            print(f"Age: {age}")
                            print(f"personal ID: {id}")
                            print(f"Group: {num}")
                            break
                        else:
                            list =input("do you need saw the list again?")
                else:
                    print("bye")
elif ask.upper() == "NO":
    print("okay goodbye")
else:
    print("I don't get")
                


