# 2) დასორტეთ tuple-ში სიტყვები სიგრძის მიხედვით


my_tuple = ('name', 'LONG Name 123', '1233333333333' ,'ana', 'goa', 'hello', 'hola')

my_tuple = list(my_tuple)

for i in range(len(my_tuple)):
    for index in range(len(my_tuple) - 1):
        item = my_tuple[index]
        if len(my_tuple[index]) > len(my_tuple[index + 1]):
            my_tuple[index] = my_tuple[index + 1]
            my_tuple[index + 1] = item

my_tuple = tuple(my_tuple)

print(my_tuple)