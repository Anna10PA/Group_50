# 2) მოცემუმლია სია numbers = [1, 2, 3, 4, 5, 6], lambdaს გამოყენებით ახალ სიაში ჩაამატე მხოლოდ ლუწი რიცხვები

# № 01
numbers = [1, 2, 3, 4, 5, 6]
result = []

even_or_odd = lambda num: num % 2 == 0

for num in numbers:
    if even_or_odd(num):
        result.append(num)

print(result)

# № 02
numbers = [1, 2, 3, 4, 5, 6]
x = lambda num_list : [num for num in num_list if num % 2 == 0]
print(x(numbers))

