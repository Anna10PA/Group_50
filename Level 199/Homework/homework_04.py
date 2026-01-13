# 4) მოცემულია სია nums = [1, 2, 3, 4, 5, 6], filter -> map ის გამოყენებით აიყვანე ყველა რიცხვი კვადრატში და დატოვე მხოლოდ ის რიცხვები რომლებიც მეტია 20-ზე 

nums = [1, 2, 3, 4, 5, 6]

result = list(filter(lambda x: x > 20, list(map(lambda n: n ** 2, nums))))
print(result)