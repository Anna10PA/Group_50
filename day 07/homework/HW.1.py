# 1) მომხმარებელს input-ის გამოყენებით უნდა შემოატანინოთ მონაცემთა ტიპი და შემდეგ უნდა დაპრინტოთ მომხმარებლის შეტანილი მონაცემთა ტიპი example: თუ მომხმარებელმა შემოიტანა string-ი მაშინ უნდა გამოიტანოს <class string> 

name=input("what is your name: ")
a=float(input("enter any number: "))
b=int(input("enter any whole number: "))
math= a>b

print(type(name))    # <class 'str'>
print(type(a))       # <class 'float'>  
print(type(b))       # <class 'int'>
print(type(math))    # <class 'bool'>    
