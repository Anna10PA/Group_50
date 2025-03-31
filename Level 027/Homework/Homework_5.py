'''5) დაწერეთ პროგრამა რომელიც ბეჭდავს ყველა რიცხვს 1-100 მდე რომელიც იყოფა 3-ზე და 5-ზე
while loop:'''

# task 1
num = 1

while num <= 100:
    if num % 3 == 0 and num % 5 == 0:
        print(num)
    num += 1

# task 2
for i in range(1, 101, 15):
    print(i)
