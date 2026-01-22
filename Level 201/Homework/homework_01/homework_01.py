# წაიკითხე ფაილში მონაცემები და dic-ად გარდაქმენი

my_dic = {}

with open('./Level 201/Homework/homework_01/homerowk_01.txt', 'r') as file:
    word = file.read().split()
    keys = [word[k] for k in range(len(word)) if k % 2 == 0]
    value = [word[v] for v in range(len(word)) if v % 2 == 1]

    for index in range(len(keys)):
        my_dic[keys[index]] = value[index]

print(my_dic)