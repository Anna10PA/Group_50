# 2) შექმენით ტექსტური ფაილი შემდეგ კი წაიკითხეთ ის პითონიდან და დაბეჭდეთ

# პირველი ვარიანტი
file = open('Level 201/Classwork/task.txt', 'r', encoding='utf-8')   
print(file.read())


# მეორე ვარიანტი
with open('Level 201/Classwork/task.txt', 'r', encoding='utf-8') as f:
    print(f.read())

