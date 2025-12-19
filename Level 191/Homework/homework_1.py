# https://www.codewars.com/kata/58379c3b51e3b680aa000164/train/python

# ვერ გავაკეთე, ოდესმე თუ მივხვდი გავასწორებ

def sum_up_numbers(numbers):
    result = 0
    for i in numbers:
        if i[-2:-1] == ',' or i[-3:-2] == ',':
            result += float(i.replace('.', '').replace(',', '.'))
        elif i[-2:-1] == '.' or i[-3:-2] == '.':
            result += float(i.replace(',', ''))
        else:
            result += float(i.replace(',', '').replace('.', ''))
    return f"{result:,.2f}"


# def sum_up_numbers(numbers):
#     sum1 = 0  
#     sum2 = 0  
#     sum3 = 0  

#     for i in numbers:
#         if '.' in i and ',' in i:
#             dot_index = len(i) - i[::-1].find('.') - 1
#             comma_index = len(i) - i[::-1].find(',') - 1
            
#             if dot_index > comma_index:
#                 parts = i.split('.')
#                 cents = int(parts[1])
#                 main = parts[0].replace(',', '')
#             else:
#                 parts = i.split(',')
#                 cents = int(parts[1])
#                 main = parts[0].replace('.', '')
                
#         elif ',' in i:
#             parts = i.split(',')
#             cents = int(parts[1])
#             main = parts[0]
#         elif '.' in i:
#             parts = i.split('.')
#             cents = int(parts[1])
#             main = parts[0].replace(',', '')
#         else:
#             cents = 0
#             main = i

#         sum1 += cents
#         sum2 += int(main)

#         if sum1 >= 100:
#             balance = sum1 // 100
#             sum1 %= 100
#             sum2 += balance

#         if sum2 >= 1000:
#             balance = sum2 // 1000
#             sum2 %= 1000
#             sum3 += balance
            

#     sum = sum3*1000 + sum2 + sum1
#     return f"{sum:,.2f}"