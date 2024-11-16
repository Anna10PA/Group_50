'''6) შექმენით სია რომელშიც იქნება სახელები შემდეგ კი შექმენით პროგრამა რომელიც ამოშლის ყველა სახელს რომელიც "t" ასოზე იწყება და ჩაამატებს ახალ სიაში'''

list = ['tamari', 'tinatini', 'kato', 'Ana']
new_list = []
for i in list:
    if i[0] != 't':
        new_list.append(i)
print(new_list)