# შექმენით Tuple რომელშიც იქნება სხვადასხვა ტიპის მონაცემები. დააბრუნე მხოლოდ integer ტიპის მონაცემები.


my_tuple = ('Hello', True, 2009, "Ana", 160.5, 16, 20, 37, 50)

# ვარიანტი 1
my_tuple = tuple([item for item in my_tuple if type(item) == int])


# ვარიანტი 2
my_tuple = list(my_tuple)
result = []

for item in my_tuple:
    if type(item) == int:
        result.append(item)
my_tuple = tuple(result)

print(my_tuple)