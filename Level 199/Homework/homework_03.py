# 3) მოცემულია სია nums = [1, 2, 3, 4, 5, 6], filter -> map ის გამოყენებით დატოვე ლუწი რიცხვები და თითოეული გაამრავლე 2-ზე

nums = [1, 2, 3, 4, 5, 6]
result = list(map(lambda n : n * 2, list(filter(lambda x: x % 2 == 0, nums))))

print(result)