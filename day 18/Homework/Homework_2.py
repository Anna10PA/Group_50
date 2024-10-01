"""2) თქვენით მოიფიქრეთ რაიმე სავარჯიშო რასაც გააკეთებთ if elif else ით ივარჯიშეთ დღევანდელ ნასწავლ მასალაზე ძალიან ბევრი"""

# მომხმარებელი აირჩევს რამდენი ხელი უნდა რომ ითამაშოს, თუ მისი კომპიუტერის არჩეული რიცხვი დაემთხვევა მისას მაშინ მოიგო, თუ არადა თამაში უბრალოდ დამთავრდება
import random
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num_output = random.choice(num)
a = int(input("how many try do you want? "))

user = int(input("Number: "))
for i in range(a):
    if user > 10:
        print("you need less 10")
    elif user < 1:
        print("you need more then 0")
    elif user == num_output:
        print("you won, it was" + str(num_output))
        break
    else:
        ask = int(input("try again: "))

    
