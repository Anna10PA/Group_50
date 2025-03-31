'''4) შექმენით 3 ცრილი სამივე იქნება განსხვავებული მონაცემთა ტიპიები  | ბოლეანი არა საჭირო | და შექმენით ცარიელი ცხრილი სადაც იქნება დასაწყისში ინტეჯერების ცხრილი  სტრინგების ცხრილი და მერე ფლოათების ცხრილი'''

list =["hello", 10, 20, 20.5, "GOA IS BEST", "best Group 40 <3 ", 14, 3.9]
string = []
integer = []
floatt = []

for i in list:
    if type(i) == str:
        string.append(i)
    elif type(i) == float:
        floatt.append(i)
    elif type(i) == int:
        integer.append(i)
        
print(string)
print(floatt)
print(integer)
