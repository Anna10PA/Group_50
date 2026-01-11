# 4) მოცემულია სია numbers = [2, 3, 4, 5, 7], lambdaს გამოყენებით სიის ყველა წევრი გაამრავლე საკუთარ ინდექსებზე და შემდეგ ჩაამატე ეს რიცხვები ახალ ცარიელ ლისტში

numbers = [2, 3, 4, 5, 7]
result = []

x = lambda num_list, num: num_list.index(num) * num

for i in numbers:
    result.append(x(numbers, i))

print(result)
