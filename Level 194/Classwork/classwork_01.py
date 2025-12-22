#    1) # შექმენით ტუპლი სადაც ჩაწერთ ერთი და იგივე ელემენტებს რამდენჯერმე, შემდეგ ჩვენი მიზანია დავაბრუნოთ ტუპლი სადაც იქნება ელემენტი დასორტირებული იმის მიხედვით თუ რომელი ელემენტი უფრო მეტჯერ განმეორდა სიაში (apple, (banana, cherry))

my_tuple = (1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8, 8, 8, 9, 10)

my_tuple = list(my_tuple)

result = []

while my_tuple:
    max = my_tuple[0]

    for item in my_tuple:
        if my_tuple.count(item) > my_tuple.count(max):
            max = item

    result.append(max)
    for a in range(my_tuple.count(max)):
        my_tuple.remove(max)




print(result)