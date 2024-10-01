"""  ლოგიკური ოპერატორების გამოყენებით შექმენით ყველა შესაძლო ვარიანტის ოპერაცია and ზეც და or ზეც, შეასრულოთ ლოგიკური ოპერაციები შედარების ოპერატორებსი გამოყენებით(<, >) ყველა შესაძლო ვარიანტი """

#Task 1
print(True and True)
print(True and False)
print(False and True)
print(False and False)

#Task 2
print(True or False)
print(True or True)
print(False or True)
print(False or False)

#Task 3
print(10>5 and 5>3 ) #True and True
print(10>3 and 20<10) #True and False
print(30<1 and 100>3) #False and true
print(1<0 and 20<0) #False and False 

#Task 4
print(10>=3 or 40>3) #True or True
print(20>12 or 30<4) #True or False
print(20<3 or 30>10) #False or True
print(10>100 or 20>30) #False or False
