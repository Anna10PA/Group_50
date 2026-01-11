# მოცემულია რიცხვების სია: numbers = [1, 2, 3, 4, 5]. შექმენი lambda რომელიც ამ რიცხვებს გაამრავლებს 2-ზე. გამოიყენე for ციკლი რათა ახალ ლისთში ჩაამატო უკვე ორზე გამრავლებული რიცხვები.


numbers = [1, 2, 3, 4, 5]
result = []

# task 01
x = lambda num : num * 2
for i in numbers:
    result.append(x(i))
print(result)

# task 02
x = lambda user_list: [num * 2 for num in user_list]
print(x(numbers))