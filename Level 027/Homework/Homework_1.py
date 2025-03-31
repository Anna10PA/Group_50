'''1) for ციკლის მეშვეობით შეასრულეთ ყველა მათემატიკური ოპერაცია 0-დან 100-მდე რიცხვებზე ''' 

# Task 1
for num1 in range(0, 101):
    for num2 in range(0, 101):
        print(str(num1) + " + " + str(num2) + ' = ' + str(num1 + num2))

# Task 2
for num1 in range(0, 101):
    for num2 in range(0, 101):
        print(str(num1) + " - " + str(num2) + ' = ' + str(num1 - num2))
    
# Task 3
for num1 in range(0, 101):
    for num2 in range(0, 101):
        print(str(num1) + " * " + str(num2) + ' = ' + str(num1 * num2))

# Task 4
for num1 in range(0, 101):
    for num2 in range(1, 101):
        print(str(num1) + " / " + str(num2) + ' = ' + str(num1 / num2))