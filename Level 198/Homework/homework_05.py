# 5) მოცემულია სია numbers = [12, 24, 55, 67, 98], შექმენი lambda, რომელიც აბრუნებს რიცხვის ციფრების ჯამს.


numbers = [12, 24, 55, 67, 98]

x = lambda num: sum([int(n) for n in str(num)])
result = lambda num_list: [x(num) for num in num_list] 

print(result(numbers))