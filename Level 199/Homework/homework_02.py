# 2) მოცემულია სია nums = [3, -1, 0, -7, 8, -2], filter-ის გამოყენებით დატოვე მხოლოდ უარყოფითი რიცხვები

nums = [3, -1, 0, -7, 8, -2]

result = list(filter(lambda x: x < 0, nums))
print(result)