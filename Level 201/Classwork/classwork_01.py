# level 199 & 200:
    # 1) შექმენით სია რომელშიც იქნება სახელები მოთავსებული შემდეგ კი დააბრუნეთ ისეთი სია რომელშიც მხოლოდ იქნება ის სახელები რომელიც იწყება "ა" ასოზე


names = ['Ana', 'Leo', "Lui", "Anastasia", 'andria', "alex"]

result = [n for n in names if n[0].lower() == 'a']
print(result)