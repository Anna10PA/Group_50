# შექმენით ტუპლი რომელშიც მოათავსებთ სხვადასხვა სახელებს, შემდეგ მოდებნით ამ სახელებიდან იმ სიტყვას რომელიც იწყება ა ასოზე ის ელემენტები ჩაანაცვლეთ სიტყვა "change"


my_tuple = ('name', 'ana', 'goa', 'hello', 'hola')
my_tuple = list(my_tuple)

for i in range(len(my_tuple)):
    if my_tuple[i][0].lower() == 'a':
        my_tuple[i] = 'change'

print(tuple(my_tuple))