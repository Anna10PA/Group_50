# 1) map ფუნქციის და lambdaს გამოყენებით ლისტის ყველა ელემენტი აქციე uppercaseებად. names = ["nika", "ana", "aleqsandre', "daviti", "gabrieli", "luka"]

names = ["nika", "ana", "aleqsandre", "daviti", "gabrieli", "luka"]

result = list(map(lambda x: x.upper(), names))
print(result)