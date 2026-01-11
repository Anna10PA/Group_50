# 1) მოცემულია სია numbers = [1, 2, 3, 4, 5, 12, 24, -1, -3, 44, 65, 43], lambdaს გამოყენებით დააბრუნე მხოლოდ ის რიცხვები რომლებიც მეტია 3-ზე.

numbers = [1, 2, 3, 4, 5, 12, 24, -1, -3, 44, 65, 43]

x = lambda user_list: [num for num in user_list if num >= 3]
print(x(numbers))

