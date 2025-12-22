#  1)  შექმენით ტუპლი სადაც ჩაწერთ ერთი და იგივე ელემენტებს რამდენჯერმე, შემდეგ ჩვენი მიზანია დავაბრუნოთ ტუპლი სადაც იქნება ელემენტი დასორტირებული იმის მიხედვით თუ რომელი ელემენტი უფრო მეტჯერ განმეორდა სიაში (apple, (banana, cherry))

my_tuple = ('goa', 'goa', 'hello', 100, 100, 'Ana', 16, True, True, True, False )

# task 000
my_dic = {}
new_list = []

# task 001
for i in my_tuple:
    if i not in new_list:
        new_list.append(i)

# task 002
for value in new_list:
    if my_dic.get(my_tuple.count(value)) :
        old_value = my_dic[my_tuple.count(value)]

        if type(old_value) == list:
            old_value.append(value)
            my_dic[my_tuple.count(value)] = old_value
        else:
            my_dic[my_tuple.count(value)] = [old_value, value]

    else:
        my_dic[my_tuple.count(value)] = value


# task 003
keys = []
for key in my_dic:
    keys.append(key)


# task 004
for key in range(len(keys)-1):
    if keys[key] > keys[key + 1]:
        item = keys[key]
        keys[key] = keys[key + 1]
        keys[key + 1] = item
                

# task 005
result = []

for i in keys:
    if type(my_dic[i]) == list:
        result.append(tuple(my_dic[i]))
    else:
        result.append(my_dic[i])

result = tuple(result)
print(result)
