# 4) მოცემულია სამი სეტი: required = {"python", "sql"}, forbidden = {"java"}, candidate = {"python", "java", "git"}. დაადგინე: აკმაყოფილებს თუ არა კანდიდატი მოთხოვნილებებს, რომელი წესები ირღვევა ან თუ ირღვევა საერთოდ.


required = {"python", "sql"}
forbidden = {"java"} 
candidate = {"python", "java", "git"}

result = []

# task 001
for item in forbidden:
    if item in candidate:
        print(f'წესი ირღვევა: {item} არ უნდა იყოს კანდიდატი')

for item in candidate:
    if item in required:
        result.append(item)

print(f'პირობას აკმაყოფილებენ: {set(result)}')


# task 002

if forbidden & candidate:
    print(f'წესი ირღვევა: {forbidden & candidate} არ უნდა იყოს კანდიდატი')

print(f'პირობას აკმაყოფილებენ: {required & candidate}')