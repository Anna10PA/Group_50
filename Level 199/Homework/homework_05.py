# 5) nums = [9, 2, 7, 4, 5, 6, 1], დატოვე მხოლოდ კენტი რიცხვები დაა დაალაგე ზრდადობით

nums = [9, 2, 7, 4, 5, 6, 1]

result = sorted(list(filter(lambda n: n % 2 == 1, nums)))

print(result)