# 2) მომხარებელს შეეკითხეთ სახელი შემდეგ შექმენით ფუნქცია რომელსაც არგუმენტად გადაცემთ მომხმარებლის სახელს შემდეგ  კი ფუქნცია მიესალმება მომხმარებელს მაგ : hello luka 

user_name = input("Enter Name: ")
def name(Name):
    # print('Hello '+ Name)
    return 'hello '+ Name
# name(user_name)
print(name(user_name))
