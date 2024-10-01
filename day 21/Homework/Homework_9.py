""" დამატებით თქვენთვითონ მოიფიქრეთ რაიმე ამოცანები რაზეც ფიქრობთ რომ for loop გამოგადგებათ და ივარჯიშეთ ამაზე ბევრი"""

num = int(input("Enter Number: "))

operation = input("*; /; +; -; **; //; %: ")

answer = 0
if operation == "*":
    for i in range(0, num):
        answer = num * i
        print(f"{num} * {i} = {answer}")
elif operation == "/":
    for i in range(1, num):
        answer = num / i
        print(f"{num} / {i} = {answer}")
elif operation == "+":
    for i in range(0, num):
        answer = num + i
        print(f"{num} + {i} = {answer}") 
elif operation == "-":
    for i in range(0, num):
        answer = num - i
        print(f"{num} - {i} = {answer}")    
elif operation == "**":
    for i in range(0, num):
        answer = num ** i
        print(f"{num} ** {i} = {answer}") 
elif operation == "//":
    for i in range(1, num):
        answer = num // i
        print(f"{num} // {i} = {answer}") 
elif operation == "%":
    for i in range(1, num):
        answer = num % i
        print(f"{num} % {i} = {answer}")
else:
    print("ERROR") 