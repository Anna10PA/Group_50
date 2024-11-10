'''1) შექმენით სია რომელშიც იქნება 15 ელემენტი შემდეგ გამოიტანეთ სიის ყველა ელემენტი while loop-ის გამოყენებით და ასევე for loop-ითაც'''

list = [1, 2, 3, 4, 7, 10, 30, 9, 12, 900, 192, 32, 180, 28, 29]

# for loop
for i in range(len(list)):
    print(list[i])

# while loop
loop = 0
while loop != len(list):
    print(list[loop])
    loop += 1