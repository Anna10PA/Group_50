# 1) მოცემულია სია nums = [1, 2, 3, 4, 5], map-ის და lambda-ს გამოყენებით მიიღე ახალი სია სადაც თითოეული რიცხვი გამრავლებულია 3-ზე

nums = [1, 2, 3, 4, 5]

result = list[map(lambda n: n * 3, nums)]
print(result)