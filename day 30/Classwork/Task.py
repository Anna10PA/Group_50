# append - დამატება
# pop - გახეთქვა, შლიის ელემენტს index-ის მიხედვით
# remove - შლის ელემენტს
# extend - გაფართოება, გაერთიანება
#               append 
# append - დამატება

# Task 1
list = [1, 5, 2, 4 ]
list.append(40)         # სიაში დაემატება
print(list)             

# Task 2
name = input("ENTER: ")
list.append(name)

# Task 3  
# pop - გახეთქვა, შლიის ელემენტს index-ის მიხედვით
# remove - შლის ელემენტს

#       remove
list = [1, 5, 2, 4 ]
list.remove(1)    # გადავცემთ იმ "ელემენტს" რომელიც გვინდა რომ წაიშალოს
print(list)

#       pop
list.pop(1)   # წაშლის 1 index-ზე მყოფ ელემენტს (მე-2) 
print(list)

# Task 4
list[1] = "ANA"
# list -ში პირველ index-ზე მყოფ ელემენტს და მის მაგივრად იქნება "ANA"

# Task 5
# extend - გაერთიანება
list_1 = [1, 2, 3]
list_2 = [4, 5, 6]

list_1.extend(list_2)
# list_1 -ში გაერთიანდება list_2 ელემენტები