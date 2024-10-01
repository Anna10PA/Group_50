""""for loop 
1) for ციკლის მეშვეობით შეასრულეთ ყველა მათემატიკური ოპერაცია 0-დან 100-მდე რიცხვებზე """

sum = 0
difference = 0
division = 0
multipication = 0

# sum (+)
print("         Sum: ")
for x in range(101):
    for i in range(101):
        sum = x + i
        print(f"{str(x)} + {str(i)} = {sum}")

# difference (-)
print(" ")
print("         Difference: ")
for x in range(101):
    for i in range(101):
        difference = x - i
        print(f"{str(x)} - {str(i)} = {difference}")

# division (/)
print(" ")
print("         Division: ")
for x in range(1, 101):
    for i in range(1, 101):
        division = x / i
        print(f"{str(x)} / {str(i)} = {division}")

# multipication (*)
print(" ")
print("         Multipicati: ")
for x in range(101):
    for i in range(101):
        multipicati = x * i
        print(f"{str(x)} * {str(i)} = {multipicati}")


