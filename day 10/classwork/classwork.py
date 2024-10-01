# if-თუ
# იდენტაცია მარჯვნივ 4 სფეისით წასვლას ნიშნავს.

name = "nika"


if 2 > 1:
    print("true")

# 5 == 3 ტოლია თუ არა 5=3 / შედარება
# = მინიჭების ოპერატპრი

if name =="meraba":
    print("True")
else:
    print("False")

# else - სხვა შემთხვევაში

age =25
if age >= 18:
    print("შენ ხარ სრულწლოვანი")
    if age > 70:
        print("შენ ხარ პერსიონერი")
    else:
        print("შენ ხარ ახალგაზრდა")
else:
    print("შენ არ ხარ სრულწლოვანი")

num=int(input("enter any number: - or +"))
if num <=0 :
    print("False")
elif num >0:
    print("True")
else:
    print("error")
